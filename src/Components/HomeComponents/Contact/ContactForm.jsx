import useAxiosSource from "../../customComponent/useAxiosSorce";
import { useState } from "react";
import Swal from "sweetalert2";
import useContactMessage from "../../customComponent/useContactMessage";

export default function ContactForm() {
  const { axiosSource } = useAxiosSource();
  const { refetch } = useContactMessage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlesubmit = (e) => {
    e.preventDefault();

    // Get the current date in a readable format
    const currentDate = new Date().toLocaleDateString();

    // Add the current date to the form data
    const dataWithDate = { ...formData, date: currentDate };

    axiosSource
      .post("/contact_message", dataWithDate)
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "Message Sent",
          text: "Your message has been sent successfully!",
        });
        setFormData({ name: "", email: "", message: "" }); // Reset form fields
        refetch();
      })
      .catch(() => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong. Please try again later.",
        });
      });
  };

  return (
    <form
      className="w-full sm:px-10 flex flex-col gap-5"
      onSubmit={handlesubmit}
    >
      <div className="w-full">
        <h1 className="text-3xl font-bold">Drop Us A Line</h1>
        <small>
          Your email address will not be published. Required fields are marked *
        </small>
      </div>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleChange}
        className="p-2 w-full placeholder:text-[#2c241e] bg-transparent border border-[#2c241e]"
      />
      <input
        type="email"
        name="email"
        required
        placeholder="Email*"
        value={formData.email}
        onChange={handleChange}
        className="p-2 w-full bg-transparent placeholder:text-[#2c241e] border border-[#2c241e]"
      />
      <textarea
        name="message"
        placeholder="Message"
        value={formData.message}
        onChange={handleChange}
        className="p-2 w-full bg-transparent placeholder:text-[#2c241e] border border-[#2c241e] h-[100px]"
      ></textarea>
      <input
        type="submit"
        value="Submit"
        className="p-2 w-full bg-[#2c241e] text-[#ffefe5] border hover:bg-[#ffefe5] cursor-pointer hover:text-[#2c241e] border-[#2c241e]"
      />
    </form>
  );
}
