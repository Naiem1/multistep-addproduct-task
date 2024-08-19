// const InventoryDetails = ({ register, errors }) => {
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
//       {/* ------ */}
//       <div>
//         <label htmlFor="title">Weight:</label>
//         <input
//           type="number"
//           id="weight"
//           {...register('weight', { required: 'Weight required' })}
//         />
//         {errors.weight && (
//           <small className="error-message">{errors?.weight.message}</small>
//         )}
//       </div>

//       <div>
//         <label htmlFor="title">Length:</label>
//         <input
//           type="number"
//           id="length"
//           {...register('length', { required: 'length required' })}
//         />
//         {errors.length && (
//           <small className="error-message">{errors?.length.message}</small>
//         )}
//       </div>

//       <div>
//         <label htmlFor="title">Height:</label>
//         <input
//           type="number"
//           id="height"
//           {...register('height', { required: 'height required' })}
//         />
//         {errors.height && (
//           <small className="error-message">{errors?.height.message}</small>
//         )}
//       </div>

//       <div>
//         <label htmlFor="title">Width:</label>
//         <input
//           type="number"
//           id="width"
//           {...register('width', { required: 'width required' })}
//         />
//         {errors.width && (
//           <small className="error-message">{errors?.width.message}</small>
//         )}
//       </div>

//       <div>
//         <label htmlFor="title">Total Stock:</label>
//         <input
//           type="number"
//           id="totalStock"
//           {...register('totalStock', { required: 'totalStock required' })}
//         />
//         {errors.totalStock && (
//           <small className="error-message">{errors?.totalStock.message}</small>
//         )}
//       </div>
//     </>
//   );
// };

// export default InventoryDetails;



const InventoryDetails = (props) => {
  return (
    <div>InventoryDetails</div>
  )
}

export default InventoryDetails