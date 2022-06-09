import React, { useState } from 'react'

const Masking = () => {
    var num = "9876543216";
      var masking = "XXX"
      var sub = masking.substring(0,3);
      console.log(sub)
      var mask = num.substring(0,7)
      sub = sub + mask;
      console.log(sub)
  return (
    <div>
       {sub}
    </div>
  )
}

export default Masking