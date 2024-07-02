import ManageCouponCard from "./ManageCoponCard";

export default function ManageAllCopon({ coupons = [] }) {
  return (
    <div className="w-full h-screen md:max-h-[calc(100vh-240px)] overflow-scroll grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 my-5">
      {coupons.length > 0 ? (
        coupons.map((item) => <ManageCouponCard key={item._id} item={item} />)
      ) : (
        <div className="w-full h-full flex justify-center items-center">
          <p>No coupons available</p>
        </div>
      )}
    </div>
  );
}
