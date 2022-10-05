// import { getAuth } from "firebase/auth";
import React, { useEffect, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  useAuthState,
  useSendPasswordResetEmail,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import auth from "../firbase.init";
import { FcGoogle } from "react-icons/fc";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import Loading from "../components/Loading";
import { async } from "@firebase/util";
import useToken from "../hooks/useToken";

export default function Login() {
  const inputRef = useRef();
  // console.log(from);
  const [loggedUser, loggedLoading, loggedError] = useAuthState(auth);

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [signInWithGoogle, googleUser, googleLoading, googleError] =
    useSignInWithGoogle(auth);
  const [sendPasswordResetEmail, sending, resetError] =
    useSendPasswordResetEmail(auth);

  let loginError;
  const {
    register,
    handleSubmit,
    formState: { errors },
    trigger,
  } = useForm();

  // Token getting from hooks

  const [token] = useToken(user || googleUser);

  const navigate = useNavigate();
  let location = useLocation();
  let from = location.state?.from?.pathname || "/";
  useEffect(() => {
    if (token) {
      // console.log(from);
      return navigate(from, { replace: true });
    }
  }, [from, token, navigate]);

  if (loading || googleLoading || loggedLoading) {
    return <Loading />;
  }

  if (error || googleError) {
    loginError = (
      <p className="text-red-500 text-center">
        {error?.message || googleError?.message}
      </p>
    );
  }
  const googleSignIn = async () => {
    await signInWithGoogle();
  };

  const onSubmit = async (data) => {
    await signInWithEmailAndPassword(data.email, data.password);
  };

  const resetPassword = async (e) => {
    e.preventDefault();
    let email = inputRef.current.value;
    console.log(email);
    await sendPasswordResetEmail(email);
    toast.success("Email Sent");
    inputRef.current.value = "";
  };

  return (
    <>
      <section className="h-screen">
        <div className="container px-6 py-12 h-full">
          <div className="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
            <div className="md:w-8/12 lg:w-6/12 mb-12 md:mb-0">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
                className="hidden md:block "
                alt="Phone"
              />
            </div>
            <div className="md:w-8/12 lg:w-5/12 lg:ml-20">
              <div className="text-center p-3 ">
                <h3 className="text-2xl font-bold">Login here</h3>
              </div>
              <form onSubmit={handleSubmit(onSubmit)}>
                {/* Email input */}
                <div className="mb-6">
                  <input
                    {...register("email", { required: "Email required" })}
                    type="text"
                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    placeholder="Email address"
                  />
                  {errors.email && (
                    <p className="text-red-600">{errors.email.message}</p>
                  )}
                </div>
                {/* Password input */}
                <div className="mb-6">
                  <input
                    {...register("password", { required: "Password Required" })}
                    type="password"
                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    placeholder="Password"
                  />
                  {errors.password && (
                    <p className="text-red-600">{errors.password.message}</p>
                  )}
                </div>
                <div className="flex justify-between items-center mb-6">
                  <div className="form-group form-check">
                    <input
                      type="checkbox"
                      className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                      id="exampleCheck3"
                      defaultChecked=""
                    />
                    <label
                      className="form-check-label inline-block text-gray-800"
                      htmlFor="exampleCheck2"
                    >
                      Remember me
                    </label>
                  </div>
                  <span
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModalCenter"
                    className="text-blue-600 hover:text-blue-700 focus:text-blue-700 active:text-blue-800 duration-200 transition ease-in-out cursor-pointer"
                  >
                    Forgot password?
                  </span>
                </div>
                {/* Submit button */}
                <button
                  type="submit"
                  className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="light"
                >
                  Sign in
                </button>
                <div className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5">
                  <p className="text-center font-semibold mx-4 mb-0">OR</p>
                </div>
                {loginError}
                {/* {loginError?toast.error(loginError):toast.success("Success")} */}
                <span
                  onClick={googleSignIn}
                  className="px-7 py-3 text-slate-900 font-medium text-sm leading-snug uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full flex justify-center items-center mb-3"
                  role="button"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="red"
                >
                  <FcGoogle className="mx-4" />
                  Continue with Google
                </span>
                <p className="text-center" href="/">
                  Don't Have an Account{" "}
                  <Link to="/reg" className="text-blue-500 cursor-pointer">
                    Please Register Here
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      <>
        {/* Button trigger modal */}
        {/* Modal */}
        <div
          className="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
          id="exampleModalCenter"
          // data-bs-backdrop="static"
          // data-bs-keyboard="false"
          tabIndex={-1}
          aria-labelledby="staticBackdropLabel"
          aria-hidden="true"
          aria-modal="true"
          role="dialog"
        >
          <div className="modal-dialog modal-dialog-centered relative w-auto pointer-events-none">
            <div className="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
              <div className="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
                <h5
                  className="text-xl font-medium leading-normal text-gray-800"
                  id="exampleModalLabel"
                >
                  Reset Your Password
                </h5>
                <button
                  type="button"
                  className="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />
              </div>
              <div className="modal-body relative p-4">
                <form onSubmit={resetPassword}>
                  <div className="flex justify-center">
                    <div className="mb-3 xl:w-96">
                      <label
                        htmlFor="exampleText0"
                        className="form-label inline-block mb-2 text-gray-700"
                      >
                        Enter Your Email
                      </label>
                      <input
                        // {...register("restmail", { required: true })}
                        ref={inputRef}
                        required
                        // name="resetEmail"
                        type="email"
                        className=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none "
                        id="exampleText0"
                        placeholder="yourmail@mail.com"
                      />
                    </div>
                  </div>
                  <div className="text-center">
                    <button
                      className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out cursor-pointer"
                      type="submit"
                    >
                      Send Email
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </>
    </>
  );
}
