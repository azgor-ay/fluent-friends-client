
import { CardElement, useCartElementState, useStripe } from "@stripe/react-stripe-js";
import { useState } from "react";

const CheckoutForm = ({price}) => {
  const stripe = useStripe();
  const elements = useCartElementState();
  const [cardError, setCardError] = useState(" ");

  const handleSubmit = async (event) => {
    event.preventDefault();
    if(!stripe || !elements){
        return;
    }
    
    const card = elements.getElement(CardElement)
    if(card === null){
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
          disabled={!stripe}
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
