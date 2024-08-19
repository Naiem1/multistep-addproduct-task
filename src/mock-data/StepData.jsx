import ProductDetails from '../components/productDetails/FormContent';
import ImageUpload from '../components/productDetails/ImageUpload';
import InventoryDetails from '../components/productDetails/InventoryDetails';
import ProductForm from '../components/productDetails/XProductDetails';

export const CHECKOUT_STEPS = [
  {
    name: 'Product Details',
    details: 'Select From Menu',
    Component: ({ register, errors }) => (
      <ProductDetails register={register} errors={errors} />
    ),
  },
  {
    name: 'Inventory Details',
    details: 'A Deep drive into inventory details',
    Component: ({ register, errors }) => (
      <InventoryDetails register={register} errors={errors} />
    ),
  },
  {
    name: 'Add Photo',
    details: 'Visual Insights Included',
    Component: () => <ImageUpload />,
  },
  {
    name: 'Review',
    details: 'A Comprehensive  Review',
    Component: () => <div>Your Order has been delivered</div>,
  },
];
