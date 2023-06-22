import React from "react";

const UserForm = ({ newUser, setNewUser }) => {
  const handleChange = () => {
    if (newUser.gender === "male") {
      console.log("man has clicked");
    }
    if (newUser.gender === "female") {
      console.log("female has clicked");
    }
  };
  return (
    <div>
      <label>Title</label>
      <input
        type="text"
        name="title"
        value={newUser.title}
        onChange={(e) =>
          setNewUser({ ...newUser, [e.target.name]: e.target.value })
        }
      />
      <input
        type="checkbox"
        name="completed"
        checked={newUser.completed}
        onChange={(e) =>
          setNewUser({ ...newUser, [e.target.name]: e.target.checked })
        }
      />
      <input
        type="radio"
        name="gender"
        onChange={(e) => 
          setNewUser({ ...newUser, gender: 'male' })
        }
      />
      Male
      <input
        type="radio"
        name="gender"
        onChange={(e) =>
          setNewUser({ ...newUser, gender: 'female' })
        }
      />
      Female
      <button onClick={handleChange}>CLick</button>
    </div>
  );
};

export default UserForm;
