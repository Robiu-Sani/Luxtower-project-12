import { Link, Outlet } from "react-router-dom";

export default function AuthRoot() {
  return (
    <div>
      <div className="w-full pt-3 pl-3 bg-[#f0e6dc]">
        <Link to="/" className="btn ">
          Go Home
        </Link>
      </div>
      <Outlet></Outlet>
    </div>
  );
}
