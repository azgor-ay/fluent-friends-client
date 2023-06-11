import { Helmet } from "react-helmet-async";
import Card from "../components/ShareAble/Card";
import useClasses from "../hooks/useClasses";

const Classes = () => {
    const data = useClasses()
    return (
        <div>
            <Helmet>
                <title>
                Fluent Friends | Classes
                </title>
            </Helmet>
            <h1 className="page-heading">Our <span className="text-primary">classes</span></h1>
            <div className="grid grid-cols-3 gap-8">
                {
                    data.map(d => <Card
                    key={d.name}
                    data={d}
                    ></Card>)
                }
            </div>
        </div>
    );
};

export default Classes;