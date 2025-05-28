import React, { useState, useEffect } from "react";
import api from "../../services/api";

export default function UserWelcome() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    api.get("/auth/me").then((res) => {
      setUser(res.data);
    });
  }, []);

  if (!user) {
    return null;
  }

  return (
    <div>
      Welcome {user.firstName} {user.lastName}!
    </div>
  );
}
