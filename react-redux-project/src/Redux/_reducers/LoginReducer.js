import React from 'react'
import { loginConstants }from "../_constants/Login.constants";

const user = { 
    
}

const initialState = user;

const LoginReducer = (state = initialState,action) => {
switch(action.type){
    case loginConstants.LOGIN_SUCCESS:
       
        return{user:action.user}
    default :
    return state
}
}

export default LoginReducer