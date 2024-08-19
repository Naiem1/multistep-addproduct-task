import { Button, Stack } from '@mui/material';
import { useForm } from 'react-hook-form';
import { addProductData } from '../../store/featrue/productSlice';
import { useDispatch, useSelector } from 'react-redux';

const InventoryDetails = ({ handleNext, currentStep, stepLength }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();
  const onSubmit = (data) => {
    dispatch(addProductData(data));
    handleNext();
    console.log(data);
  };

  const state = useSelector((state) => state);
  console.log('[inventoryDetails] state==>>', state);
  return (
    <>
      <form id="product-form" onSubmit={handleSubmit(onSubmit)}>
        {/* <FormContent register={register} errors={errors} /> */}

        {/* <Stack direction="row" spacing={2}>
          {currentStep > 1 ? (
            <Button color="inherit" variant="contained">
              Back
            </Button>
          ) : null}

          <Button  type='button' className="btn" variant="contained">
            {currentStep === stepsConfig.length ? 'Submit' : 'Next'}
          </Button>
        </Stack> */}

        <div>
          <label htmlFor="title">Weight:</label>
          <input
            type="number"
            id="weight"
            {...register('weight', { required: 'Weight required' })}
          />
          {errors.weight && (
            <small className="error-message">{errors?.weight.message}</small>
          )}
        </div>

        <div>
          <label htmlFor="title">Length:</label>
          <input
            type="number"
            id="length"
            {...register('length', { required: 'length required' })}
          />
          {errors.length && (
            <small className="error-message">{errors?.length.message}</small>
          )}
        </div>

        <div>
          <label htmlFor="title">Height:</label>
          <input
            type="number"
            id="height"
            {...register('height', { required: 'height required' })}
          />
          {errors.height && (
            <small className="error-message">{errors?.height.message}</small>
          )}
        </div>

        <div>
          <label htmlFor="title">Width:</label>
          <input
            type="number"
            id="width"
            {...register('width', { required: 'width required' })}
          />
          {errors.width && (
            <small className="error-message">{errors?.width.message}</small>
          )}
        </div>

        <div>
          <label htmlFor="title">Total Stock:</label>
          <input
            type="number"
            id="totalStock"
            {...register('totalStock', { required: 'totalStock required' })}
          />
          {errors.totalStock && (
            <small className="error-message">
              {errors?.totalStock.message}
            </small>
          )}
        </div>
        <Button variant="contained" type="submit">
          Next
        </Button>
      </form>
    </>
  );
};

export default InventoryDetails;
