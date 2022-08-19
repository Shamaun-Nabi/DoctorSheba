import React from "react";
import {
  useAuthState,
  useUpdatePassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import Loading from "../components/Loading";
import auth from "../firbase.init";

export default function UpdateProfile() {
  const [user, loading, error] = useAuthState(auth);
  const [updateProfile, updating, updateError] = useUpdateProfile(auth);
  const [updatePassword, passwordUpdating, passwordError] =
    useUpdatePassword(auth);

  const { register, handleSubmit, watch } = useForm();

  if (updating || passwordUpdating) {
    return <Loading />;
  }
  const onSubmit = async (data) => {
    console.log(data);
    await updateProfile({
      displayName: data.fullName,
      photoURL: data.photoLink,
    });
    await updatePassword(data.password);
  };
  return (
    <div>
      <section className=" text-gray-800 text-center md:text-left mt-4 container mx-auto ">
        <div className="flex justify-center ">
          <div className="rounded-lg shadow-lg bg-white  w-3/5">
            <div className="flex justify-center p-4">
              <img className="rounded-t-lg" src={user?.photoURL} alt="" />
            </div>

            <div className="mt-4">
              <div className="w-full">
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="bg-white shadow-md rounded w-full p-10 pt-6  "
                >
                  <div className="mb-4">
                    <label
                      className="block text-gray-700 text-sm font-bold mb-2"
                      htmlFor="username"
                    >
                      Username
                    </label>
                    <input
                      {...register("fullName",{required:true})}
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="username"
                      type="text"
                      placeholder={user?.displayName}
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      className="block text-gray-700 text-sm font-bold mb-2"
                      htmlFor="email"
                    >
                      Email
                    </label>
                    <input
                      readOnly
                      //   disabled
                      className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-400 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                      id="email"
                      type="email"
                      value={user?.email}
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      className="block text-gray-700 text-sm font-bold mb-2"
                      htmlFor="password"
                    >
                      Password
                    </label>
                    <input
                      {...register("password")}
                      className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                      id="password"
                      type="password"
                      placeholder="******************"
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      className="block text-gray-700 text-sm font-bold mb-2"
                      htmlFor="photo"
                    >
                      Photo Url
                    </label>
                    <input
                      {...register("photoLink")}
                      className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                      id="photo"
                      type="text"
                      placeholder="Give A photo url of yours"
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <button
                      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                      type="submit"
                    >
                      Update Profile
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
