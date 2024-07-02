import { useEffect, useState } from "react";
import usePayment from "../../../customComponent/usePAyment";
import PaymentTableRow from "./PaymentTableRow";

export default function PaymentTable({ searchTerm }) {
  const { payments } = usePayment();
  const [filteredPayments, setFilteredPayments] = useState([]);

  useEffect(() => {
    if (!payments) {
      setFilteredPayments([]);
    } else if (searchTerm === "") {
      setFilteredPayments(payments);
    } else {
      const filtered = payments.filter((payment) => {
        return (
          payment.User_name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
          payment.User_email?.toLowerCase().includes(
            searchTerm.toLowerCase()
          ) ||
          payment.Status?.toLowerCase().includes(searchTerm.toLowerCase()) ||
          payment.month?.toLowerCase().includes(searchTerm.toLowerCase())
        );
      });
      setFilteredPayments(filtered);
    }
  }, [payments, searchTerm]);

  if (!payments) {
    return <div>Loading...</div>;
  }

  if (filteredPayments.length === 0) {
    return (
      <div className="w-full text-center text-[#2c241e]">No Payments found</div>
    );
  }

  return (
    <div className="min-w-[850px]">
      <table className="w-full border-collapse border-[#2c241e] border">
        <thead className="grid grid-cols-9">
          <th className="w-full text-center uppercase bg-[#2c241e] text-[#c78960] p-2 col-span-2">
            Email
          </th>
          <th className="w-full text-center uppercase bg-[#2c241e] text-[#c78960] p-2 col-span-1">
            Coupon
          </th>
          <th className="w-full text-center uppercase bg-[#2c241e] text-[#c78960] p-2 col-span-1">
            Amount
          </th>
          <th className="w-full text-center uppercase bg-[#2c241e] text-[#c78960] p-2 col-span-1">
            Apartment
          </th>
          <th className="w-full text-center uppercase bg-[#2c241e] text-[#c78960] p-2 col-span-1">
            Month
          </th>
          <th className="w-full text-center uppercase bg-[#2c241e] text-[#c78960] p-2 col-span-1">
            Card
          </th>
          <th className="w-full text-center uppercase bg-[#2c241e] text-[#c78960] p-2 col-span-2">
            TransactionId
          </th>
        </thead>
        <tbody className="w-full">
          {filteredPayments.map((payment) => (
            <PaymentTableRow key={payment._id} payment={payment} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
