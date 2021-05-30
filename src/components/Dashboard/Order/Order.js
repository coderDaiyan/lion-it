import moment from "moment";
import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useParams } from "react-router";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { loginContext } from "../../../App";
import serviceData from "../../../fakeData/servicedata.json";
import { addOrder } from "../../../redux/actions/orderActions";
import Dashboard from "../Dashboard/Dashboard";

function Order() {
  const [loggedInUser] = useContext(loginContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    console.log(data);
    dispatch(
      addOrder({
        data,
        selectedService,
        status: "Pending",
        time: moment(new Date()).format("LL"),
      })
    );
    if (data) {
      toast.success("Wow! Ordered Successfully", {
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

  const { id } = useParams();

  const selectedService = serviceData.find((service) => service.id === id);
  return (
    <>
      <Dashboard>
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
          className="p-5 w-75"
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
            <input
              type="text"
              id="service"
              className="form-control"
              defaultValue={selectedService.title}
              readOnly
              {...register("service", { required: true })}
            />
            {errors.service && (
              <span className="text-danger">This field is required</span>
            )}
          </div>
          <div className="mb-3">
            <textarea
              className="form-control"
              id="notes"
              rows="3"
              placeholder="Extra Notes"
              {...register("notes")}
            ></textarea>
            {errors.notes && (
              <span className="text-danger">This field is required</span>
            )}
          </div>
          <div className="">
            <button type="submit" className="btn btn-primary">
              Order
            </button>
          </div>
        </form>
      </Dashboard>
    </>
  );
}

export default Order;
