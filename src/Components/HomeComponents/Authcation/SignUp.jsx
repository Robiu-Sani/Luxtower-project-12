import { useForm } from "react-hook-form";
import { Link, Navigate, useNavigate, useLocation } from "react-router-dom";
import image from "../../../Image/auth.jpg";
import GoogleAuth from "./GoogleAuth";
import useAuthContext from "../../customComponent/useAuthContext";
import Swal from "sweetalert2";
import useAxiosSource from "../../customComponent/useAxiosSorce";
import useUsers from "../../customComponent/useUsers";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

export default function SignUp() {
  const { createUserByEmail, updateUserProfile, LogedUser } = useAuthContext();
  const navigate = useNavigate();
  const location = useLocation();
  const { axiosSource } = useAxiosSource();
  const { refetch } = useUsers();
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  if (LogedUser) {
    return <Navigate to="/" />;
  }

  const onSubmit = (data) => {
    createUserByEmail(data.email, data.password)
      .then(() => {
        return updateUserProfile({
          displayName: data.name,
          photoURL: data.imageUrl,
        });
      })
      .then(() => {
        reset();
        navigate(location.state ? location.state : "/");
        Swal.fire({
          icon: "success",
          title: `${data.name} successfully signed up`,
          showConfirmButton: false,
          timer: 2000,
        });
        return axiosSource.post("/users", {
          name: data.name,
          image: data.imageUrl,
          email: data.email,
          position: "user",
        });
      })
      .then(() => {
        console.log("User added successfully");
        refetch();
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: err.message,
          showConfirmButton: true,
        });
      });
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="w-full bg-[#f0e6dc] px-2">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center container mx-auto justify-center min-h-screen p-5 bg-[#f0e6dc]">
        <div className="flex justify-center items-center mt-8 md:mt-0 md:ml-8">
          <img src={image} className="w-full" alt="Sign up" />
        </div>

        <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
          <h1 className="text-2xl font-bold mb-6">Sign Up</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <label className="block mb-2">Name</label>
            <input
              type="text"
              {...register("name", { required: "Name is required" })}
              className="w-full p-2 mb-4 border border-gray-300 rounded"
            />
            {errors.name && (
              <p className="text-red-500">{errors.name.message}</p>
            )}

            <label className="block mb-2">Image URL</label>
            <input
              type="text"
              {...register("imageUrl", { required: "Image URL is required" })}
              className="w-full p-2 mb-4 border border-gray-300 rounded"
            />
            {errors.imageUrl && (
              <p className="text-red-500">{errors.imageUrl.message}</p>
            )}

            <label className="block mb-2">Email</label>
            <input
              type="email"
              {...register("email", { required: "Email is required" })}
              className="w-full p-2 mb-4 border border-gray-300 rounded"
            />
            {errors.email && (
              <p className="text-red-500">{errors.email.message}</p>
            )}

            <label className="block mb-2">Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                {...register("password", {
                  required: "Password is required",
                  pattern: {
                    value: /^(?=.*[A-Z]).{6,}$/, // Regex pattern for at least one uppercase letter and minimum 6 characters
                    message:
                      "Password must be at least 6 characters long and contain at least one uppercase letter",
                  },
                })}
                className="w-full p-2 mb-4 border border-gray-300 rounded"
              />
              <span
                className="absolute top-5 right-2 transform -translate-y-1/2 cursor-pointer"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
            {errors.password && (
              <p className="text-red-500">{errors.password.message}</p>
            )}

            <button
              type="submit"
              className="w-full bg-black text-white py-2 rounded"
            >
              Sign Up
            </button>
          </form>

          <div className="flex items-center my-4">
            <div className="flex-grow border-t border-gray-300"></div>
            <span className="mx-2 text-gray-500">or continue</span>
            <div className="flex-grow border-t border-gray-300"></div>
          </div>
          <GoogleAuth />
          <div className="text-center mt-4">
            I have an account?{" "}
            <Link to="/login" className="text-blue-500">
              Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
