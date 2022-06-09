import React, {useContext, useState } from 'react';

// const NoteContext = React.createContext();
// export const  UserDetails = () =>useContext(NoteContext);
// export const UserDetails = () =>useContext(NoteContext)

export const NoteContext = React.createContext();
// export const UserDetails = () => useContext(NoteContext);

const NoteState = (props) => {
    const [user,setUser] = useState({
        Name:"Bharath",
        Password:"12345678"
    })
  return (
   <NoteContext.Provider value={user}>
      {props.children}
   </NoteContext.Provider>
  )
}

export default NoteState