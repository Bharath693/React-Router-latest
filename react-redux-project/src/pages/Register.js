import React, { useState } from "react";
import "./css/Register.scss";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";

const Register = () => {

    const [RegisterUser, setRegisterUser] = useState({
        email:"",
        userName:"",
        Password:"",
    })

    const handleChange = (event) =>{
        setRegisterUser({
            ...RegisterUser,
            [event.target.name]:event.target.value
        })
    }

    const handleSubmit = (e) =>{
       e.preventDefault();
    }
  return (
    <div className="Register">
      <form onSubmit={handleSubmit}>
      <div className="Register--Main">
        <p className="Register--Main--Heading">Register</p>
        <TextField
          id="outlined-basic"
          label="email"
          variant="outlined"
          name="email"
          size="small"
          type="text"
        //   error={NameTextFieldError}
          value={RegisterUser.email}
          onChange={handleChange}
          className="Login--Maincomponent--InputDiv--userNameTxtField"
        />
        <TextField
          id="outlined-basic"
          label="username"
          variant="outlined"
          name="userName"
          size="small"
          type="text"
        //   error={NameTextFieldError}
          value={RegisterUser.userName}
          onChange={handleChange}
          className="Login--Maincomponent--InputDiv--userNameTxtField"
        />
        <TextField
          id="outlined-basic"
          label="Password"
          variant="outlined"
          name="password"
          size="small"
          type="text"
        //   error={NameTextFieldError}
          value={RegisterUser.Password}
          onChange={handleChange}
          className="Login--Maincomponent--InputDiv--userNameTxtField"
        />
        <div>
          <button>Register</button>
      </div>
      </div>
      </form>
      
    </div>
  );
};

export default Register;
