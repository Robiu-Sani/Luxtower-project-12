import { useForm } from "react-hook-form";
import useAgreements from "../../../customComponent/useAgreements";
import useAuthContext from "../../../customComponent/useAuthContext";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function MakePayment() {
  const { LogedUser } = useAuthContext();
  const { agreements } = useAgreements();
  const navigate = useNavigate();
  const findAgreement = agreements.filter(
    (item) => item.User_email === LogedUser.email
  );
  const bookAgreement = findAgreement[0];

  const [monthValue, setMonthValue] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();

  const onSubmit = (data) => {
    const currentYear = new Date().getFullYear();
    const formData = {
      ...data,
      month: `${monthValue} ${currentYear}`,
      email: LogedUser.email,
      floor: bookAgreement ? bookAgreement.floorNo : "",
      block: bookAgreement ? bookAgreement.Block_name : "",
      appartment: bookAgreement ? bookAgreement.Apartment_no : "",
      Rent: bookAgreement ? bookAgreement.Rent : "",
    };
    localStorage.setItem("paymentData", JSON.stringify(formData));
    navigate("/paymentsystem");
  };

  const handleMonthChange = (event) => {
    setMonthValue(event.target.value); // Update selected month value
    setValue("month", event.target.value); // Set the value of the "month" field in react-hook-form
  };

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return (
    <div className="w-full min-h-screen relative pt-10 px-3">
      <div className="w-full p-3 bg-[#2c241e]">
        <h1 className="text-white text-center text-3xl">Make Payment</h1>
      </div>
      <div className="w-full my-5 overflow-scroll h-[calc(100vh-135px)] py-10 px-2 flex justify-center items-center">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="container mx-auto grid grid-cols-1 sm:grid-cols-2 gap-10 p-10 border-2 border-t-[40px] relative border-[#2c241e]"
        >
          <div className="w-full">
            <label className="uppercase text-[#2c241e] py-4">
              Member Email
            </label>
            <input
              type="text"
              value={LogedUser.email}
              disabled
              className="w-full bg-[#c78960] text-[#2c241e] p-2 px-4"
            />
          </div>
          <div className="w-full">
            <label className="uppercase text-[#2c241e] py-4">Floor No</label>
            <input
              type="number"
              value={bookAgreement ? bookAgreement.floorNo : ""} // Check if bookAgreement exists
              disabled
              className="w-full bg-[#c78960] text-[#2c241e] p-2 px-4"
            />
          </div>
          <div className="w-full">
            <label className="uppercase text-[#2c241e] py-4">Block Name</label>
            <input
              type="text"
              value={bookAgreement ? bookAgreement.Block_name : ""} // Check if bookAgreement exists
              disabled
              className="w-full bg-[#c78960] text-[#2c241e] p-2 px-4"
            />
          </div>
          <div className="w-full">
            <label className="uppercase text-[#2c241e] py-4">
              Apartment No/Room No
            </label>
            <input
              type="text"
              value={bookAgreement ? bookAgreement.Apartment_no : ""} //
              disabled
              className="w-full bg-[#c78960] text-[#2c241e] p-2 px-4"
            />
          </div>
          <div className="w-full">
            <label className="uppercase text-[#2c241e] py-4">Rent</label>
            <input
              type="text"
              value={bookAgreement ? `$${bookAgreement.Rent}` : ""} // Check if bookAgreement exists
              disabled
              className="w-full bg-[#c78960] text-[#2c241e] p-2 px-4"
            />
          </div>
          <div className="w-full">
            <label className="uppercase text-[#2c241e] py-4">Month</label>
            <select
              {...register("month", { required: true })}
              onChange={handleMonthChange}
              className="w-full bg-[#c78960] text-[#2c241e] p-2 px-4"
            >
              <option value="">Select a month</option>
              {months.map((month, index) => (
                <option key={index} value={month}>
                  {month}
                </option>
              ))}
            </select>
            {errors.month && (
              <span className="text-red-600">This field is required</span>
            )}
          </div>
          <div className="w-full col-span-1 sm:col-span-2">
            <input
              type="submit"
              value="PAY"
              className="w-full cursor-pointer text-[#c78960] font-bold bg-[#2c241e] p-2 px-4"
            />
          </div>
        </form>
      </div>
    </div>
  );
}
