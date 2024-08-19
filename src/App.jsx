import MultiSteps from './components/multisteps/multiSteps';
// import ProductForm from './components/productDetails/XProductDetails';
import { CHECKOUT_STEPS } from './mock-data/StepFromData';
// import { CHECKOUT_STEPS } from './mock-data/StepData';



const App = () => {
  return (
    <div>
      <MultiSteps stepsConfig={CHECKOUT_STEPS} />
      {/* <ProductForm /> */}
    </div>
  );
};

export default App;
