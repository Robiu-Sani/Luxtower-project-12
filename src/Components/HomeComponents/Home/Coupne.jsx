import { Link } from "react-router-dom";
import Coupon from "../../Share/Coupon";
import useCoupon from "../../customComponent/useCoupon";

export default function Coupne() {
  const { coupons } = useCoupon();
  return (
    <div className="w-full py-10 px-2 bg-[#ffefe5]">
      <div className="max-w-[700px] xl:container mx-auto grid grid-cols-1 xl:grid-cols-2 gap-10">
        {coupons.slice(0, 2).map((item) => (
          <Coupon key={item._id} item={item}></Coupon>
        ))}
      </div>
      <div className="w-full flex mt-10 justify-center items-center">
        <Link
          to="/allcoupons"
          className="px-5 p-2 border-b-2 border-[#ffd5bd] hover:bg-[#ffd5bd]"
        >
          See All Coupon
        </Link>
      </div>
    </div>
  );
}
