export default function Announcement({ item }) {
  return (
    <div className="w-full mx-auto bg-white rounded-xl shadow-md overflow-hidden transform transition duration-500 hover:scale-105">
      <div className="md:flex">
        <div className="p-8">
          <div className="flex justify-between w-full items-center">
            <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
              {item.date}
            </div>
          </div>
          <h1 className="block mt-2 text-xl leading-tight font-bold text-black">
            {item.title}
          </h1>
          <p className="mt-3 text-gray-500">{item.description}</p>
        </div>
      </div>
    </div>
  );
}
