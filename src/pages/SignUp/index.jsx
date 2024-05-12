import React, { useState } from "react";
import { useNavigate } from 'react-router-dom'

function SignUp() {
  const navigate = useNavigate();
  const [userInput, setUserInput] = useState({
    username: "",
    email: "",
    password: "",
  })
  function handleSubmit(e) {
    e.preventDefault();
    console.log(userInput);

    const data = JSON.parse(localStorage.getItem('usersData')) ?? [];
    localStorage.setItem('usersData', JSON.stringify([...data, userInput]));

    setUserInput({
      username: "",
      email: "",
      password: "",
    })

    navigate("/layout");
  }
  return (
    <div className="signup">
      <form onSubmit={handleSubmit}>
        <label htmlFor="chk" aria-hidden="true">
          Sign up
        </label>
        <input type="text" onChange={(e) => setUserInput((prev) => ({...prev, username: e.target.value.trim()}))} value={userInput.username} placeholder="Username" required="" />
        <input type="email" onChange={(e) => setUserInput((prev) => ({...prev, email: e.target.value.trim()}))} value={userInput.email} placeholder="Email" required="" />
        <input type="password" onChange={(e) => setUserInput((prev) => ({...prev, password: e.target.value.trim()}))} value={userInput.password} placeholder="Password" required="" />
        <button type="submit">Sign up</button>
      </form>
    </div>
  );
}

export default SignUp;
