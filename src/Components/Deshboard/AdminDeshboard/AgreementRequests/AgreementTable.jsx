import { useEffect, useState } from "react";
import useAgreements from "../../../customComponent/useAgreements";
import AgreementTableRow from "./AgreementTableRow";

export default function AgreementTable({ searchTerm }) {
  const { agreements, AgreeRefetch } = useAgreements();
  const [filteredAgreements, setFilteredAgreements] = useState([]);

  useEffect(() => {
    if (!agreements) {
      setFilteredAgreements([]);
    } else if (searchTerm === "") {
      setFilteredAgreements(agreements);
    } else {
      const filtered = agreements.filter((agreement) => {
        return (
          agreement.User_name.toLowerCase().includes(
            searchTerm.toLowerCase()
          ) ||
          agreement.User_email.toLowerCase().includes(
            searchTerm.toLowerCase()
          ) ||
          agreement.Status.toLowerCase().includes(searchTerm.toLowerCase())
        );
      });
      setFilteredAgreements(filtered);
    }
  }, [agreements, searchTerm]);

  if (!agreements) {
    return <div>Loading...</div>;
  }

  if (filteredAgreements.length === 0) {
    return (
      <div className="w-full text-center text-[#2c241e]">
        No agreements found
      </div>
    );
  }

  return (
    <div className="min-w-[850px]">
      <table className="w-full border-collapse border-[#2c241e] border">
        <thead className="grid grid-cols-10">
          <th className="w-full text-center uppercase bg-[#2c241e] text-[#c78960] p-2 col-span-1">
            Name
          </th>
          <th className="w-full text-center uppercase bg-[#2c241e] text-[#c78960] p-2 col-span-2">
            Email
          </th>
          <th className="w-full text-center uppercase bg-[#2c241e] text-[#c78960] p-2 col-span-1">
            Floor No
          </th>
          <th className="w-full text-center uppercase bg-[#2c241e] text-[#c78960] p-2 col-span-1">
            Block
          </th>
          <th className="w-full text-center uppercase bg-[#2c241e] text-[#c78960] p-2 col-span-1">
            Apartment
          </th>
          <th className="w-full text-center uppercase bg-[#2c241e] text-[#c78960] p-2 col-span-1">
            Rent
          </th>
          <th className="w-full text-center uppercase bg-[#2c241e] text-[#c78960] p-2 col-span-1">
            Date
          </th>
          <th className="w-full text-center uppercase bg-[#2c241e] text-[#c78960] p-2 col-span-1">
            Status
          </th>
          <th className="w-full text-center uppercase bg-[#2c241e] text-[#c78960] p-2 col-span-1">
            Action
          </th>
        </thead>
        <tbody className="w-full">
          {filteredAgreements.map((agreement) => (
            <AgreementTableRow
              key={agreement._id}
              agreement={agreement}
              refetch={AgreeRefetch}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}
