import React from "react";
import { useState } from "react";

const Login = () => {
  const [user, setUser] = useState({
    name: "",
    password: "",
  });
  const handleinput = (e) => {
    const { name, value } = e.target;
    setUser((data) => ({
      ...data,
      [name]: value,
    }));
  };
  const login = (e) => {
    e.preventDefault();
    fetch("http://localhost:3000/login?q=" + user.name).then((data) => {
      data.json().then((resp) => {
        console.log("resp", resp);
      });
    });

    setUser({
      name: "",
      password: "",
    });
  };
  return (
    <div>
      <form>
        <input
          type="text"
          name="name"
          placeholder="Enter Name"
          value={user.name}
          onChange={handleinput}
        />
        <br />
        <br />
        <input
          type="password"
          name="password"
          placeholder="Enter Password"
          value={user.password}
          onChange={handleinput}
        />
        <br />
        <br />
        <button onClick={login}>Login</button>
      </form>
    </div>
  );
};

export default Login;
