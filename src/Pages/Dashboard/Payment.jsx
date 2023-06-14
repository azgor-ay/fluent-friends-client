import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "../../components/payment/CheckoutForm";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_PK);
const Payment = () => {
  const params = useParams();
  const id = params?.id;
    const [data, setData] = useState([])
    useEffect(()=>{
        fetch(`http://localhost:5000/classes/${id}`)
        .then(res => res.json())
        .then(data => setData(data))
    },[id])
    console.log(data);

    const price = data.price || 100;
  return (
    <div>
      <h1 className="page-heading">Enroll Now!</h1>
      <Elements stripe={stripePromise}>
        <CheckoutForm price={price}></CheckoutForm>
      </Elements>
    </div>
  );
};

export default Payment;
