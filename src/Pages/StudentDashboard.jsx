import { Helmet } from "react-helmet-async";

const StudentDashboard = () => {
  return (
    <div className="drawer lg:drawer-open">
      <Helmet>
        <title>
        Fluent Friends| Student Dashboard 
        </title>
      </Helmet>
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content flex flex-col items-center justify-center">
    <div>
        content
    </div>
    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
  
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-80 h-full bg-primary text-base-content">
      {/* Sidebar content here */}
      <li><a>Sidebar Item 1</a></li>
      <li><a>Sidebar Item 2</a></li>
    </ul>
  
  </div>
</div>
  );
};

export default StudentDashboard;
