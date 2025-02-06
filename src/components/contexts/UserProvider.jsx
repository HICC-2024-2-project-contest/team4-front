import { useState } from "react";
import { UserContext } from "./UserContext"; // ✅ UserContext import!

const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState({
    gender: null,
    relationship: null,
    theme: null
  });

  return (
    <UserContext.Provider value={{ userData, setUserData }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider; // ✅ UserProvider만 export
