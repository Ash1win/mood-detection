import react from "react";
import { Link } from "react-router-dom";

import "./LoginError.css"

export default function LoginError(){
    return (
        <div>
            <h1 className="error" >wrong user name or password</h1>
            <Link to="/" >Click here to login again</Link>
        </div>
    )
}