// import { InputData } from "../data/Data";

import { useState } from "react";
import { FormCompo } from "./FormCompo";

export const Step1 = () => {
  const [userData, setUserData] = useState({
    firsName: "",
    lastName: ""
  });
  const handleInput = (e) => {
    const { name, value } = e.target;
    setUserData((prev) => ({ ...prev, [name]: value }));
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
        name1="firsName"
        name2="lastName"
        value1={userData.firsName}
        value2={userData.lastName}
        firstTitle="First Name"
        secTitle="Last Name"
        firstInpTyp="text"
        step="Step 1"
        thirdInp={false}
        secIn={true}
      />
    </>
  );
};
