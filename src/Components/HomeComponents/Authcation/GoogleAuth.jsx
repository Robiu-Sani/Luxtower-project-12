import { FaGoogle } from "react-icons/fa";
import useAuthContext from "../../customComponent/useAuthContext";
import Swal from "sweetalert2";
import useUsers from "../../customComponent/useUsers";
import useAxiosSource from "../../customComponent/useAxiosSorce";

export default function GoogleAuth() {
  const { LoginWithGoogle } = useAuthContext();
  const { users } = useUsers();
  const { axiosSource } = useAxiosSource();

  const handleGoogleAuth = () => {
    LoginWithGoogle()
      .then((result) => {
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
      .then((result) => {
        Swal.fire({
          icon: "success",
          title: `${result.user.displayName} successfully logged in`,
          showConfirmButton: false,
          timer: 2000,
        });
      })
      .catch((error) => {
        console.error("Error logging in with Google:", error);
      });
  };

  return (
    <button
      onClick={handleGoogleAuth}
      className="w-full flex items-center justify-center bg-red-600 text-white py-2 rounded"
    >
      <FaGoogle className="mr-2" /> Log in with Google
    </button>
  );
}
