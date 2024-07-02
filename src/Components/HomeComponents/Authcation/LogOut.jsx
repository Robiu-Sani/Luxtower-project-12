import Swal from "sweetalert2";
import useAuthContext from "../../customComponent/useAuthContext";
import { useNavigate } from "react-router-dom";

export default function UserLogOut() {
  const { LogOut } = useAuthContext();
  const navigate = useNavigate();

  const HandleLOgOut = () => {
    LogOut()
      .then(() => {
        Swal.fire({
          icon: "success",
          title: ` successfully log out`,
          showConfirmButton: false,
          timer: 2000,
        });
        navigate("/");
      })
      .then((err) => {
        console.log(err.message);
      });
  };

  return (
    <button
      onClick={HandleLOgOut}
      className={` text-center w-full shadow-md text-white font-bold p-1 border border-[rgba(141,141,141,0.4)]`}
    >
      LOGOUT
    </button>
  );
}
