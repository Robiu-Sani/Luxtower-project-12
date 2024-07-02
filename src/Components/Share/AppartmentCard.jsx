import {
  MdOutlineBathroom,
  MdOutlineSquareFoot,
  MdOutlineKingBed,
} from "react-icons/md";
import useAxiosSource from "../customComponent/useAxiosSorce";
import Swal from "sweetalert2";
import useAuthContext from "../customComponent/useAuthContext";
import useAgreements from "../customComponent/useAgreements";
import { useNavigate } from "react-router-dom";
import useHAndleMEmberbyEmail from "../customComponent/useHAndleMEmberbyEmail";

export default function AppartmentCard({ apartmentData }) {
  const { axiosSource } = useAxiosSource();
  const { LogedUser } = useAuthContext();
  const { agreements, AgreeRefetch } = useAgreements();
  const navigate = useNavigate();
  const [handlemember] = useHAndleMEmberbyEmail();

  const userHasAgreement = agreements.some(
    (agreement) => agreement.User_email === LogedUser?.email
  );

  const handleBookingAppartment = (data) => {
    if (!LogedUser) {
      Swal.fire({
        icon: "info",
        title: "Please login first",
        text: "You need to log in to make an agreement.",
        confirmButtonText: "Login",
      }).then(() => {
        navigate("/login");
      });
      return;
    }

    if (userHasAgreement) {
      Swal.fire({
        icon: "error",
        title: "Agreement already exists",
        text: "You can only have one agreement at a time.",
      });
      return;
    }

    Swal.fire({
      title: "Are you sure?",
      text: "One user can agreement for only one apartment!",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Agreement",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSource
          .post("/agreements", data)
          .then(() => {
            handlemember({ position: "user" }, LogedUser.email);
            AgreeRefetch();
            Swal.fire({
              icon: "success",
              title: "Agreement added successfully",
              showConfirmButton: false,
              timer: 1500,
            });
          })
          .catch((err) => {
            console.error(err.message);
            Swal.fire({
              icon: "error",
              title: "Something went wrong!",
              text: err.message,
            });
          });
      }
    });
  };

  const data = {
    User_name: LogedUser?.displayName || "",
    User_email: LogedUser?.email || "",
    Block_name: apartmentData.blockName,
    floorNo: apartmentData.floorNo,
    Apartment_no: apartmentData.apartmentNo,
    id: apartmentData._id,
    Rent: apartmentData.rent,
    Status: "pending",
    date: new Date().toLocaleDateString(),
  };

  return (
    <div className="max-w-sm border border-[#c78960] rounded-lg overflow-hidden shadow-lg">
      <img
        src={apartmentData.apartmentImage}
        alt="Property"
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-2xl font-semibold mb-2">
          {apartmentData.towerName}
        </h3>
        <div className="border-b pb-4 grid grid-cols-2 border-[#c78960] pt-4">
          <p className="text-gray-700">
            <strong>Floor No:</strong> {apartmentData.floorNo}
          </p>
          <p className="text-gray-700">
            <strong>Block:</strong> {apartmentData.blockName}
          </p>
          <p className="text-gray-700">
            <strong>Apartment No:</strong> {apartmentData.apartmentNo}
          </p>
          <p className="text-gray-700">
            <strong>Rent:</strong> ${apartmentData.rent}
          </p>
        </div>
        <div className="flex justify-between text-center my-4">
          <div className="flex flex-col items-center">
            <MdOutlineBathroom size={24} className="text-[#c78960]" />
            <p className="text-gray-700">{apartmentData.bathrooms} Bathrooms</p>
          </div>
          <div className="flex flex-col items-center">
            <MdOutlineSquareFoot size={24} className="text-[#c78960]" />
            <p className="text-gray-700">{apartmentData.totalArea} m²</p>
          </div>
          <div className="flex flex-col items-center">
            <MdOutlineKingBed size={24} className="text-[#c78960]" />
            <p className="text-gray-700">{apartmentData.bedrooms} Bedrooms</p>
          </div>
        </div>
        <button
          onClick={() => handleBookingAppartment(data)}
          className="bg-[#c78960] text-white font-semibold py-2 px-4 rounded-full shadow-md hover:bg-[#b06f4f] transition duration-300"
        >
          Agreement
        </button>
      </div>
    </div>
  );
}
