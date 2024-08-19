import { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';

import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { useDispatch, useSelector } from 'react-redux';
import { addProductData } from '../../store/featrue/productSlice';

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

const ImageUpload = ({ handleNext, currentStep, stepLength }) => {
  const {
    handleSubmit,
    formState: { errors },
    control,
  } = useForm();
  const [imagePreview, setImagePreview] = useState(null);
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    handleNext();
    console.log(data);
    // dispatch(addProductData(imagePreview));

    console.log(data);
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
  console.log('[imageUpload] state==>>', state);

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

      <Button variant="contained" type="submit">
        Next
      </Button>
    </form>
  );
};

export default ImageUpload;
