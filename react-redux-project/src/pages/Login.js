import React, { useEffect, useState, } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./css/Login.scss"
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { UserDetails } from './NoteState';
import { userActions } from "../Redux/_actions/Login.actions"
import { useDispatch } from 'react-redux';
import Header from '../Components/Header/header';

const Login = (props) => {
  const dispatch = useDispatch()
  const navigation = useNavigate()
  const [users,setUsers] = useState({
    Name:"",
    Password:""
  });
  
  //Login Error State
 const [userNameError, setUserNameError] = useState("")
 const [userPasswordError, setUserPasswordError] = useState("");
 const [NameTextFieldError, setNameTextFieldError] = useState(false)
 const [PasswordTextFieldError, setPasswordTextFieldError] = useState(false);

const handleChange = (event) =>{
  //  setNameTextFieldError(false)
  //  setPasswordTextFieldError(false)
   setUsers({
     ...users,
     [event.target.name]:event.target.value,
   })
  
}

useEffect(() =>{
  const removeError = () =>{
    if( users.Name !== "" && users.Password !==""){
      // console.log(users.Name.length)
      setNameTextFieldError(false);
      setPasswordTextFieldError(false)
    }
    else if(users.Name !==""){
      setNameTextFieldError(false);
    }else if(users.Password !==""){
      setPasswordTextFieldError(false)
    }
  }
  removeError()
},[users])
  


const handleSubmit = () =>{
   dispatch(userActions.login(users,"succ"));
   if(users.Name === "" && users.Password === ""){
    props.setIsAuth(false)
    setNameTextFieldError(true)
    setPasswordTextFieldError(true)
     setUserNameError("user Name Should not be Empty")
   }
   else if(users.Name === ""){
    props.setIsAuth(false)
    setNameTextFieldError(true)
   }
   else if(users.Password === ""){
     setPasswordTextFieldError(true)
     setUserPasswordError("UserPassword should not be Empty")
   }
   else {
        setNameTextFieldError(false)
        setPasswordTextFieldError(false)
        props.setIsAuth(true)
        navigation("/home") 
   }
       
}
 
  return (
    <div className='Login--Maincomponent'>
      <div className='Login--Maincomponent--InputDiv'>
        <p className='Login--Maincomponent--LoginText'>Login</p>
      
      <TextField 
      id="outlined-basic" 
      label="username" 
      variant="outlined" 
      name="Name"
      size='small'
      type="text"
      error={NameTextFieldError}
      value={users.Name}
      onChange={handleChange}
      className="Login--Maincomponent--InputDiv--userNameTxtField"
      />
    {/* {userNameError} */}
    
      <TextField 
      id="outlined-basic" 
      label="password" 
      variant="outlined" 
      name="Password"
      size='small'
      type="password"
      fullWidth
      error={PasswordTextFieldError}
      value={users.Password}
      onChange={handleChange}
      />
    <div>
      <button 
      className='Login--Maincomponent--SubmitBtn'
      onClick={() =>handleSubmit()}
      >
        Submit
      </button>
    </div>
    <p>donot have an account <Link to="/register">Register</Link></p>
      </div>
    </div>
  )
}

export default Login