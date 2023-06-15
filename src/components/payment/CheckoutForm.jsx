/* eslint-disable react/prop-types */
import {
  CardElement,
  useCartElementState,
  useStripe,
} from "@stripe/react-stripe-js";
import { useContext, useEffect, useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const CheckoutForm = ({ price }) => {
  const stripe = useStripe();
  const elements = useCartElementState();
  const [cardError, setCardError] = useState(" ");
  const [axiosSecure] = useAxiosSecure();
  const [clientSecret, setClientSecret] = useState("");
  const { user } = useContext(AuthContext);

  useEffect(() => {
    if (price) {
      axiosSecure.post("/create-payment-intent", { price })
      .then((res) => {
        console.log(res.data.clientSecret);
        setClientSecret(res.data.clientSecret);
      });
    }
  }, [price]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("error", error);
      setCardError(error.message);
    } else {
      setCardError(" ");
      console.log("payment method", paymentMethod);
    } 

    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || "anonymous",
            name: user?.displayName || "anonymous",
          },
        },
      });
    if (confirmError) {
      console.log(confirmError);
    }
    console.log(paymentIntent);
  };
  return (
    <div className="w-full mx-auto text-base-content">
      <form onSubmit={handleSubmit} className="w-full">
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          className="btn btn-primary btn-sm mt-8"
          type="submit"
          disabled={!stripe || !clientSecret}
        >
          Pay
        </button>
      </form>
      {cardError && (
        <>
          <p className="text-error text-center">{cardError}</p>
        </>
      )}
    </div>
  );
};

export default CheckoutForm;
