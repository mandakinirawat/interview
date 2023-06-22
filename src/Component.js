import React, { useState, useEffect } from "react";
import DropDown from "./DropDown";
import Input from "./Input";
import UserForm from "./UserForm";
import Button from "./Button";
import api from "./api/Posts";
import Grid from "./Grid";

const Component = () => {
  const [apiCall, setApiCall] = useState({
    url: "",
    method: "get",
    data: [],
  });

  const [newUser, setNewuser] = useState({
    id: "",
    title: "",
    completed: false,
    gender: 'male'
  });

  const handleSubmit = async () => {
    try {
      if (apiCall.method === "get") {
        const response = await api.get(apiCall.url);
        setApiCall({ ...apiCall, data: response.data });
       
      }
      if (apiCall.method === "post" && newUser.title !== "") {
        const response = await api.post(apiCall.url, newUser);
        setApiCall({ ...apiCall, data: [response.data, ...apiCall.data] });
        setNewuser({title:'',completed:''})
      }
      
    } catch (err) {
      console.log(`Error: ${err.message}`);
    }
  };
  return (
    <div>
      <DropDown apiCall={apiCall} setApiCall={setApiCall} />
      <Input apiCall={apiCall} setApiCall={setApiCall} />
      <UserForm newUser={newUser} setNewUser={setNewuser} />
      <Button handleSubmit={handleSubmit} />
      {/* <Grid rowData={apiCall.data} /> */}
    </div>
  );
};

export default Component;
