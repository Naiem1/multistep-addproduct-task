import { useState, useRef, useEffect } from 'react';
import './MultiSteps.css';
import { Button, Stack } from '@mui/material';
import { useForm } from 'react-hook-form';
import FormContent from '../productDetails/FormContent';

const MultiSteps = ({ stepsConfig = [] }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isComplete, setIsComplete] = useState(false);
  const [margins, setMargins] = useState({
    marginLeft: 0,
    marginRight: 0,
  });
  const stepRef = useRef([]);
  useEffect(() => {
    setMargins({
      marginLeft: stepRef.current[0].offsetWidth / 2,
      marginRight: stepRef.current[stepsConfig.length - 1].offsetWidth / 2,
    });
    console.log(stepRef.current[stepsConfig.length - 1].offsetWidth);
  }, [stepRef]);

  if (!stepsConfig.length) {
    return <></>;
  }

  const handleNext = () => {
    console.log('clicked');
    setCurrentStep((prevStep) => {
      if (prevStep === stepsConfig.length) {
        setIsComplete(true);
        return prevStep;
      } else {
        return prevStep + 1;
      }
    });
  };

  const calculateProgressBarWidth = () => {
    return ((currentStep - 1) / (stepsConfig.length - 1)) * 100;
  };

  const ActiveComponent = stepsConfig[currentStep - 1]?.Component;

  // resct form

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    // handleNext();
    console.log(data);

    console.log('Submitted');
    // Handle form submission, e.g., send data to the server
  };
  return (
    <div className="wrapper ">
      <div className="stepper">
        {stepsConfig.map((step, idx) => {
          return (
            <div
              key={idx}
              ref={(el) => (stepRef.current[idx] = el)}
              className={`step ${
                currentStep > idx + 1 || isComplete ? 'complete' : ''
              } ${currentStep === idx + 1 ? 'active' : ''}`}
            >
              <div className="step-number">
                {currentStep > idx + 1 || isComplete ? (
                  <span>&#x2713;</span>
                ) : (
                  idx + 1
                )}
              </div>
              <div className="step-name">{step?.name}</div>
            </div>
          );
        })}

        <div
          className="progress-bar"
          style={{
            width: `calc(100% - ${margins.marginLeft + margins.marginRight}px`,
            marginLeft: margins.marginLeft,
            marginRight: margins.marginRight,
          }}
        >
          <div
            className="progress"
            style={{ width: `${calculateProgressBarWidth()}%` }}
          ></div>
        </div>
      </div>

      {/* <ActiveComponent
        isComplete={isComplete}
        currentStep={currentStep}
        stepsConfigLength={stepsConfig.length}
        handleNext={handleNext}
        text="Hello world"
      /> */}
      <form id="product-form" onSubmit={handleSubmit(onSubmit)}>
        {/* <FormContent register={register} errors={errors} /> */}
        <ActiveComponent register={register} errors={errors} />

        <Button variant="outlined" type="submit">
          Submit
        </Button>

        <Stack direction="row" spacing={2}>
          {currentStep > 1 ? (
            <Button color="inherit" variant="contained">
              Back
            </Button>
          ) : null}

          <Button
            onClick={handleNext}
            type="button"
            className="btn"
            variant="contained"
          >
            {currentStep === stepsConfig.length ? 'Submit' : 'Next'}
          </Button>
        </Stack>
      </form>

      {/* {!isComplete && (
        <Stack  direction="row" spacing={2}>
          {currentStep > 1 ? <Button color='inherit' variant="contained">Back</Button> : null}

          <Button className="btn" variant="contained" onClick={handleNext}>
            {currentStep === stepsConfig.length ? 'Submit' : 'Next'}
          </Button>
        </Stack>
      )} */}
    </div>
  );
};

export default MultiSteps;
