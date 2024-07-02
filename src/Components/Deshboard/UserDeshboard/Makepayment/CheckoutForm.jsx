import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSource from "../../../customComponent/useAxiosSorce";
import useCoupon from "../../../customComponent/useCoupon";
import Swal from "sweetalert2";

const CheckoutForm = ({ paymentData }) => {
  const stripe = useStripe();
  const elements = useElements();
  const { axiosSource } = useAxiosSource();
  const [getClientSecret, setGetClientSecret] = useState("");
  const [transactionId, setTransactionId] = useState(null);
  const [cardLast4, setCardLast4] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const [finalRent, setFinalRent] = useState(paymentData.Rent);
  const [couponApplied, setCouponApplied] = useState(false);
  const [paymentSuccessful, setPaymentSuccessful] = useState(false);
  const { coupons } = useCoupon();
  console.log(paymentData.email);
  const data = {
    email: paymentData.email,
    appartment: paymentData.appartment,
    month: paymentData.month,
    couponApplied: couponApplied,
    finalRent: finalRent,
    cardLast4: cardLast4,
    transactionId: transactionId,
  };

  useEffect(() => {
    if (finalRent) {
      axiosSource
        .post("/createPaymentIntent", { price: finalRent })
        .then((res) => setGetClientSecret(res.data.clientSecret))
        .catch((err) => setErrorMessage(err.message));
    }
  }, [axiosSource, finalRent]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      setErrorMessage(error.message);
      return;
    }

    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(getClientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: paymentData.name,
            email: paymentData.email,
          },
        },
      });

    if (confirmError) {
      setErrorMessage(confirmError.message);
      return;
    }

    // Ensure transactionId and cardLast4 are set before posting the data
    const transactionId = paymentIntent.id;
    const cardLast4 = paymentMethod.card.last4;

    setTransactionId(transactionId);
    setCardLast4(cardLast4);

    const paymentDataToSend = {
      ...data,
      transactionId: transactionId,
      cardLast4: cardLast4,
    };

    axiosSource
      .post("/payments", paymentDataToSend)
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "Payment successful",
          showConfirmButton: false,
          timer: 1500,
        });
        setPaymentSuccessful(true);
      })
      .catch((err) => {
        console.error(err.message);
      });
  };

  const handleCoupon = (e) => {
    e.preventDefault();
    if (couponApplied) {
      setErrorMessage("Coupon code has already been applied");
      return;
    }

    const couponCode = e.target.code.value;
    const coupon = coupons.find((coupon) => coupon.code === couponCode);

    if (coupon) {
      let newRent;
      if (coupon.offerType === "%") {
        const discount = (finalRent * coupon.offerDigit) / 100;
        newRent = finalRent - discount;
      } else {
        newRent = finalRent - coupon.offerDigit;
      }
      setFinalRent(newRent);
      setCouponApplied(true);
      setErrorMessage(null);
    } else {
      setErrorMessage("Invalid coupon code");
    }
  };

  return (
    <div className="w-full max-w-lg p-4 bg-white rounded shadow-md">
      <div className="w-full flex flex-col gap-5">
        <p>
          Total rent: <strong>${finalRent.toFixed(2)}</strong>
        </p>
        <form
          onSubmit={handleCoupon}
          className="w-full mb-7 border rounded-md overflow-hidden grid grid-cols-4"
        >
          <input
            type="text"
            name="code"
            className="w-full outline-0 col-span-3 p-2"
            placeholder="Enter Coupon code"
            disabled={couponApplied}
          />
          <input
            type="submit"
            className="w-full bg-blue-600 text-white p-2 cursor-pointer"
            value="Apply"
            disabled={couponApplied}
          />
        </form>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <CardElement
            options={{
              style: {
                base: {
                  fontSize: "16px",
                  color: "#424770",
                  "::placeholder": {
                    color: "#aab7c4",
                  },
                },
                invalid: {
                  color: "#9e2146",
                },
              },
            }}
          />
        </div>
        <button
          type="submit"
          disabled={!stripe || !getClientSecret || paymentSuccessful}
          className={`w-full py-2 px-4 font-bold rounded transition-colors duration-300 ${
            !stripe || !getClientSecret || paymentSuccessful
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-blue-500 text-white hover:bg-blue-700"
          }`}
        >
          Pay
        </button>
      </form>

      {errorMessage && (
        <div className="mt-4 text-red-500">
          <strong>Error:</strong> {errorMessage}
        </div>
      )}

      {transactionId && cardLast4 && (
        <div className="mt-4 text-green-500">
          <p>
            <strong>Transaction ID:</strong> {transactionId}
          </p>
          <p>
            <strong>Card Last 4 Digits:</strong> {cardLast4}
          </p>
        </div>
      )}
    </div>
  );
};

export default CheckoutForm;
