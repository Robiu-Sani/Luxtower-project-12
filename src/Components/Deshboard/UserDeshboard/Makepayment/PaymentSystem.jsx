import { loadStripe } from "@stripe/stripe-js";
import logo from "../../../../Image/logo.svg";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";

// Add publishable key
const stripePromise = loadStripe(import.meta.env.VITE_Publish_key);

export default function PaymentSystem() {
  const paymentDataString = localStorage.getItem("paymentData");
  const paymentData = paymentDataString ? JSON.parse(paymentDataString) : {};

  return (
    <div className="w-full min-h-screen pt-10 px-3 bg-gray-100">
      <div className="w-full flex flex-col gap-5 sm:flex-row sm:items-center justify-center sm:justify-between p-3 bg-[#2c241e]">
        <img src={logo} alt="Logo" className="h-10" />
        <h1 className="sm:text-2xl uppercase text-[#fff] text-center font-bold text-xl">
          Payment System
        </h1>
      </div>

      {/* Payment system */}
      <div className="w-full flex justify-center mt-10">
        <Elements stripe={stripePromise}>
          <CheckoutForm paymentData={paymentData} />
        </Elements>
      </div>
    </div>
  );
}
