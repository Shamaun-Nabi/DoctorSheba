import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import {
  useCreateUserWithEmailAndPassword,
  useSendEmailVerification,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import auth from "../firbase.init";
import { FcGoogle } from "react-icons/fc";
import toast from "react-hot-toast";
import Loading from "../components/Loading";

export default function Registration() {
  const navigate = useNavigate();
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const [updateProfile, updating, updateError] = useUpdateProfile(auth);
  const [sendEmailVerification, sending, VerificationError] =
    useSendEmailVerification(auth);

  const {
    register,
    handleSubmit,
    formState: { errors },
    trigger,
  } = useForm();

  if (loading || updating) {
    return <Loading />;
  }
  const userInfoSignIn = async (data) => {
    if (data.Password === data.ConfirmPassword) {
      await createUserWithEmailAndPassword(data.Email, data.Password);
      await sendEmailVerification();
      await updateProfile({ displayName: data.fullName });

      console.log(data.Email, data.Password);
      navigate("/");
      toast.success("User Created");
    } else {
      toast.error("Password Not Matched");
    }
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
                <h3 className="text-2xl font-bold">Register Now</h3>
              </div>
              <form onSubmit={handleSubmit(userInfoSignIn)}>
                {/* Full Name */}
                <div className="mb-6">
                  <input
                    type="text"
                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    placeholder="Your Full Name"
                    {...register("fullName", {
                      required: {
                        value: true,
                        message: "Name is Required",
                      },
                    })}
                  />
                  {errors.fullName && (
                    <span className="text-red-500 p-2">
                      {errors.fullName.message}
                    </span>
                  )}
                </div>
                {/* Email input */}
                <div className="mb-6">
                  <input
                    type="email"
                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    placeholder="Email address"
                    {...register("Email", {
                      required: "Email Is Required",
                      pattern: {
                        value: /^\S+@\S+$/i,
                        message: "Email Invalids",
                      },
                    })}
                    // Live error tracking
                    onKeyUp={() => {
                      trigger("Email");
                    }}
                  />
                  {errors.Email && (
                    <span className="text-red-500 p-2">
                      {errors.Email.message}
                    </span>
                  )}
                </div>
                {/* Password input */}
                <div className="mb-6">
                  <input
                    type="password"
                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    placeholder="Password"
                    {...register("Password", {
                      required: "Password is Required",
                      minLength: {
                        value: 6,
                        message: "Minimum 6 Character",
                      },
                      maxLength: {
                        value: 10,
                        message: "Maximum Length is 10",
                      },
                    })}
                    // Live error tracking
                    onKeyUp={() => {
                      trigger("Password");
                    }}
                  />
                  {errors.Password && (
                    <p className="text-red-500">{errors.Password.message}</p>
                  )}
                </div>
                <div className="mb-6">
                  <input
                    type="password"
                    className={`form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white ${
                      errors.ConfirmPassword
                        ? "focus:border-red-600"
                        : "focus:border-green-600"
                    } focus:outline-none`}
                    placeholder="Confirm Password"
                    {...register("ConfirmPassword", {
                      required: "Confirm Password Required",
                      minLength: {
                        value: 6,
                        message: "Minimum 6 Character",
                      },
                      maxLength: {
                        value: 10,
                        message: "Maximum Length is 10",
                      },
                    })}
                    // Live error tracking
                    onKeyUp={() => {
                      trigger("ConfirmPassword");
                    }}
                  />
                  {errors.ConfirmPassword && (
                    <p className="text-red-500">
                      {errors.ConfirmPassword.message}
                    </p>
                  )}
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

                <p className="text-center" href="/">
                  Already Have an Account{" "}
                  <Link to="/login" className="text-blue-500 cursor-pointer">
                    Please Log In Here
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
