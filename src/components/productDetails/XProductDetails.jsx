// import Box from '@mui/material/Box';
// import TextField from '@mui/material/TextField';

// const ProductDetails = () => {
//   return (
//     <div>
//       <h1></h1> ProductDetails
//       <div>
//         <Box
//           sx={{
//             width: 500,
//             maxWidth: '100%',
//           }}
//         >
//           <TextField fullWidth label="fullWidth" id="fullWidth" />
//         </Box>
//       </div>
//     </div>
//   );
// };

// export default ProductDetails;

import { Button, Stack } from '@mui/material';
import { useForm } from 'react-hook-form';
import FormContent from './FormContent';

const ProductDetails = ({
  isComplete,
  currentStep,
  stepsConfigLength,
  handleNext,
  text,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    handleNext();
    // Handle form submission, e.g., send data to the server
  };

  return (
    <div className=" form-wrapper">
      <form id="product-form" onSubmit={handleSubmit(onSubmit)}>
        {/* <div>
          <label htmlFor="title">Product Title:</label>
          <input
            type="text"
            id="title"
            {...register('title', { required: 'Product title is required' })}
          />
          {errors.title && (
            <small className="error-message">{errors.title.message}</small>
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
        </div> */}

        {/* <button type="submit" className="next-btn">
          Next
        </button> */}

        {/* <FormContent register={register} errors={errors} /> */}

        {/* <Stack direction="row" spacing={2}>
          {currentStep > 1 ? (
            <Button color="inherit" variant="contained">
              Back
            </Button>
          ) : null}

          <Button type="submit" className="btn" variant="contained">
            {currentStep === stepsConfigLength ? 'Submit' : 'Next'}
          </Button>
        </Stack> */}
      </form>
    </div>
  );
};

export default ProductDetails;
