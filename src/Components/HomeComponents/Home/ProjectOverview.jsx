import { useState } from "react";
import CountUp from "react-countup";
import design from "../../../Image/design1.png";
import ScrollTrigger from "react-scroll-trigger";

export default function ProjectOverview() {
  const [visible, setVisible] = useState(false);

  const handleEnterViewport = () => {
    setVisible(true);
  };

  const handleExitViewport = () => {
    setVisible(false);
  };

  return (
    <div className="w-full min-h-screen overflow-hidden flex justify-center flex-col items-center p-2 md:p-5 xl:p-10 py-10 relative bg-[#ffefe5]">
      <div className="w-full z-10 flex flex-col justify-center items-center">
        <h3 className="text-xl uppercase text-[#312720] font-bold">
          building overView
        </h3>
        <img src={design} alt="" className="w-[250px]" />
      </div>
      <div className="container z-10 mx-auto py-10">
        <h1 className="text-3xl md:text-5xl text-center mb-7">
          What Makes A Home?
        </h1>
        <p className="max-w-[750px] mx-auto text-center">
          This attractive new neighbourhood for young families and active people
          delivers fresh contemporary living with numerous free-time
          opportunities. Ovocne sady’s high-quality and practical apartments
          with functional architecture, public spaces, and excellent options for
          sport and relaxation – all just steps from your new home.
        </p>
      </div>
      <div className="container z-10 mx-auto grid mt-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        <ScrollTrigger
          onEnter={handleEnterViewport}
          onExit={handleExitViewport}
        >
          <div className="w-full">
            <div
              className="w-full h-[50px]"
              style={{
                background:
                  "linear-gradient(-8deg,#2c241e57 0%,#2c241e57 50%, rgba(255, 0, 0, 0) 50%,rgba(255, 0, 0, 0) 100%)",
              }}
            ></div>
            <div className="w-full bg-[#2c241e57] p-3 flex py-7 flex-col justify-center items-center gap-1">
              <CountUp
                end={260}
                duration={1}
                className={`text-6xl font-bold text-white ${
                  visible ? "visible" : ""
                }`}
              />
              <span className="text-white letterSpaceing">SQUARE AREAS</span>
            </div>
          </div>
        </ScrollTrigger>
        <ScrollTrigger
          onEnter={handleEnterViewport}
          onExit={handleExitViewport}
        >
          <div className="w-full">
            <div
              className="w-full h-[50px]"
              style={{
                background:
                  "linear-gradient(-8deg,#2c241e57 0%,#2c241e57 50%, rgba(255, 0, 0, 0) 50%,rgba(255, 0, 0, 0) 100%)",
              }}
            ></div>
            <div className="w-full bg-[#2c241e57] p-3 flex py-7 flex-col justify-center items-center gap-1">
              <CountUp
                end={520}
                duration={1}
                className={`text-6xl font-bold text-white ${
                  visible ? "visible" : ""
                }`}
              />
              <span className="text-white letterSpaceing">CAR PARKING</span>
            </div>
          </div>
        </ScrollTrigger>
        <ScrollTrigger
          onEnter={handleEnterViewport}
          onExit={handleExitViewport}
        >
          <div className="w-full">
            <div
              className="w-full h-[50px]"
              style={{
                background:
                  "linear-gradient(-8deg,#2c241e57 0%,#2c241e57 50%, rgba(255, 0, 0, 0) 50%,rgba(255, 0, 0, 0) 100%)",
              }}
            ></div>
            <div className="w-full bg-[#2c241e57] p-3 flex py-7 flex-col justify-center items-center gap-1">
              <CountUp
                end={35}
                duration={1}
                className={`text-6xl font-bold text-white ${
                  visible ? "visible" : ""
                }`}
              />
              <span className="text-white letterSpaceing">APARTMENTS</span>
            </div>
          </div>
        </ScrollTrigger>
        <ScrollTrigger
          onEnter={handleEnterViewport}
          onExit={handleExitViewport}
        >
          <div className="w-full">
            <div
              className="w-full h-[50px]"
              style={{
                background:
                  "linear-gradient(-8deg,#2c241e57 0%,#2c241e57 50%, rgba(255, 0, 0, 0) 50%,rgba(255, 0, 0, 0) 100%)",
              }}
            ></div>
            <div className="w-full bg-[#2c241e57] p-3 flex py-7 flex-col justify-center items-center gap-1">
              <CountUp
                end={532}
                duration={1}
                className={`text-6xl font-bold text-white ${
                  visible ? "visible" : ""
                }`}
              />
              <span className="text-white letterSpaceing">ROOMS</span>
            </div>
          </div>
        </ScrollTrigger>
      </div>
      <h1 className="md:text-[13vw] text-[100px] transform rotate-90 sm:rotate-0 absolute font-bold uppercase text-[#ffe0ce]">
        building <br /> <span className="ml-0 sm:ml-[100px]">Overview</span>
      </h1>
    </div>
  );
}
