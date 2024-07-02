import { useForm } from "react-hook-form";
import useAxiosSource from "../../../customComponent/useAxiosSorce";
import useAnnouncement from "../../../customComponent/useAnnouncement";
import Swal from "sweetalert2";

export default function AnnouncementForm() {
  const { axiosSource } = useAxiosSource();
  const { refetch } = useAnnouncement();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    axiosSource
      .post("/announcements", data)
      .then(() => {
        reset();
        refetch();
        Swal.fire({
          icon: "success",
          title: "Announcement added successfullu",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((err) => {
        console.error(err.message);
      });
  };

  return (
    <div className="w-full border-r border-[#2c241e] h-full p-10">
      <h1 className="text-2xl text-center my-3 font-bold">Add Announcement</h1>
      <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
        <div className="w-full my-4">
          <label className="m-3">Title*</label>
          <input
            type="text"
            name="title"
            placeholder="Enter Title"
            {...register("title", { required: true })}
            className="input w-full mt-2"
          />
          {errors.title && <p className="text-red-500">Title is required</p>}
        </div>
        <div className="w-full my-4">
          <label className="m-3">Date*</label>
          <input
            type="date"
            name="date"
            {...register("date", { required: true })}
            className="input w-full mt-2"
          />
          {errors.date && <p className="text-red-500">Date is required</p>}
        </div>
        <div className="w-full my-4">
          <label className="m-3">Description*</label>
          <textarea
            name="description"
            placeholder="Enter description"
            {...register("description", { required: true })}
            className="input w-full mt-2 h-[100px]"
          ></textarea>
          {errors.description && (
            <p className="text-red-500">Description is required</p>
          )}
        </div>
        <div className="w-full my-4">
          <input
            type="submit"
            value={"Add Announcement"}
            className="input w-full mt-2 bg-[#2c241e] hover:bg-[#c78960] text-white font-bold"
          />
        </div>
      </form>
    </div>
  );
}
