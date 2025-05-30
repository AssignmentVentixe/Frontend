import React, { useContext } from "react";
import AuthContext from "../context/AuthContext";

export default function UserWelcome() {
  const { user } = useContext(AuthContext);

  return (
    <span className="userName">
      {user.firstName} {user.lastName}
    </span>
  );
}
