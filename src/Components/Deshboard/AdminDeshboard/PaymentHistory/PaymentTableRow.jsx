export default function PaymentTableRow({ payment }) {
  return (
    <tr className="grid grid-cols-9">
      <td className="w-full text-center text-[#2c241e] p-2 col-span-2">
        {payment.email || "undefined"}
      </td>
      <td className="w-full text-center text-[#2c241e] p-2 col-span-1">
        {payment.couponApplied ? "Yes" : "No"}
      </td>
      <td className="w-full text-center text-[#2c241e] p-2 col-span-1">
        ${payment.finalRent?.toFixed(2) || "undefined"}
      </td>
      <td className="w-full text-center uppercase text-[#2c241e] p-2 col-span-1">
        {payment.appartment || "undefined"}
      </td>
      <td className="w-full text-center text-[#2c241e] p-2 col-span-1">
        {payment.month || "undefined"}
      </td>
      <td className="w-full text-center text-[#2c241e] p-2 col-span-1">
        {payment.cardLast4 || "undefined"}
      </td>
      <td className="w-full text-center text-[#2c241e] p-2 col-span-2">
        {payment.transactionId || "undefined"}
      </td>
    </tr>
  );
}
