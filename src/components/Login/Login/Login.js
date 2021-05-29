import firebase from "firebase/app";
import "firebase/auth";
import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory, useLocation } from "react-router";
import swal from "sweetalert";
import { loginContext } from "../../../App";
import { firebaseConfig } from "../../../firebase.config";
import "./Login.css";

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

function Login() {
  const [loggedInUser, setLoggedInUser] = useContext(loginContext);
  const [isNewUser, setIsNewUser] = useState(false);
  const [user, setUser] = useState({
    name: "",
    email: "",
    error: "",
    message: "",
    isSignedIn: true,
  });

  let history = useHistory();
  let location = useLocation();

  let { from } = location.state || { from: { pathname: "/" } };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    if (isNewUser) {
      signUp(data);
    } else {
      signIn(data);
    }
  };

  const signIn = (data) => {
    firebase
      .auth()
      .signInWithEmailAndPassword(data.email, data.password)
      .then((userCredential) => {
        // Signed in
        var user = userCredential.user;
        console.log(user);
        swal("Good Job!", "Logged In Successfully!!", "success");
        history.replace(from);
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        swal(`${errorCode}`, `${errorMessage}`, "error");
      });
  };

  const signUp = (data) => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(data.email, data.password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        swal("Good Job!", "Created Account Successfully!!", "success");
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        swal(`${errorCode}`, `${errorMessage}`, "error");
        // ..
      });
  };

  const googleAuthHandler = (e) => {
    e.preventDefault();
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((res) => {
        // ? Sign in successful
        const { displayName, email } = res.user;
        const signedInUser = {
          isSignedIn: true,
          name: displayName,
          email: email,
        };
        setUser(signedInUser);
        setLoggedInUser(signedInUser);
        history.replace(from);
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });

    console.log(loggedInUser);
    console.log(user);
  };

  return (
    <>
      <section className="container">
        <div className="form_container">
          <div className="form_child">
            <h1 className="fw-bold text-center">
              {isNewUser ? "SIGNUP" : "LOGIN"}
            </h1>{" "}
            <br />
            <form
              onSubmit={handleSubmit(onSubmit)}
              autoComplete="off"
              action=""
            >
              <div className="mb-3">
                <input
                  type="email"
                  className="form-control w-100"
                  id="email"
                  name="email"
                  placeholder="Email address"
                  {...register("email", { required: true })}
                />
                {errors.email && (
                  <span className="text-danger">This field is required</span>
                )}
              </div>
              <div className="mb-3">
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="Password"
                  {...register("password", { required: true })}
                />
                {errors.password && (
                  <span className="text-danger">This field is required</span>
                )}
              </div>
              <br />
              <button className="btn btn-outline-info w-100" type="submit">
                {isNewUser ? "Sign UP" : "Log In"}
              </button>
            </form>
            <br />
            <h4 className="or" align="center">
              OR
            </h4>
            <br />
            <div className="d-flex justify-content-center flex-column align-items-center social_signup">
              <button onClick={googleAuthHandler} className="btn">
                Login with Google
              </button>
              <br />
            </div>
            <br />
            <div>
              <h5 align="center">
                {isNewUser ? "Already Have an Account" : "New User"} ?
                <b
                  onClick={() => setIsNewUser(!isNewUser)}
                  style={{ cursor: "pointer" }}
                >
                  {isNewUser ? " LOGIN" : " SIGNUP"}
                </b>
              </h5>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Login;
