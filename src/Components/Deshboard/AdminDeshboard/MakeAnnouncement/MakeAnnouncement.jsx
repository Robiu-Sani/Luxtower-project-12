import AllAnnouncement from "./AllAnnouncement";
import AnnouncementForm from "./AnnouncementForm";

export default function MakeAnnouncement() {
  return (
    <div className="w-full min-h-screen pt-10 px-3">
      <div className="w-full p-3 bg-[#2c241e]">
        <h1 className="text-white text-center text-3xl ">Make Announcement</h1>
      </div>
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 justify-center max-h-[200vh] sm:h-[calc(100vh - 140px)] overflow-scroll items-start">
        <AnnouncementForm></AnnouncementForm>
        <AllAnnouncement></AllAnnouncement>
      </div>
    </div>
  );
}
