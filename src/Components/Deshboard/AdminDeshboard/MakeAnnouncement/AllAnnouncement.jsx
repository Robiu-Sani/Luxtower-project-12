import { useState } from "react";
import AnnouncementCard from "./AnnouncementCard";
import useAnnouncement from "../../../customComponent/useAnnouncement";

export default function AllAnnouncement() {
  const { announcements } = useAnnouncement();
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredAnnouncements = announcements.filter((announcement) => {
    const titleMatch = announcement.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const dateMatch = announcement.date.includes(searchTerm);
    return titleMatch || dateMatch;
  });

  return (
    <div className="w-full max-h-screen overflow-scroll">
      <div className="w-full p-3 mt-4 flex justify-center items-center">
        <input
          type="search"
          value={searchTerm}
          onChange={handleSearch}
          className="input sm:w-[400px]"
          placeholder="Search by title or date"
        />
      </div>
      <div className="h-full p-3">
        {filteredAnnouncements.map((item) => (
          <AnnouncementCard key={item._id} item={item}></AnnouncementCard>
        ))}
      </div>
    </div>
  );
}
