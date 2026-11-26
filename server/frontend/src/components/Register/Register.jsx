import React, { useState } from "react";

const Register = () => {
  const [userName, setUserName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const registerUser = async (e) => {
    e.preventDefault();
    const res = await fetch("/djangoapp/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        userName,
        password,
        firstName,
        lastName,
        email,
      }),
    });
    const json = await res.json();
    if (json.status) {
      window.location.href = window.location.origin;
    }
  };

  return (
    <div className="register_container">
      <form onSubmit={registerUser}>
        <div>
          <label>Username</label>
          <input type="text" name="username" value={userName} onChange={(e) => setUserName(e.target.value)} required />
        </div>
        <div>
          <label>First Name</label>
          <input type="text" name="first_name" value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
        </div>
        <div>
          <label>Last Name</label>
          <input type="text" name="last_name" value={lastName} onChange={(e) => setFirstName(e.target.value) && setLastName(e.target.value)} required />
        </div>
        <div>
          <label>Email</label>
          <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div>
          <label>Password</label>
          <input type="password" name="psw" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
