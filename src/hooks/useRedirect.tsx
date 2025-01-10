import { useNavigate } from "react-router-dom";
import { useSession } from "./useSession";
import { useEffect } from "react";

export const useRedirect = () => {
  const navigate = useNavigate();
  const sessionExist = useSession();
  console.log("useSession() :", sessionExist);

  useEffect(() => {
    if (!sessionExist) {
      navigate("/signup");
    }
    navigate("/dashboard");
  }, []);
};
