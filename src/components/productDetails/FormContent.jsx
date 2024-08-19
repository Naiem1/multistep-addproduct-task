// import { useForm } from 'react-hook-form';

// const ProductDetails = ({ register, errors }) => {
//   // const {
//   //   register,
//   //   formState: { errors },
//   // } = useForm();
//   return (
//     <>
//       <div>
//         <label htmlFor="title">Product Title:</label>
//         <input
//           type="text"
//           id="title"
//           {...register('title', { required: 'Product title is required' })}
//         />
//         {errors.title && (
//           <small className="error-message">{errors?.title.message}</small>
//         )}
//       </div>

//       <div>
//         <label htmlFor="description">Description:</label>
//         <textarea
//           id="description"
//           {...register('description', {
//             required: 'Description is required',
//           })}
//         />
//         {errors.description && (
//           <small className="error-message">{errors.description.message}</small>
//         )}
//       </div>

//       <div>
//         <label htmlFor="category">Category:</label>
//         <input
//           type="text"
//           id="category"
//           {...register('category', { required: 'Category is required' })}
//         />
//         {errors.category && (
//           <small className="error-message">{errors.category.message}</small>
//         )}
//       </div>

//       <div>
//         <label htmlFor="regular-price">Regular Price:</label>
//         <input
//           type="number"
//           id="regular-price"
//           step="0.01"
//           {...register('regularPrice', {
//             required: 'Regular price is required',
//           })}
//         />
//         {errors.regularPrice && (
//           <small className="error-message">{errors.regularPrice.message}</small>
//         )}
//       </div>

//       <div>
//         <label htmlFor="extra-price">Extra Price:</label>
//         <input
//           type="number"
//           id="extra-price"
//           step="0.01"
//           {...register('extraPrice', { required: 'Extra price is required' })}
//         />
//         {errors.extraPrice && (
//           <small className="error-message">{errors.extraPrice.message}</small>
//         )}
//       </div>

//       <div>
//         <label htmlFor="tax-amount">Tax Amount:</label>
//         <input
//           type="number"
//           id="tax-amount"
//           step="0.01"
//           {...register('taxAmount', { required: 'Tax amount is required' })}
//         />
//         {errors.taxAmount && (
//           <small className="error-message">{errors.taxAmount.message}</small>
//         )}
//       </div>
//     </>
//   );
// };

// export default ProductDetails;



const FormContent = (props) => {
  return (
    <div>FormContent</div>
  )
}

export default FormContent