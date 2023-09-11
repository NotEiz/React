import { useEffect, useState } from "react";
import { createUser } from "../api/user";

const User = () => {
  const [user, setUser] = useState([]);
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");

  console.log(user);

  useEffect((user) => {
    createUser(user)
      .then((resp) => setUser(resp))
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          const newUser = { userName, email };
          setUser([...user, newUser]);
        }}
      >
        <input
          onChange={(e) => setUserName(e.target.value)}
          placeholder="Name"
        />

        <input
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          placeholder="email"
        />
        <button>Add</button>
      </form>
      <h1>{user.userName}</h1>
      <h2>{user.email}</h2>
    </>
  );
};

export default User;
