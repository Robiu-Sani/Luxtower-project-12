import useAgreements from "../../customComponent/useAgreements";
import useAuthContext from "../../customComponent/useAuthContext";

export default function UserProfile() {
  const { LogedUser } = useAuthContext();
  const { agreements } = useAgreements();
  const findagreement = agreements.filter(
    (item) => item.User_email === LogedUser.email
  );
  const boockAgreement = findagreement[0];

  return (
    <div className="w-full min-h-screen p-3">
      <div className="w-full mt-11 shadow-md p-3">
        <div className="w-full flex justify-between items-center">
          <span></span>
          <span className="bg-[#2c241e] px-3 p-1 text-[#c78960] cursor-pointer border-2 border-white">
            User Profile
          </span>
        </div>
        <div className="w-full flex mb-3 justify-between items-center">
          <img
            src={LogedUser.photoURL}
            className="h-[100px] md:h-[150px] lg:h-[200px] border-2 border-[#2c241e]"
            alt=""
          />
          <div className="w-full md:p-4 p-2 bg-[#2c241e] flex justify-center items-center">
            <h1 className="text-[#c78960] md:text-3xl text-xl uppercase">
              {LogedUser.displayName}
            </h1>
          </div>
        </div>
        <hr />
        <div className="w-full p-2 flex gap-3 justify-center items-center flex-col sm:flex-row sm:justify-between">
          <small>Email : {LogedUser.email}</small>
          <small>Last logIn : {LogedUser.metadata.lastSignInTime}</small>
          <small>Create time : {LogedUser.metadata.creationTime}</small>
        </div>
      </div>
      <div className="w-full mt-4 shadow-md p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
        <div className="w-full bg-[#2c241e] p-2 text-[#c78960]">
          Block name:{" "}
          {boockAgreement ? boockAgreement.Block_name || "none" : "none"}
        </div>
        <div className="w-full bg-[#2c241e] p-2 text-[#c78960]">
          Floor no: {boockAgreement ? boockAgreement.floorNo || "none" : "none"}
        </div>
        <div className="w-full bg-[#2c241e] p-2 text-[#c78960]">
          Apartment no:{" "}
          {boockAgreement ? boockAgreement.Apartment_no || "none" : "none"}
        </div>
        <div className="w-full bg-[#2c241e] p-2 text-[#c78960]">
          Rent: {boockAgreement ? boockAgreement.Rent || "none" : "none"}
        </div>
        <div className="w-full bg-[#2c241e] p-2 text-[#c78960]">
          Status: {boockAgreement ? boockAgreement.Status || "none" : "none"}
        </div>
        <div className="w-full bg-[#2c241e] p-2 text-[#c78960]">
          Agreements date:{" "}
          {boockAgreement ? boockAgreement.date || "none" : "none"}
        </div>
      </div>
      <div className="w-full uppercase flex justify-center items-center text-[#c78960] font-bold text-center bg-[#2c241e] p-5 mt-5 shadow-md">
        {boockAgreement ? (
          <>
            {boockAgreement.Status === "pending" &&
              "You will get access to your payment system when admin accepts your agreement"}
            {boockAgreement.Status === "Accept" &&
              "You can access your payment system"}
          </>
        ) : (
          "You need to get agreement an apartment"
        )}
      </div>
    </div>
  );
}
