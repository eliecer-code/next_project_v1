import React from "react";
import Users from "@/components/users/Users";
export const fecthUser = async () => {
  const res = await fetch("https://reqres.in/api/users");
  const data = await res.json();
  return data.data;
};

const HomePage = async () => {
  const users = await fecthUser();
  return (
    <div>
      <Users users={users} />
    </div>
  );
};

export default HomePage;
