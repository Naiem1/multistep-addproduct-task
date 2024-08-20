import { Box } from '@mui/material';
import DataGridTable from './components/dataTable/DataTable';
import Navbar from './components/header/Navbar';
import MultiSteps from './components/multisteps/multiSteps';
import ImageUpload from './components/StepperContent/ImageUpload';
import InventoryDetails from './components/StepperContent/InventoryDetails';
import PreviewData from './components/StepperContent/PreviewData';
import ProductDetails from './components/StepperContent/ProductDetails';

import { Route, Routes } from 'react-router-dom';
import Dashboard from './components/dashboard/Dashboard';

const App = () => {
  return (
    <Box>
      <Navbar />
      <Routes>
        <Route path="/" element={<MultiSteps stepsConfig={CHECKOUT_STEPS} />} />
        <Route path="product-list" element={<DataGridTable />} />
        <Route path="dashboard" element={<Dashboard />} />
      </Routes>
    </Box>
  );
};

export default App;

export const CHECKOUT_STEPS = [
  {
    name: 'Product Details',
    details: 'Select From Menu',
    Component: ({
      handleNext,
      currentStep,
      stepLength,
      isComplete,
      handlePrevious,
    }) => (
      <ProductDetails
        handleNext={handleNext}
        currentStep={currentStep}
        stepLength={stepLength}
        isComplete={isComplete}
        handlePrevious={handlePrevious}
      />
    ),
  },
  {
    name: 'Inventory Details',
    details: 'A Deep drive into inventory details',
    Component: ({
      handleNext,
      currentStep,
      stepLength,
      isComplete,
      handlePrevious,
    }) => (
      <InventoryDetails
        handleNext={handleNext}
        currentStep={currentStep}
        stepLength={stepLength}
        isComplete={isComplete}
        handlePrevious={handlePrevious}
      />
    ),
  },
  {
    name: 'Add Photo',
    details: 'Visual Insights Included',
    Component: ({
      handleNext,
      currentStep,
      stepLength,
      isComplete,
      handlePrevious,
    }) => (
      <ImageUpload
        handleNext={handleNext}
        currentStep={currentStep}
        stepLength={stepLength}
        isComplete={isComplete}
        handlePrevious={handlePrevious}
      />
    ),
  },
  {
    name: 'Review',
    details: 'A Comprehensive  Review',
    Component: ({
      handleNext,
      currentStep,
      stepLength,
      isComplete,
      handlePrevious,
      setCurrentStep,
      setIsComplete,
    }) => (
      <PreviewData
        handleNext={handleNext}
        currentStep={currentStep}
        stepLength={stepLength}
        isComplete={isComplete}
        handlePrevious={handlePrevious}
        setCurrentStep={setCurrentStep}
        setIsComplete={setIsComplete}
      />
    ),
  },
];
