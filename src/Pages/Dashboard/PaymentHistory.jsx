import moment from "moment";
import usePaymentsOrEnrolled from "../../hooks/usePaymentsOrEnrolled";
import { Helmet } from "react-helmet-async";

const PaymentHistory = () => {
  const [enrolledOrPayments] = usePaymentsOrEnrolled();
  const totalPrice = enrolledOrPayments.reduce(
    (sum, paid) => sum + paid.price,
    0
  );
  // date, enrolledClassInstructorName, enrolledClassName, price, studentName
  return (
    <div>
      <Helmet>
        <title>Fluent Friends || Payment History</title>
      </Helmet>
      <h1 className="page-heading">Payment History</h1>
      <h1 className="text-3xl pb-6 font-semibold">You Totally Paid: - {parseFloat(totalPrice).toFixed(2)}</h1>
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>#</th>
            <th>Paid Amount</th>
            <th>Date</th>
            <th>Paid For</th>
            <th>Used Email</th>
          </tr>
        </thead>
        <tbody>
          {enrolledOrPayments.map((enrolled, index) => (
            <tr key={index}>
              <th>{index + 1}</th>
             
              <td className="text-xl font-extrabold">${enrolled.price}</td>
              <td>{moment(enrolled.date).format("DD MMM, YY")}</td>
              <td>
                <span>
                  {enrolled.enrolledClassName}
                </span>
              </td>
              <td>
                <span>
                  {enrolled.email}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PaymentHistory;
