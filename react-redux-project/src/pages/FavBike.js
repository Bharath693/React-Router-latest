import React, { useContext, useState } from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { NoteContext } from "./NoteState";

const FavBike = () => {
  const data = useContext(NoteContext);
  console.log(data)
  const [bikeName, setBikeName] = useState("Duke");
  const BikesScheme = [
    {
      name: "bike",
      value: "Duke",
      label: "Duke",
    },
    {
      name: "bike",
      value: "bullet",
      label: "bullet",
    },
    {
      name: "bike",
      value: "R15",
      label: "R15",
    },
  ];

  const handleBikeChange = (bikes) => {
    // console.log(bikes);
    //   setBikeName({[event.target.name]:event.target.value})
    setBikeName(bikes);
  };

  console.log(bikeName)
  return (
    <div>
      <FormControl>
        <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue={bikeName}
          value={bikeName}
        >
          {BikesScheme.map((bikes) => {
            return (
              <>
                <FormControlLabel
                  control={<Radio />}
                  label={bikes.label}
                  value={bikes.value}
                  
                  onClick={() => handleBikeChange(bikes.value)}
                />
              </>
            );
          })}
        </RadioGroup>
      </FormControl>
    </div>
  );
};

export default FavBike;
