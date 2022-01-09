import react from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./LoginPage.css"

export default function LoginPage(){

    
  const [userName, setUserName] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()

  const handleLogin = () => {
      if(userName == "user" && password == "user"){
          console.log("login successful")
          navigate("/userpage")
      }else {
          console.log("wrong username or password")
          navigate("/loginerror")
      }
  }

    return (
        <div className="login-container">
            <h1>Login</h1>
            <input type="text" placeholder="username" onChange={ e => setUserName(e.target.value) } value={userName} />
            <input type="password" placeholder="password" onChange={ e => setPassword(e.target.value) } value={password} />
            <button onClick={ handleLogin } >Login</button>    
        </div>
    )
  }