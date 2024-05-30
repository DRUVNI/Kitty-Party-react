import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const RegistrationForm = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [maritalStatus, setMaritalStatus] = useState("single");
  const [groupName, setGroupName] = useState("drownika");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [occupation, setOccupation] = useState("");
  const [groupLimit, setGroupLimit] = useState("");
  const [verifyOption, setVerifyOption] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      name,
      age,
      maritalStatus,
      groupName,
      phoneNumber,
      occupation,
      groupLimit,
      verifyOption,
    };
    let list = localStorage.getItem("formData");
    list = JSON.parse(list);
    console.log(list, "plpl");
    if (list) {
      const data = [...list, formData];
      localStorage.setItem("formData", JSON.stringify(data));
    } else {
      localStorage.setItem("formData", JSON.stringify([formData]));
    }

    navigate("/list");
  };

  return (
    <div style={{ padding: "20px" }}>
      <form onSubmit={handleSubmit}>
        <h1>Registration Form</h1>
        <div>
          <label>Name: </label>
          <input
            type="text"
            value={name}
            required
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label>Age: </label>
          <input
            type="number"
            value={age}
            required
            onChange={(e) => setAge(e.target.value)}
          />
        </div>
        <div>
          <label for="status">Material Status</label>
          <select
            value={maritalStatus}
            onChange={(e) => setMaritalStatus(e.target.value)}
            name="status"
            id="status"
            required
          >
            <option value="single">Single</option>
            <option value="married">Married</option>
          </select>
        </div>
        <div>
          <label for="groupName">Group Name:</label>
          <select
            name="groupName"
            id="groupName"
            value={groupName}
            required
            onChange={(e) => setGroupName(e.target.value)}
          >
            <option value="drownika">Drownika Group</option>
            <option value="other">Other Group</option>
          </select>
        </div>
        <div>
          <label>Phone Number: </label>
          <input
            type="number"
            value={phoneNumber}
            required
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </div>
        <div>
          <label>Occupation: </label>
          <input
            type="text"
            value={occupation}
            required
            onChange={(e) => setOccupation(e.target.value)}
          />
        </div>
        <div>
          <label>Group Limit: </label>
          <input
            type="number"
            value={groupLimit}
            required
            onChange={(e) => setGroupLimit(e.target.value)}
          />
        </div>
        <div>
          <label>Verify Option: </label>
          <input
            type="checkbox"
            checked={verifyOption}
            required
            onChange={(e) => setVerifyOption(e.target.checked)}
          />
        </div>
        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default RegistrationForm;
