import { Navigate, useLocation } from "react-router-dom";
import useAuthContext from "../../customComponent/useAuthContext";

export default function Private({ children }) {
  const { LogedUser, loader } = useAuthContext();
  const location = useLocation();

  if (loader) {
    return (
      <div className="flex justify-center items-center bg-[#e0dfdf] w-full min-h-[500px]">
        <span className="loading loading-spinner loading-[150px]"></span>
      </div>
    );
  }

  if (LogedUser) {
    return children;
  }

  return (
    <Navigate state={location.pathname} to={`/login`} replace={true}></Navigate>
  );
}
