import React from "react";
import { useState ,useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from 'react-router-dom'

const RestoUpdate = () => {
  const navigate = useNavigate()
  const location = useLocation();
  console.log(location.state);
  const [state, setState] = useState({

  });

  useEffect(() => {
    if (location && location.state) {
      setState({
        name: location.state.name,
        email: location.state.email,
        rating: location.state.rating,
        address: location.state.address,
        
      });
    }
  }, []);





  const update = () => {
    fetch(`http://localhost:3000/resto/${location.state.id}`, {
      method: "Put",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(state),
    }).then((result) => {
      result.json().then((resp) => {
        alert("Restaurant has been updated");
        navigate("/list")

      });
    });
  };
  return (
    <div>
      <h1>RestoUpdate</h1>
      <div>
        <input
          name="name"
          value={state.name}
          placeholder="Resto Name"
          onChange={(e) =>  setState({...state,[e.target.name]:e.target.value})}
        />
        <br />
        <br />
        <input
          name="email"
          value={state.email}
          placeholder="Resto Email"
          onChange={(e) =>  setState({...state,[e.target.name]:e.target.value})}
        />
        <br />
        <br />
        <input
          name="rating"
          value={state.rating}
          placeholder="Resto Rating"
          onChange={(e) =>  setState({...state,[e.target.name]:e.target.value})}
        />
        <br />
        <br />
        <input
          name="address"
          value={state.address}
          placeholder="Resto Address"
          onChange={(e) =>  setState({...state,[e.target.name]:e.target.value})}
        />
        <br />
        <br />
        <button onClick={update}>Update Resto</button>
      </div>
    </div>
  );
};

export default RestoUpdate;
