import useAnnouncement from "../../../customComponent/useAnnouncement";
import Announcement from "./Announcement";

export default function Announcements() {
  const { announcements } = useAnnouncement();
  return (
    <div className="w-full min-h-screen pt-10 px-3">
      <div className="w-full p-3 bg-[#2c241e]">
        <h1 className="text-white text-center text-3xl ">Announcement</h1>
      </div>
      <div className="w-full grid max-h-[calc(100vh-110px)] overflow-scroll pt-5 grid-cols-1 sm:grid-cols-2 gap-5">
        {announcements.reverse().map((item) => (
          <Announcement key={item._id} item={item} />
        ))}
      </div>
    </div>
  );
}
