import { useEffect, useState } from "react";
import useUsers from "../../../customComponent/useUsers";
import TableRow from "./TableRow";

export default function MAnageMemberTable({ searchTerm }) {
  const { users } = useUsers();
  const [filteredUsers, setFilteredUsers] = useState([]);

  useEffect(() => {
    if (searchTerm === "") {
      setFilteredUsers(users || []);
    } else {
      const filtered = (users || []).filter(
        (user) =>
          user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
          user.position.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredUsers(filtered);
    }
  }, [searchTerm, users]);

  if (!users) {
    return <div>Loading...</div>;
  }

  if (filteredUsers.length === 0) {
    return (
      <div className="w-full text-center text-[#2c241e]">No members found</div>
    );
  }

  return (
    <div className="min-w-[700px]">
      <table className="w-full border-collapse border-[#2c241e] border">
        <thead className="grid grid-cols-10">
          <th className="w-full text-center bg-[#2c241e] uppercase text-[#c78960] p-2 col-span-1">
            Image
          </th>
          <th className="w-full text-center bg-[#2c241e] uppercase text-[#c78960] p-2 col-span-2">
            Name
          </th>
          <th className="w-full text-center bg-[#2c241e] uppercase text-[#c78960] p-2 col-span-3">
            Email
          </th>
          <th className="w-full text-center bg-[#2c241e] uppercase text-[#c78960] p-2 col-span-2">
            Status
          </th>
          <th className="w-full text-center bg-[#2c241e] uppercase text-[#c78960] p-2 col-span-1">
            Remove
          </th>
          <th className="w-full text-center bg-[#2c241e] uppercase text-[#c78960] p-2 col-span-1">
            Action
          </th>
        </thead>
        <tbody className="w-full">
          {[...filteredUsers].reverse().map((item) => (
            <TableRow key={item._id} item={item} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
