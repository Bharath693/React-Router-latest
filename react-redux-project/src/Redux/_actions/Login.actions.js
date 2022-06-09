import { loginConstants } from "../_constants/Login.constants"

const login = (userObj,flag) =>{
  return (dispatch) =>{
      if(flag === "succ"){
          dispatch(success(userObj))
      }
      else{
          dispatch(failure())
      }
      function success(user){
        //   console.log(user)
         return {type:loginConstants.LOGIN_SUCCESS, user}
      }
      function failure(){
          return {type:loginConstants.LOGIN_FAILURE}
      }
  }
}

export const userActions= {
    login
}