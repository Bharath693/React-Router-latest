import React, { useState } from 'react'
import "./rating.scss"
import StarBorderIcon from '@mui/icons-material/StarBorder';
import { FaStar } from 'react-icons/fa'

const Ratings = () => {
  const [totalStarRating, setTotalStarRating] = useState(0);

  const handRating = (starvalue) =>{
      setTotalStarRating(starvalue)
  }
  // console.log(totalStarRating)
  return (
    <div>
        <div className='rating'>
           {/* {[...Array(5)].map((star,i) =>{
             return(
              <StarBorderIcon 
              key={i} 
              className={totalStarRating > i - 1 ? "rating--starColor" : ""} 
              onClick={() =>handRating(i)}
              />
             )
           })} */}
           {[...Array(4)].map((star,i) =>{
             return(
               <FaStar 
              //  key={i}
               className={totalStarRating > i -1 ? "rating--starColor" : ""}
               onClick={() =>handRating(i)}
               />
             )
           })}
           <FaStar />
        </div>
    </div>
  )
}

export default Ratings