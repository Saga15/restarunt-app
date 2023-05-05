import React from "react";
import { useState, useEffect } from "react";
import { Table } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from 'react-router-dom'

const RestoList = () => {
  const navigate = useNavigate()
  const [state, setState] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/resto").then((resp) =>
      resp.json().then((result) => {
        setState(result);
        console.log(result);
      })
    );
  }, []);
  /* useEffect(()=>{
    async function getData(){
      const resp = await fetch("http://localhost:3000/resto")
      const result =await resp.json()
      setState(result)
    }
    getData()
  },[]); */
  const deleteFunc = (id)=>{
    fetch(`http://localhost:3000/resto${id}`, {
      method: "Delete",
    }).then((result) => {
      result.json().then((resp) => {
        alert("Restaurant has been Deleted");
        navigate("/list")

      });
    });
  }
  return (
    <div>
      <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Rating</th>
          <th>Location</th>
          <th>Operation</th>
        </tr>
      </thead>
      <tbody>
      {state.map((item) => (
         <tr key={item.id} >
         <td>{item.id}</td>
         <td>{item.name}</td>
         <td>{item.rating}</td>
         <td>{item.address}</td>
         <td><button onClick={(()=>navigate("/update", {state:item}))}  ><FontAwesomeIcon icon={faEdit} color="orange" /></button>
          <span onClick={deleteFunc} ><FontAwesomeIcon icon={faTrash} color="red" /></span></td>
       </tr>
      ))}
      </tbody>
      </Table>
    </div>
  );
};

export default RestoList;
