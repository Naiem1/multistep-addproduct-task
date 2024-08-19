import ImageUpload from '../components/productDetails/ImageUpload';
import StepperProductDetails from '../components/StepperContent/StepperProductDetails';
import StpperInventoryDetails from '../components/StepperContent/StpperInventoryDetails';

export const CHECKOUT_STEPS = [
  {
    name: 'Product Details',
    details: 'Select From Menu',
    Component: ({ handleNext }) => (
      <StepperProductDetails handleNext={handleNext} />
    ),
  },
  {
    name: 'Inventory Details',
    details: 'A Deep drive into inventory details',
    Component: ({ handleNext }) => (
      <StpperInventoryDetails handleNext={handleNext} />
    ),
  },
  {
    name: 'Add Photo',
    details: 'Visual Insights Included',
    Component: ({ handleNext }) => <ImageUpload handleNext={handleNext} />,
  },
  {
    name: 'Review',
    details: 'A Comprehensive  Review',
    Component: () => <div>Your Order has been delivered</div>,
  },
];
