import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import { loginContext } from "../../../App";
import { addReview } from "../../../redux/actions/reviewActions";
import Dashboard from "../Dashboard/Dashboard";

function GiveReview() {
  const [loggedInUser] = useContext(loginContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();

  const onSubmit = (data) => {
    console.log(data);
    dispatch(addReview(data));
    if (data) {
      toast.success("Review Submitted!!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };
  return (
    <>
      <Dashboard>
        <section className="mt-5 container w-100">
          <h1>Give Review</h1>
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
          <form
            // style={{ display: orderData ? "none" : "block" }}
            onSubmit={handleSubmit(onSubmit)}
            autoComplete="off"
            className="p-5"
          >
            <div className="mb-3">
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Your Email"
                defaultValue={loggedInUser.email}
                readOnly
                {...register("email", { required: true })}
              />
              {errors.email && (
                <span className="text-danger">This field is required</span>
              )}
            </div>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="Your Name"
                defaultValue={loggedInUser.name}
                readOnly
                {...register("name", { required: true })}
              />
              {errors.name && (
                <span className="text-danger">This field is required</span>
              )}
            </div>
            <div className="mb-3">
              <textarea
                maxLength="200"
                className="form-control"
                id="notes"
                rows="3"
                placeholder="Give Your Honest Review in 200 Words"
                {...register("notes", { required: true })}
              ></textarea>
              {errors.notes && (
                <span className="text-danger">This field is required</span>
              )}
            </div>
            <div className="">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </form>
        </section>
      </Dashboard>
    </>
  );
}

export default GiveReview;
