import { useState, useEffect } from "react";
import { FaTelegram } from "react-icons/fa6"; // Ensure you're using the correct import path
import logo from "../../../../Image/logo.svg";
import MAnageAllCopon from "./MAnageAllCopon";
import { useForm } from "react-hook-form";
import useAxiosSource from "../../../customComponent/useAxiosSorce";
import useCoupon from "../../../customComponent/useCoupon";
import Swal from "sweetalert2";
import useAuthContext from "../../../customComponent/useAuthContext";

export default function ManageCoupons() {
  const { axiosSource } = useAxiosSource();
  const { coupons, refetch } = useCoupon();
  const { LogedUser } = useAuthContext();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredCoupons, setFilteredCoupons] = useState([]);

  useEffect(() => {
    if (searchTerm === "") {
      setFilteredCoupons(coupons || []);
    } else {
      const results = (coupons || []).filter((coupon) =>
        coupon.code.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredCoupons(results);
    }
  }, [searchTerm, coupons]);

  const onSubmit = (data) => {
    axiosSource
      .post("/coupons", data)
      .then(() => {
        reset();
        refetch();
        Swal.fire({
          icon: "success",
          title: "Coupon added successfully",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((err) => {
        console.error(err.message);
      });
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="w-full min-h-screen pt-10 px-3">
      <div className="w-full flex flex-col gap-5 sm:flex-row justify-center sm:justify-between p-3 bg-[#2c241e]">
        <img src={logo} alt="logo" />
        <input
          type="search"
          onChange={handleSearch}
          placeholder="Search Coupons by code"
          className="input sm:w-[450px]"
          value={searchTerm}
        />
        <div className="h-[50px] w-[50px] mr-3 hidden sm:flex justify-center cursor-pointer shadow-md items-center rounded-full overflow-hidden">
          <img src={LogedUser.photoURL} alt="profile" className="h-full" />
        </div>
      </div>
      <div className="w-full bg-[#2c241e] flex justify-center flex-col items-center p-3 md:px-10 px-3 xl:px-20">
        <h3 className="text-[#ffd5b9]">Add Coupon</h3>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full grid rounded-md overflow-hidden grid-cols-6 bg-[#ffd5b9]"
        >
          <input
            {...register("offerDigit", { required: true })}
            type="number"
            placeholder="Offer Digit"
            className="w-full p-2 col-span-2 placeholder:text-[#2c241e] bg-transparent border-r outline-0 border-[#2c241e]"
          />
          {errors.offerDigit && (
            <span className="col-span-2 text-red-500">
              This field is required
            </span>
          )}

          <select
            {...register("offerType", { required: true })}
            className="w-full p-2 col-span-2 bg-transparent border-r outline-0 border-[#2c241e]"
            defaultValue=""
          >
            <option value="" disabled>
              Offer Type
            </option>
            <option value="%">%</option>
            <option value="$">$</option>
          </select>
          {errors.offerType && (
            <span className="col-span-2 text-red-500">
              This field is required
            </span>
          )}

          <input
            {...register("code", { required: true })}
            type="text"
            placeholder="Code"
            className="w-full p-2 col-span-2 bg-transparent placeholder:text-[#2c241e] outline-0"
          />
          {errors.code && (
            <span className="col-span-2 text-red-500">
              This field is required
            </span>
          )}

          <input
            {...register("description", { required: true })}
            type="text"
            placeholder="Description"
            className="w-full p-2 col-span-5 placeholder:text-[#2c241e] bg-transparent border-t border-r outline-0 border-[#2c241e]"
          />
          {errors.description && (
            <span className="col-span-5 text-red-500">
              This field is required
            </span>
          )}

          <button
            type="submit"
            className="w-full p-2 border-t border-[#2c241e] flex justify-center items-center"
          >
            <FaTelegram />
          </button>
        </form>
      </div>
      <MAnageAllCopon coupons={filteredCoupons} />
    </div>
  );
}
