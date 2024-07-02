import { useForm } from "react-hook-form";
import { CiCircleRemove } from "react-icons/ci";
import useAxiosSource from "../../../customComponent/useAxiosSorce";
import Swal from "sweetalert2";
import useCoupon from "../../../customComponent/useCoupon";

export default function UpdateCooupons({ item, handleToggleUpdate }) {
  const { axiosSource } = useAxiosSource();
  const { refetch } = useCoupon();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues: item });

  const onSubmit = (data) => {
    const dataobject = {
      offerDigit: data.offerDigit ? data.offerDigit : item.offerDigit,
      offerType: data.offerType ? data.offerType : item.offerType,
      code: data.code ? data.code : item.code,
      description: data.description ? data.description : item.description,
    };
    axiosSource
      .put(`/coupons/${item._id}`, dataobject)
      .then((response) => {
        if (response.status === 200) {
          Swal.fire({
            title: "Success!",
            text: "Coupon updated successfully.",
            icon: "success",
          });
          handleToggleUpdate();
          refetch();
        } else {
          Swal.fire({
            title: "Error!",
            text: "Failed to update coupon.",
            icon: "error",
          });
        }
      })
      .catch((error) => {
        console.error("Update error:", error.message);
        Swal.fire({
          title: "Error!",
          text: "An error occurred while updating the coupon.",
          icon: "error",
        });
      });
  };

  return (
    <div className="fixed top-0 left-0 w-full z-50 h-full bg-[#030101a6] flex justify-center items-center">
      <CiCircleRemove
        onClick={handleToggleUpdate}
        className="cursor-pointer text-5xl text-white absolute left-4 top-3"
      />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-sm mx-auto mt-8 p-6 bg-white rounded-lg shadow-md"
      >
        <div className="mb-4">
          <label
            htmlFor="offerDigit"
            className="block text-[#2c241e] text-sm font-semibold mb-2"
          >
            Offer Digit
          </label>
          <input
            {...register("offerDigit", { required: false })}
            type="number"
            id="offerDigit"
            className="w-full p-3 placeholder-[#2c241e] bg-gray-200 border border-[#2c241e] rounded-md focus:outline-none focus:border-[#c78960]"
          />
          {errors.offerDigit && (
            <span className="text-red-500 text-sm mt-1">
              This field is required
            </span>
          )}
        </div>

        <div className="mb-4">
          <label
            htmlFor="offerType"
            className="block text-[#2c241e] text-sm font-semibold mb-2"
          >
            Offer Type
          </label>
          <select
            {...register("offerType", { required: false })}
            id="offerType"
            className="w-full p-3 bg-gray-200 border border-[#2c241e] rounded-md focus:outline-none focus:border-[#c78960]"
            defaultValue=""
          >
            <option value="" disabled>
              {item.offerType}
            </option>
            <option value="%">%</option>
            <option value="$">$</option>
          </select>
          {errors.offerType && (
            <span className="text-red-500 text-sm mt-1">
              This field is required
            </span>
          )}
        </div>

        <div className="mb-4">
          <label
            htmlFor="code"
            className="block text-[#2c241e] text-sm font-semibold mb-2"
          >
            Code
          </label>
          <input
            {...register("code", { required: false })}
            type="text"
            id="code"
            className="w-full p-3 placeholder-[#2c241e] bg-gray-200 border border-[#2c241e] rounded-md focus:outline-none focus:border-[#c78960]"
          />
          {errors.code && (
            <span className="text-red-500 text-sm mt-1">
              This field is required
            </span>
          )}
        </div>
        <div className="mb-4">
          <label
            htmlFor="description"
            className="block text-[#2c241e] text-sm font-semibold mb-2"
          >
            Description
          </label>
          <textarea
            {...register("description", { required: false })}
            id="description"
            className="block text-[#2c241e] text-sm h-[80px] w-full border-2 font-semibold mb-2"
          ></textarea>
          {errors.description && (
            <span className="text-red-500 text-sm mt-1">
              This field is required
            </span>
          )}
        </div>

        <button
          type="submit"
          className="w-full p-3 bg-[#c78960] text-white font-semibold rounded-md hover:bg-[#2c241e] focus:outline-none focus:bg-[#2c241e]"
        >
          Update Coupon
        </button>
      </form>
    </div>
  );
}
