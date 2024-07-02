import { FaLightbulb, FaBrain, FaMedal } from "react-icons/fa";

export default function FeatureCard() {
  const features = [
    {
      Icon: FaLightbulb,
      title: "Creative",
      description:
        "The landscape infrastructures of streets are arranged in harmony with the common amenities for residents.",
    },
    {
      Icon: FaBrain,
      title: "Innovation",
      description:
        "The landscape infrastructures of streets are arranged in harmony with the common amenities for residents.",
    },
    {
      Icon: FaMedal,
      title: "Reliability",
      description:
        "The landscape infrastructures of streets are arranged in harmony with the common amenities for residents.",
    },
  ];

  return (
    <div className="flex py-10 mb-10 container mx-auto flex-wrap justify-around">
      {features.map((feature, index) => (
        <div
          key={index}
          className="flex flex-col items-center p-4 w-full sm:w-1/2 lg:w-1/3"
        >
          <feature.Icon className="text-4xl mb-2" />
          <h3 className="text-xl font-semibold mb-1">{feature.title}</h3>
          <p className="text-center text-gray-600">{feature.description}</p>
        </div>
      ))}
    </div>
  );
}
