import BGimg from "../../../Image/slide2.jpg";
import ContactInfo from "./ContactInfo";

export default function Contact() {
  return (
    <div className="w-full">
      <div
        className="w-full h-[500px] flex justify-center items-center bg-fixed bg-center bg-cover bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url(${BGimg})`,
        }}
      >
        <h1 className="text-white text-center font-extrabold text-5xl md:text-7xl uppercase">
          Contact Us
        </h1>
      </div>
      <div className="w-full px-2 pt-10 bg-[#ffefe5]">
        <ContactInfo></ContactInfo>
      </div>
      <div className="w-full">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6827.791879195287!2d90.84359748170202!3d24.44513555309623!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3756946b15a87b2f%3A0x42f70a49e205ef3b!2sKishoreganj%20-%20Karimganj%20Rd!5e1!3m2!1sen!2sbd!4v1717668782047!5m2!1sen!2sbd"
          className="w-full h-[500px]"
        ></iframe>
      </div>
    </div>
  );
}
