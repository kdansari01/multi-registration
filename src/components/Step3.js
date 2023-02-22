// import { InputData } from "../data/Data";

import { useState } from "react";
import { FormCompo } from "./FormCompo";

export const Step3 = () => {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
    confPass: ""
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
        name1="email"
        name2="password"
        name3="confPass"
        value1={userData.email}
        value2={userData.password}
        value3={userData.confPass}
        firstTitle="Email"
        secTitle="Password"
        thirdTitle="Confirm Password"
        firstInpTyp="email"
        secInpTyp="password"
        thirdInpTyp="password"
        step="Step 3"
        secIn={true}
        thirdInp={true}
      />
    </>
  );
};
