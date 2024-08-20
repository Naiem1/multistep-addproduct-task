import { Button, Stack } from '@mui/material';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { reset, setProducts } from '../../store/featrue/productSlice';

const PreviewData = ({
  handleNext,
  currentStep,
  stepLength,
  isComplete,
  handlePrevious,
  setCurrentStep,
  setIsComplete,
}) => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const [isSubmit, setIsSubmit] = useState(false);

  const handleSubmit = () => {
    dispatch(setProducts(state.product.productData));
    handleNext();
    dispatch(reset());
    setIsSubmit(true);
  };

  const handleInitialStep = () => {
    setIsComplete(false);
    setCurrentStep(1);
  };

  const filterData = Object.keys(state.product.productData)
    .filter((key) => key !== 'image' && key !== 'imagePreview')
    .map((key) => {
      return key;
    });

  return (
    <div className="wrapper preview">
      {isSubmit ? (
        <div>
          <h4>Successfully Submitted</h4>
          <Button
            sx={{ mt: 4 }}
            variant="contained"
            className="btn"
            onClick={handleInitialStep}
          >
            Add More
          </Button>
        </div>
      ) : (
        <ul>
          {filterData.map((data, idx) => (
            <li key={idx}>
              <span>{data}: </span> {state.product.productData[data]}
            </li>
          ))}
          <img
            className="preview-img"
            src={state.product.productData.image}
            alt="img"
          />
        </ul>
      )}

      {!isComplete && (
        <Stack direction="row" spacing={2}>
          {currentStep > 1 ? (
            <Button
              color="inherit"
              variant="contained"
              onClick={handlePrevious}
            >
              Back
            </Button>
          ) : null}

          <Button variant="contained" className="btn" onClick={handleSubmit}>
            {currentStep < stepLength ? 'Next' : 'Submit'}
          </Button>
        </Stack>
      )}
    </div>
  );
};

export default PreviewData;
