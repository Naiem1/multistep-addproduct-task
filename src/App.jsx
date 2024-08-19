import MultiSteps from './components/multisteps/multiSteps';
import ImageUpload from './components/StepperContent/ImageUpload';
import InventoryDetails from './components/StepperContent/InventoryDetails';
import PreviewData from './components/StepperContent/PreviewData';
import ProductDetails from './components/StepperContent/ProductDetails';

export const CHECKOUT_STEPS = [
  {
    name: 'Product Details',
    details: 'Select From Menu',
    Component: ({ handleNext, currentStep, stepLength, isComplete }) => (
      <ProductDetails
        handleNext={handleNext}
        currentStep={currentStep}
        stepLength={stepLength}
        isComplete={isComplete}
      />
    ),
  },
  {
    name: 'Inventory Details',
    details: 'A Deep drive into inventory details',
    Component: ({ handleNext, currentStep, stepLength, isComplete }) => (
      <InventoryDetails
        handleNext={handleNext}
        currentStep={currentStep}
        stepLength={stepLength}
        isComplete={isComplete}
      />
    ),
  },
  {
    name: 'Add Photo',
    details: 'Visual Insights Included',
    Component: ({ handleNext, currentStep, stepLength, isComplete }) => (
      <ImageUpload
        handleNext={handleNext}
        currentStep={currentStep}
        stepLength={stepLength}
        isComplete={isComplete}
      />
    ),
  },
  {
    name: 'Review',
    details: 'A Comprehensive  Review',
    Component: ({ handleNext, currentStep, stepLength, isComplete }) => (
      <PreviewData
        handleNext={handleNext}
        currentStep={currentStep}
        stepLength={stepLength}
        isComplete={isComplete}
      />
    ),
  },
];

const App = () => {
  return (
    <div>
      <MultiSteps stepsConfig={CHECKOUT_STEPS} />
    </div>
  );
};

export default App;
