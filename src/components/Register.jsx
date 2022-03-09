import React from "react";

function Register() {
    return(
        <div>
        <h3>Register Here</h3>
        <div>
          <label>New Username</label>
          <input type="text" id="newUsername" />
        </div>
        <div>
          <label>New Password</label>
          <input type="newPassword" id="newPassword" />
        </div>
        <button>
          Register
        </button>
      </div>
    );
}

export default Register;