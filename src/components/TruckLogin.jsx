import React, {useRef} from "react";
import App from "../App";

function TruckLogin({setUser}) {
    return (
        <div>
            <h3>Truck Login</h3>
            <div>
                <label>Username</label>
                    <input type="text" id="username" />
            </div>
            <div>
                <label htmlFor="password">Password</label>
                    <input type="password" id="password" />
            </div>
            <button className="login-btn">Login</button>
        </div>
  );

    
}


export default TruckLogin;


