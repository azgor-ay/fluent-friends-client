import moment from "moment/moment";
import usePaymentsOrEnrolled from "../../hooks/usePaymentsOrEnrolled";
import { Helmet } from "react-helmet-async";

const EnrolledClasses = () => {
  const [enrolledOrPayments] = usePaymentsOrEnrolled();
  // date, enrolledClassInstructorName, enrolledClassName, price, studentName
  return (
    <div>
      <Helmet>
        <title>Fluent Friends || Enrolled Classes</title>
      </Helmet>
      <h1 className="page-heading">
        Total Enrolled Classes:- {enrolledOrPayments.length}
      </h1>
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>#</th>
            <th>Course/Class Name</th>
            <th>Instructors Name</th>
            <th>Your Name on Course</th>
            <th>Enrolled Date</th>
          </tr>
        </thead>
        <tbody>
          {enrolledOrPayments.map((enrolled, index) => (
            <tr key={index}>
              <th>{index + 1}</th>
              <td>
                <span className="font-semibold text-xl">
                  {enrolled.enrolledClassName}
                </span>
              </td>
              <td>{enrolled.enrolledClassInstructorName}</td>
              <td>{enrolled.studentName}</td>
              <td>{moment(enrolled.date).format("DD MMM, YY")}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EnrolledClasses;
