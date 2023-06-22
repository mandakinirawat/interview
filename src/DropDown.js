import React from "react";

const DropDown = ({ apiCall, setApiCall }) => {
  const options = [
    { label: "GET", value: "get" },
    { label: "POST", value: "post" },
  ];

  return (
    <div className="div">
      <label>Choose an Option</label>
      <select
        name="method"
        value={apiCall.value}
        onChange={(e) =>
          setApiCall({ ...apiCall, [e.target.name]: e.target.value })
        }
      >
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DropDown;
