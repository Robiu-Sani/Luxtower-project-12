import { Link } from "react-router-dom";
import AppartmentCard from "../../Share/AppartmentCard";
import useAppartments from "../../customComponent/useAppartments";

export default function AppartmentSection() {
  const { appartmants } = useAppartments();

  // Slice the array to get only the first three apartments
  const displayedAppartments = appartmants.slice(0, 3);

  return (
    <div className="w-full py-10 flex flex-col gap-5 justify-center items-center">
      <div className="container mx-auto px-2 py-10 gap-5 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
        {displayedAppartments.map((apartmentData) => (
          <AppartmentCard
            key={apartmentData._id}
            apartmentData={apartmentData}
          />
        ))}
      </div>
      <Link
        to={`/appartment`}
        className="px-5 p-2 border-b-2 border-[#ffd5bd] hover:bg-[#ffd5bd]"
      >
        See All Apartments
      </Link>
    </div>
  );
}
