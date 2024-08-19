import { Button, Stack } from '@mui/material';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { addProductData } from '../../store/featrue/productSlice';

const ProductDetails = ({ handleNext, currentStep, stepLength }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    handleNext();
    dispatch(addProductData(data));

    console.log('Submitted');
    // Handle form submission, e.g., send data to the server
  };

  const state = useSelector((state) => state);
  console.log('[productDetails]state==>>', state);

  return (
    <>
      <form id="product-form" onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="title">Product Title:</label>
          <input
            type="text"
            id="title"
            {...register('title', { required: 'Product title is required' })}
          />
          {errors.title && (
            <small className="error-message">{errors?.title.message}</small>
          )}
        </div>

        <div>
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            {...register('description', {
              required: 'Description is required',
            })}
          />
          {errors.description && (
            <small className="error-message">
              {errors.description.message}
            </small>
          )}
        </div>

        <div>
          <label htmlFor="category">Category:</label>
          <input
            type="text"
            id="category"
            {...register('category', { required: 'Category is required' })}
          />
          {errors.category && (
            <small className="error-message">{errors.category.message}</small>
          )}
        </div>

        <div>
          <label htmlFor="regular-price">Regular Price:</label>
          <input
            type="number"
            id="regular-price"
            step="0.01"
            {...register('regularPrice', {
              required: 'Regular price is required',
            })}
          />
          {errors.regularPrice && (
            <small className="error-message">
              {errors.regularPrice.message}
            </small>
          )}
        </div>

        <div>
          <label htmlFor="extra-price">Extra Price:</label>
          <input
            type="number"
            id="extra-price"
            step="0.01"
            {...register('extraPrice', { required: 'Extra price is required' })}
          />
          {errors.extraPrice && (
            <small className="error-message">{errors.extraPrice.message}</small>
          )}
        </div>

        <div>
          <label htmlFor="tax-amount">Tax Amount:</label>
          <input
            type="number"
            id="tax-amount"
            step="0.01"
            {...register('taxAmount', { required: 'Tax amount is required' })}
          />
          {errors.taxAmount && (
            <small className="error-message">{errors.taxAmount.message}</small>
          )}
        </div>

        <Stack direction="row" spacing={2}>
          {currentStep > 1 ? (
            <Button color="inherit" variant="contained">
              Back
            </Button>
          ) : null}

          <Button type="submit" className="btn" variant="contained">
            {currentStep === stepLength ? 'Submit' : 'Next'}
          </Button>
        </Stack>
      </form>
    </>
  );
};

export default ProductDetails;
