import { Button } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { setProducts } from '../../store/featrue/productSlice';

const PreviewData = ({ handleNext, currentStep, stepLength, isComplete }) => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  
  const handleSubmit = () => {
    dispatch(setProducts(state.product.productData));
    handleNext();
  };
  
  console.log(state);
  return (
    <div className="wrapper preview">
      <ul>
        {Object.keys(state.product.productData).map((data, idx) => (
          <li key={idx}>
            <span>{data}: </span> {state.product.productData[data]}
          </li>
        ))}
      </ul>

      {!isComplete && (
        <Button variant="contained" className="btn" onClick={handleSubmit}>
          {currentStep < stepLength ? 'Next' : 'Submit'}
        </Button>
      )}
    </div>
  );
};

export default PreviewData;
