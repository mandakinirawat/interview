import React from "react";

const Input = ({ apiCall, setApiCall }) => {
  return (
    <main className="main">
      <label>Enter URL</label>
      <input
        type="text"
        name="url"
        value={apiCall.url}
        onChange={(e) => setApiCall({...apiCall, [e.target.name]: e.target.value})}
      ></input>
    </main>
  );
};

export default Input;
