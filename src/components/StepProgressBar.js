import StepProgressBar from "react-step-progress";
import "react-step-progress/dist/index.css";
import { Step1 } from "./Step1";
import { Step2 } from "./Step2";
import { Step3 } from "./Step3";
import { Step4 } from "./Step4";

export const ProgressBar = () => {
  const step1Content = <Step1 />;

  const step2Content = <Step2 />;
  const step3Content = <Step3 />;
  const step4Content = <Step4 />;

  const onFormSubmit = () => {
    // handle the submit logic here
    // This function will be executed at the last step
    // when the submit button (next button in the previous steps) is pressed
    console.log("submitedd");
    setTimeout(() => {
      `loadung..`;
    }, 1000);
  };

  return (
    <>
      <StepProgressBar
        startingStep={0}
        onSubmit={onFormSubmit}
        steps={[
          {
            // label: "Step 1",
            // subtitle: "10%",
            name: "step 1",
            content: step1Content
          },
          {
            // label: "Step 2",
            // subtitle: "50%",
            name: "step 2",
            content: step2Content
          },
          {
            // label: "Step 3",
            // subtitle: "100%",
            name: "step 3",
            content: step3Content
          },
          {
            // label: "Step 4",
            // subtitle: "100%",
            name: "step 4",
            content: step4Content
          }
        ]}
      />
      ;
    </>
  );
};
