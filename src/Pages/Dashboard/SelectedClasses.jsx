import Table from "../../components/ShareAble/Table";
const SelectedClasses = () => {
  return (
    <div>
      <h1 className="page-heading">My Selected Classes</h1>
      <Table></Table>
      {/* {
        data.map((c, index) => <Card key={index} data={data}></Card>)
      } */}
    </div>
  );
};

export default SelectedClasses;
