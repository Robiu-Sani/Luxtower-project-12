import { Navigate, useLocation } from "react-router-dom";
import useAuthContext from "../../customComponent/useAuthContext";
import useUsers from "../../customComponent/useUsers";

export default function AdminPrivate({ children }) {
  const { LogedUser, loader } = useAuthContext();
  const location = useLocation();
  const { users } = useUsers();

  const findUser = LogedUser
    ? users.find((user) => user.email === LogedUser.email)
    : null;

  if (loader) {
    return (
      <div className="flex justify-center items-center bg-[#e0dfdf] w-full min-h-[500px]">
        <span className="loading loading-spinner loading-[150px]"></span>
      </div>
    );
  }

  if (findUser && findUser.position === "admin") {
    return children; // Render children if the user is an admin
  }

  // Redirect to user dashboard if user is not an admin
  return (
    <Navigate state={location.pathname} to="/userDeshboard" replace={true} />
  );
}
