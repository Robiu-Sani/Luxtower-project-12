import React from "react";
import useContactMessage from "../../../customComponent/useContactMessage";
import MessageCard from "./MessageCard";

export default function ContactMessage() {
  const { contactMessages } = useContactMessage();

  return (
    <div className="w-full min-h-screen pt-10 px-3">
      <div className="w-full p-3 bg-[#2c241e]">
        <h1 className="text-white text-center text-3xl ">Contact Message</h1>
      </div>
      <div className="w-full gap-5 grid grid-cols-1 sm:grid-cols-2 pt-8 justify-center max-h-[200vh] sm:h-[calc(100vh - 140px)] overflow-scroll items-start">
        {contactMessages.length === 0 ? (
          <div className="text-center text-gray-500">No messages available</div>
        ) : (
          contactMessages
            .slice()
            .reverse()
            .map((item) => <MessageCard key={item._id} item={item} />)
        )}
      </div>
    </div>
  );
}
