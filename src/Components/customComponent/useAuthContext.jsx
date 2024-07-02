import { useContext } from "react";
import { AuthContext } from "../Default_Components/Context/Contaxt";

export default function useAuthContext() {
  const {
    createUserByEmail,
    updateUserProfile,
    LoginUserByEmail,
    LoginWithGoogle,
    LogOut,
    loader,
    LogedUser,
    paymentdata,
    handlePaymentData,
  } = useContext(AuthContext);

  return {
    createUserByEmail,
    updateUserProfile,
    LoginUserByEmail,
    LoginWithGoogle,
    LogOut,
    loader,
    LogedUser,
    paymentdata,
    handlePaymentData,
  };
}
