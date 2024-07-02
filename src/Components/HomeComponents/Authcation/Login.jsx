import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, Navigate, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAuthContext from "../../customComponent/useAuthContext";
import useUsers from "../../customComponent/useUsers";
import useAxiosSource from "../../customComponent/useAxiosSorce";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import GoogleAuth from "./GoogleAuth";

export default function Login() {
  const { LoginUserByEmail, LogedUser } = useAuthContext();
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");
  const { users } = useUsers();
  const { axiosSource } = useAxiosSource();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [showPassword, setShowPassword] = useState(false);

  if (LogedUser) {
    return <Navigate to={"/"} />;
  }

  const onSubmit = (data) => {
    setErrorMessage(""); // Reset error message before submitting
    LoginUserByEmail(data.email, data.password)
      .then((result) => {
        navigate(location.state ? location.state : "/");
        reset();
        Swal.fire({
          icon: "success",
          title: `${result.user.displayName} successfully logged in`,
          showConfirmButton: false,
          timer: 2000,
        });
        const currentUserEmail = result.user.email;
        const userExists = users.some(
          (user) => user.email === currentUserEmail
        );
        if (!userExists) {
          return axiosSource.post("/users", {
            name: result.user.displayName,
            image: result.user.photoURL,
            email: currentUserEmail,
            position: "user",
          });
        } else {
          console.log("User already exists in the database");
          return Promise.resolve(); // Resolve the promise to proceed to the next then block
        }
      })
      .catch((err) => {
        setErrorMessage("Invalid email or password. Please try again.");
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
          footer: err.message,
        });
      });
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="w-full bg-[#f0e6dc] px-2">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center container mx-auto justify-center min-h-screen p-5 bg-[#f0e6dc]">
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
          <h1 className="text-2xl font-bold mb-6">Welcome Back!✌️</h1>
          {errorMessage && <p className="text-red-500 mb-4">{errorMessage}</p>}
          <form onSubmit={handleSubmit(onSubmit)}>
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
              Sign in
            </button>
          </form>
          <div className="flex items-center my-4">
            <div className="flex-grow border-t border-gray-300"></div>
            <span className="mx-2 text-gray-500">or continue</span>
            <div className="flex-grow border-t border-gray-300"></div>
          </div>
          <div className="flex items-center my-4">
            <GoogleAuth />
          </div>
          <div className="text-center mt-4">
            Don`t have an account?{" "}
            <Link to="/signup" className="text-blue-500">
              Sign up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
