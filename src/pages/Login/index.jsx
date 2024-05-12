import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
    const [error, errorMessage] = useState(false);
    const [message, setMessage] = useState('');
    

    const username = useRef("");
    const password = useRef("");
    const navigate = useNavigate();
    const handleSubmit = (e) =>{
        e.preventDefault()
        let userName = username.current.value.trim();
        let passWord = password.current.value.trim();

        const data = JSON.parse(localStorage.getItem("usersData")) ?? [];
        
        const user = data.filter(({username, password}) =>{
          return username === userName && password == passWord;
        })
        
        if(user.length){
            localStorage.setItem('user', JSON.stringify(true));
            navigate("/layout");
          }
          else{
            username.current.value = "";
            password.current.value = "";
            errorMessage(true);
            setMessage('Login or password incorrect !');
            setTimeout(() => {
              errorMessage(false);
            }, 2000);
            localStorage.setItem('user', JSON.stringify(false));
        }
    } 


  return (
    <div className="login">
      <form onSubmit={handleSubmit}>
        <label htmlFor="chk" aria-hidden="true">
          Login
        </label>
        <input ref={username} type="text" name="text" placeholder="Username" required/>
        <input ref={password} type="password" name="pswd" placeholder="Password" required/>
        <button type="submit">Login</button>
        {error && <h6 className="error-text">{message}</h6>}
      </form>
    </div>
  );
}

export default Login;
