// import { InputData } from "../data/Data";

import { useState } from "react";
import { FormCompo } from "./FormCompo";

export const Step2 = () => {
  const [userData, setUserData] = useState({
    username: "",
    dob: ""
  });
  const handleInput = (e) => {
    setUserData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
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
        name1="username"
        name2="dob"
        value1={userData.username}
        value2={userData.dob}
        firstTitle="username"
        secTitle="DOB"
        secInpTyp="date"
        step="Step 2"
        showInp={false}
        secIn={true}
      />
    </>
  );
};
