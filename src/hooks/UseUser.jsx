import { useContext } from "react";
import { UserContext } from "../components/contexts/UserContext"; // ✅ UserContext import

const useUser = () => useContext(UserContext);

export default useUser; // ✅ useUser Hook만 export
