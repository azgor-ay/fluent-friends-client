import { Helmet } from "react-helmet-async";
import Table from "../../components/ShareAble/Table";
const SelectedClasses = () => {
  return (
    <div>
      <Helmet>
        <title>Fluent Friends || Bookmarked/Selected Classes</title>
      </Helmet>
      <h1 className="page-heading">My Selected Classes</h1>
      <Table></Table>
    </div>
  );
};

export default SelectedClasses;
