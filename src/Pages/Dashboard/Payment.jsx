import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "../../components/payment/CheckoutForm";
import { useParams } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_PK);
const Payment = () => {
  const params = useParams();
  const id = params?.id;
  console.log(id);

  const [axiosSecure] = useAxiosSecure();
  const { data: enrollFor = [] } = useQuery(["enrollFor"], async () => {
    const res = await axiosSecure.get(`/selectedClasses/${id}`)
    return res.data;
  });
  
  return (
    <div className="w-full">
      <h1 className="page-heading">Enroll Now!</h1>
      <Elements stripe={stripePromise}>
        <CheckoutForm
          price={enrollFor?.price}
          enrolledFor={enrollFor}
        ></CheckoutForm>
      </Elements>
    </div>
  );
};

export default Payment;
