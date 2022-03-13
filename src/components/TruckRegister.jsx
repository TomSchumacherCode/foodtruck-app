import React, { useCallback, useMemo, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import useAPI from "../hooks/useAPI";


function TruckRegister({ setActiveUser }) {
  const {register} = useAPI();
  const usernameInput = useRef(null);
  const passwordInput = useRef(null);
  const truckNameInput = useRef(null);
  const navigate = useNavigate();

  const handleRegister = useCallback(async() => {
    const username = usernameInput.current.value;
    const password = passwordInput.current.value;
    const truckName = truckNameInput.current.value;

    if (
      username.length < 4 ||
      username.length > 20 ||
      password.length < 4 ||
      password.length > 20 ||
      truckName.length < 4 ||
      truckName.length > 20

    ) {
      alert("All values must be between 4 and 20 characters.");
      return;
    }
    const data = await register(username, password, truckName);
    if (!data.success) {
        alert("Something went wrong. Please try again."); 
        console.error(data.error)
        return;
    }

    navigate("/login");
  }, []);

  return (
    <div>
      <h3>Register</h3>
      <div>
        <label htmlFor="username">Username</label>
        <input ref={usernameInput} type="text" id="username" />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input ref={passwordInput} type="password" id="password" />
      </div>
      <div>
        <label htmlFor="truckName">Truck Name</label>
        <input ref={truckNameInput} type="text" id="truckName" />
      </div>
      <button onClick={handleRegister}>
        Register
      </button>
    </div>
  );
}

export default TruckRegister;