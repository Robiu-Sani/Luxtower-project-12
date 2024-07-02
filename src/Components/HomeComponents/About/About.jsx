import BGimg from "../../../Image/south.jpg";
import Compani from "../../Share/Compani";
import AboutText from "./AboutText";
import DesignQuote from "./DesignQuote";
import Exparieance from "./Exparieance";
import FeatureCard from "./FeatureCard";
import image from "../../../Image/aboutus.jpg";
import Team from "./Team";

export default function About() {
  return (
    <div className="w-full">
      <div
        className="w-full h-[500px] flex justify-center items-center bg-center bg-fixed bg-cover bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url(${BGimg})`,
        }}
      >
        <h1 className="text-white font-extrabold text-5xl md:text-7xl uppercase">
          About us
        </h1>
      </div>
      <AboutText></AboutText>
      <DesignQuote></DesignQuote>
      <Exparieance></Exparieance>
      <FeatureCard></FeatureCard>
      <div className="w-full">
        <div className="container mx-auto my-10">
          <img src={image} className="w-full" alt="" />
        </div>
      </div>
      <Team></Team>
      <Compani></Compani>
    </div>
  );
}
