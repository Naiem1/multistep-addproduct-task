import { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';

import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { useDispatch, useSelector } from 'react-redux';
import { addProductData } from '../../store/featrue/productSlice';
import { Stack } from '@mui/material';

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});

const ImageUpload = ({
  handleNext,
  currentStep,
  stepLength,
  handlePrevious,
}) => {
  const {
    handleSubmit,
    formState: { errors },
    control,
  } = useForm();
  const [imagePreview, setImagePreview] = useState(null);
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    handleNext();

    const formData = {
      image: imagePreview,
    };

    dispatch(addProductData(formData));
  };

  const handleImageChange = (file) => {
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      setImagePreview(null);
    }
  };

  const state = useSelector((state) => state);

  return (
    <form id="product-form" onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="image">Product Image:</label>
        <Controller
          name="image"
          control={control}
          rules={{ required: 'Product image is required' }}
          render={({ field }) => (
            <Button
              component="label"
              role={undefined}
              variant="contained"
              tabIndex={-1}
              startIcon={<CloudUploadIcon />}
            >
              Upload file
              <VisuallyHiddenInput
                type="file"
                id="image"
                accept="image/*"
                onChange={(e) => {
                  field.onChange(e.target.files[0]);
                  handleImageChange(e.target.files[0]);
                }}
              />
            </Button>
          )}
        />
        {errors.image && (
          <p className="error-message">{errors.image.message}</p>
        )}
      </div>

      {imagePreview && (
        <div>
          <img
            src={imagePreview}
            alt="Product Preview"
            style={{ maxWidth: '100%', height: 'auto' }}
          />
        </div>
      )}

      <Stack sx={{ mt: 4 }} direction="row" spacing={2}>
        {currentStep > 1 ? (
          <Button color="inherit" variant="contained" onClick={handlePrevious}>
            Back
          </Button>
        ) : null}

        <Button type="submit" className="btn" variant="contained">
          {currentStep === stepLength ? 'Submit' : 'Next'}
        </Button>
      </Stack>
    </form>
  );
};

export default ImageUpload;
