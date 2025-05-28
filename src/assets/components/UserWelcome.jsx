import React, { useContext } from "react";
import AuthContext from "../context/AuthContext";

export default function UserWelcome() {
  const { user } = useContext(AuthContext);

  return (
    <div>
      Welcome {user.firstName} {user.lastName}!
    </div>
  );
}