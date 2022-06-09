import React, { useEffect, useState, useContext } from 'react';
import axios from "axios";
// import { UserDetails } from './NoteState';


import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

const Sample = () => {
  // const users = UserDetails()
  // console.log(users)
  let imgs;
   const [image,setImage] = useState([])

   useEffect( async() =>{
     
    const url = "http://localhost:1337/api/images?populate=*";
    await axios.get(url,{
      method:"GET",
      options:{
        headers:{
          "Authorization":"Bearer"+"4a35f56eca376e7db9a132b5cae8104d7a3e4278b97880cbe1c1b8e1cc2dc0323244af7fe931204a596b5d236baf82e4f3f37ce9af46f5baf0b1c4db5f8f459b9c09675a9bb7d089f547cc88702eefa6d11c8fc65429daa12e136561335ffbf7ad0155d1e1e7c6d57b41339a7e52138da28e5540973b93004a0ad9b2c4452963",
        }
      }
    }).then((res) =>{
     if(res){
       console.log(res.data.data)
       setImage(res.data.data)
     }
   })
    .catch((err) =>console.log(err))
   },[])
  
   // -----------------------------
    let regex=/[0-9]/
    const [Price, setPrice] = useState(0);
    const Amount = [5000,10000,25000,50000];
    const [AmountValue,setAmountValue] = useState("")
    
    const handleAmountChange =(Index,Amount) =>{ 
      if(Amount === 5000){
         setAmountValue(Amount)
      }
      if(Amount === 10000){
        setAmountValue(Amount)
     }
     if(Amount === 25000){
      setAmountValue(Amount)
   }
   if(Amount === 50000){
    setAmountValue(Amount)
 }
}
if(regex.test(AmountValue)){
  console.log(true)
}
    var sglDigit = [
      "Zero",
      "One",
      "Two",
      "Three",
      "Four",
      "Five",
      "Six",
      "Seven",
      "Eight",
      "Nine",
    ],
    dblDigit = [
        "Ten",
        "Eleven",
        "Twelve",
        "Thirteen",
        "Fourteen",
        "Fifteen",
        "Sixteen",
        "Seventeen",
        "Eighteen",
        "Nineteen",
      ],
      tensPlace = [
        "",
        "Ten",
        "Twenty",
        "Thirty",
        "Forty",
        "Fifty",
        "Sixty",
        "Seventy",
        "Eighty",
        "Ninety",
      ],
    Price_in_words = (dgt,nxtDgt) =>{
      // console.log(dgt)
      // console.log(dgt[1])
      if(dgt.length === 2){
        return  sglDigit[dgt[1]];
      }
      else if(dgt.length === 3 && dgt[2] == 1 && dgt[1] >= 1 ){
           return dblDigit[dgt[1]]
      }
      else if(dgt.length === 3 && dgt[2] == 2 && dgt[2] >=2) {
           return  tensPlace[dgt[2]] + sglDigit[dgt[1]]
      } 
      else if(dgt.length === 3 && dgt[2] == 3 && dgt[2] >=3) {
        return  tensPlace[dgt[2]] + sglDigit[dgt[1]]
   } 
   else if(dgt.length === 3 && dgt[2] == 4 && dgt[2] >=4) {
    return  tensPlace[dgt[2]] + sglDigit[dgt[1]]
} 
else if(dgt.length === 3 && dgt[2] == 5 && dgt[2] >=5) {
  return  tensPlace[dgt[2]] + sglDigit[dgt[1]]
} 
else if(dgt.length === 3 && dgt[2] == 5 && dgt[2] >=5) {
  return  tensPlace[dgt[2]] + sglDigit[dgt[1]]
} 
else if(dgt.length === 3 && dgt[2] == 6 && dgt[2] >=6) {
  return  tensPlace[dgt[2]] + sglDigit[dgt[1]]
} 
else if(dgt.length === 3 && dgt[2] == 7 && dgt[2] >=7) {
  return  tensPlace[dgt[2]] + sglDigit[dgt[1]]
} 
else if(dgt.length === 3 && dgt[2] == 8 && dgt[2] >=8) {
  return  tensPlace[dgt[2]] + sglDigit[dgt[1]]
} 
else if(dgt.length === 3 && dgt[2] == 9) {
  return  tensPlace[dgt[2]] + sglDigit[dgt[1]]
} 
      else{
        return tensPlace[dgt[2]]
      }
      // if(dgt.length === 3 && dgt[1] === "0")
      // console.log("sdfghmj,hjgf")
      //   // return tensPlace[dgt[1]]
    } 
    let dgt=[]
    let nxtDgt=0
    let dgtIdx
    if(Price.length > 0){
      for(dgtIdx = Price.length; dgtIdx >= 0; dgtIdx--){
          dgt.push(Price[dgtIdx]) 
          nxtDgt = dgtIdx > 0 ? Price[dgtIdx]-1 : 0
      }
    }
  
  //  imgs = image && image.map((result) =>{
     
  //   result.attributes.media.data.map((res) =>{
  //    console.log(res)
  //     return res
  //   })
  //  })

  //  console.log(imgs)
  return (
    <div className='d-flex flex-column'>
        <div>
        {/* <input 
        // type="number"
        name='Price'
        value={Price}
        onChange={(e) =>setPrice(e.target.value)}
        onKeyPress={(event) =>{
          if (!/^[0-9]/.test(event.key)) {
            event.preventDefault();
          }
        }}
        /> */}
        </div>
        {/* <div> 
        {Price_in_words(dgt,nxtDgt)}
        </div> */}
        {/* <img src={"http://localhost:1337"+image} alt="image" /> */} 
        {/* {image && image.map((res) =>{
          console.log(res)
          // let getimgs = res.attributes.formats.large.url
          // Object.keys(getimgs).map((key) =>{
          //   // console.log(getimgs[key])
          // })
       return(
         <>
         <div key={res.id}>
         <img src={"http://localhost:1337"+res.attributes.url} alt="images" key={res.id}/>
         </div>
         </>
       )
     })} */}
     
     {image && image.map((result,index) =>{
       console.log(result.attributes.media.data[0].attributes.formats.large.url)
         return(
           <>
           <div key={index}>
             <img src={`http://localhost:1337${result.attributes.media.data[0].attributes.formats.large.url}`} alt="images"/>
           </div>
           </>
         )
     })}
    </div>
  )
}


export default Sample