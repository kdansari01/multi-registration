// import { InputData } from "../data/Data";

import { useState } from "react";
import { FormCompo } from "./FormCompo";

export const Step4 = () => {
  const [userData, setUserData] = useState({
    city: "",
    mobile: "",
    pincode: ""
  });
  const handleInput = (e) => {
    setUserData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  console.log(userData);
  // firstTitle,
  // secTitle,
  // thirdTitle,
  // firstInpTyp,
  // secInpTyp,
  // thirdInpTyp,
  // step,
  // value,
  // onChange,
  // secIn,
  // name,
  // thirdInp,
  return (
    <>
      <FormCompo
        onChange={handleInput}
        name1="city"
        name2="mobile"
        name3="pincode"
        value1={userData.city}
        value2={userData.mobile}
        value3={userData.pincode}
        firstTitle="City"
        secTitle="Mobile"
        thirdTitle="Pincode"
        firstInpTyp="text"
        secInpTyp="text"
        thirdInpTyp="text"
        step="Step 4"
        secIn={true}
        thirdInp={true}
      />
    </>
  );
};
