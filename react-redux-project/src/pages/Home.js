import React from "react";
import "./css/home.scss";
import { useSelector, connect } from "react-redux";
import Ratings from "../reusableComponents/Ratings";
import Pagination from "../reusableComponents/pagination";
import FavBike from "../pages/FavBike";
import Masking from "../pages/masking";
import { Tooltip } from "@mui/material";
import Sample from "./sample";

const Home = () => {
  // console.log(UserLogin)
  const user = useSelector((state) => console.log(state.LoginR.user));
  console.log(user);
  return (
    <div>
      Home
      <div>
        <Sample />
        {/* <Ratings />
        <Pagination /> */}
        <FavBike />
        {/* <Masking /> */}
        {/* <div className="tooltipDiv">
          <div className="tooltip--text">
            <p>Hover on Tooltip</p>
            <div className="tooltip--hover">
              <p>hello</p>
            </div>
          </div>
        </div> */}
        {/* <Tooltip title="instragram"/> */}
      </div>
    </div>
  );
};

// const mapStateToProps = (state) =>{
//   return{UserLogin:state.LoginR}
// }

export default Home;
