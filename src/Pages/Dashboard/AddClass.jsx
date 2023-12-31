import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { Toaster, toast } from "react-hot-toast";
import { Helmet } from "react-helmet-async";

export default function AddClass() {
    const [axiosSecure] = useAxiosSecure()
  const { user } = useContext(AuthContext);
  const image_hosting_token = import.meta.env.VITE_IMG_UPLOAD_TOKEN;
  const image_hosted_url = `https://api.imgbb.com/1/upload?key=${image_hosting_token}`;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const { name, img, price, available_seats } = data;

    const formData = new FormData();
    formData.append("image", img[0]);

    fetch(image_hosted_url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgResponse) => {
        if (imgResponse.success) {
          const imgURL = imgResponse.data.display_url;
          const newClass = {
            img: imgURL,
            name,
            instructor: user?.displayName,
            email: user?.email,
            available_seats,
            price: parseFloat(price),
            enrolled_students: 0,
            status: "pending",
          };
          axiosSecure.post('/classes', newClass)
          .then(data => {
            if(data.data.insertedId){
                toast.success('New Class Added Successfully')
            }
          })
        }
      });
  };

  return (
    <div className="bg-base-200 px-12 pb-12 rounded-3xl">
        <Toaster/>
        <Helmet>
        <title>Fluent Friends || Add A New Class</title>
      </Helmet>
      <h1 className="page-heading">Add new class for Students</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-2 gap-8">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Your Name</span>
            </label>
            <input
              className="input input-bordered w-full"
              type="text"
              readOnly
              defaultValue={user?.displayName}
            />
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Your Email Id</span>
            </label>
            <input
              className="input input-bordered w-full"
              type="text"
              readOnly
              defaultValue={user?.email}
            />
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Course/Class name</span>
            </label>
            <input
              className="input input-bordered w-full"
              type="text"
              placeholder="example language class"
              {...register("name", { required: true })}
            />
            {errors.name && <span>This is required.</span>}
          </div>

          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <input
              className="input input-bordered w-full"
              type="number"
              placeholder="example $999"
              {...register("price", { required: true })}
            />
            {errors.price && <span>This is required.</span>}
          </div>

          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Relevant Image</span>
            </label>
            <input
              type="file"
              className="file-input file-input-bordered w-full"
              {...register("img", { required: true })}
            />
          </div>

          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Student Allowed</span>
            </label>
            <input
              className="input input-bordered w-full"
              type="number"
              placeholder="example 10"
              {...register("available_seats", { required: true })}
            />
            {errors.available_seats && <span>This is required.</span>}
          </div>
        </div>
        <input
          className="btn btn-accent w-full mt-6"
          type="submit"
          value="Add New Class"
        />
      </form>
    </div>
  );
}
