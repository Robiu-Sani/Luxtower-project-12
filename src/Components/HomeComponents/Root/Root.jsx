import { Outlet } from "react-router-dom";
import NavBar from "../../Default_Components/NavBar/NavBar";
import Footer from "../../Default_Components/Footer/Footer";

export default function Root() {
  return (
    <div>
      <NavBar></NavBar>
      <Outlet />
      <Footer></Footer>
    </div>
  );
}
