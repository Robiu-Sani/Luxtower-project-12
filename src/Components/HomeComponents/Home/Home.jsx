import Compani from "../../Share/Compani";
import AppartmentSection from "./AppartmentSection";
import Banner from "./Banner";
import Coupne from "./Coupne";
import Features from "./Features";
import Location from "./Location";
import ProjectOverview from "./ProjectOverview";
import Testimonial from "./Testimonial";
import WeProvide from "./WeProvide";
import WelcomeHome from "./WelcomeHome";

export default function Home() {
  return (
    <div className="w-full">
      <Banner></Banner>
      <WelcomeHome></WelcomeHome>
      <ProjectOverview></ProjectOverview>
      <Coupne></Coupne>
      <Features></Features>
      <Location></Location>
      <WeProvide></WeProvide>
      <AppartmentSection></AppartmentSection>
      <Testimonial></Testimonial>
      <Compani></Compani>
    </div>
  );
}
