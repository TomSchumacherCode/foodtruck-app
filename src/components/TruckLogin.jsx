import React, { useCallback, useMemo, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import useAPI from "../hooks/useAPI";


function TruckLogin({ setActiveUser }) {
  const {login, getEventsByUserId} = useAPI();
  const usernameInput = useRef(null);
  const passwordInput = useRef(null);
  const navigate = useNavigate();

  const handleLogin = useCallback(async() => {
    const username = usernameInput.current.value;
    const password = passwordInput.current.value;
    if (
      username.length < 4 ||
      username.length > 20 ||
      password.length < 4 ||
      password.length > 20
    ) {
      return;
    }
    const response = await login(username, password);
    if (!response.success) {
    }
    // const eventsList = await getEventsByUserId(response.data.id);
    // if (!response.success) {
    // }
    // console.log(eventsList)

    // getEventsByUserId(response.data.id);
    setActiveUser(response.data);
    navigate("/map");
  }, []);



  return (
    <div>
      <h3>Login</h3>
      <div>
        <label htmlFor="username">Username</label>
        <input ref={usernameInput} type="text" id="username" />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input ref={passwordInput} type="password" id="password" />
      </div>
      <button onClick={handleLogin}>
        Login
      </button>
    </div>
  );
}

export default TruckLogin;