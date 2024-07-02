import { useEffect, useState } from "react";
import BGimg from "../../../Image/slide3.jpg";
import AppartmentCard from "../../Share/AppartmentCard";
import useAxiosSource from "../../customComponent/useAxiosSorce";
import useAppartmantsPasition from "../../customComponent/useAppartmantsPasition";

export default function Apartment() {
  const { axiosSource } = useAxiosSource();
  const [getCurrentPage, setGetCurrentPage] = useState(0);
  const itemOfPAges = 6;
  const [apparmentLength, setAppartmanetLength] = useState(0);
  const { appartmantsPasition } = useAppartmantsPasition({ getCurrentPage });

  useEffect(() => {
    axiosSource
      .get("/appartmentlength")
      .then((response) => setAppartmanetLength(response.data.count))
      .catch((err) => console.error(err));
  }, [axiosSource]);

  const numberOfPages = Math.ceil(apparmentLength / itemOfPAges);
  const pages = [...Array(numberOfPages).keys()];

  return (
    <div className="w-full">
      <div
        className="w-full h-[500px] flex justify-center items-center bg-center bg-fixed bg-cover bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url(${BGimg})`,
        }}
      >
        <h1 className="text-white font-extrabold text-5xl md:text-7xl uppercase">
          Apartment
        </h1>
      </div>
      <div className="w-full flex justify-center items-center py-10 bg-slate-200 px-2"></div>
      <div className="container mx-auto px-2 py-10 gap-5 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
        {appartmantsPasition.map((apartmentData) => (
          <AppartmentCard
            key={apartmentData._id}
            apartmentData={apartmentData}
          />
        ))}
      </div>
      <div className="w-full pt-10 pb-5 flex justify-center items-center">
        <div className="join">
          <button
            onClick={() => setGetCurrentPage((prev) => Math.max(prev - 1, 0))}
            className="join-item btn"
          >
            «
          </button>
          {pages.map((page) => (
            <button
              key={page}
              className={`join-item btn ${
                getCurrentPage === page ? "bg-blue-500" : ""
              }`}
              onClick={() => setGetCurrentPage(page)}
            >
              {page + 1}
            </button>
          ))}
          <button
            onClick={() =>
              setGetCurrentPage((prev) => Math.min(prev + 1, numberOfPages - 1))
            }
            className="join-item btn"
          >
            »
          </button>
        </div>
      </div>
    </div>
  );
}
