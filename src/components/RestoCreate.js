import React from "react";
import { useState, useEffect } from "react";
// import { useLocation } from "react-router-dom";

const RestoCreate = () => {
  const [title, setTitle] = useState("Add Resto");

  const [state, setState] = useState({
    name: "",
    email: "",
    rating: "",
    address: "",
  });
  const handleInput = (e) => {
    const { name, value } = e.target;
    setState((data) => ({
      ...data,
      [name]: value,
    }));
  };

  const create = () => {
    /*  if(location && location.state){
      var newState = [ ...state , location.state.id]
    } */

    fetch("http://localhost:3000/resto", {
      method: "Post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(state),
    }).then((result) => {
      result.json().then((resp) => {
        console.log(resp);
        alert("Restaurant has been added");
      });
    });
  };
  return (
    <div>
      <h3> {title}</h3>
      <br />
      <input
        name="name"
        value={state.name}
        placeholder="Resto Name"
        onChange={handleInput}
      />
      <br />
      <br />
      <input
        name="email"
        value={state.email}
        placeholder="Resto Email"
        onChange={handleInput}
      />
      <br />
      <br />
      <input
        name="rating"
        value={state.rating}
        placeholder="Resto Rating"
        onChange={handleInput}
      />
      <br />
      <br />
      <input
        name="address"
        value={state.address}
        placeholder="Resto Address"
        onChange={handleInput}
      />
      <br />
      <br />
      <button
        onClick={() => {
          create();
        }}
      >
        Add Resto
      </button>
    </div>
  );
};

export default RestoCreate;
