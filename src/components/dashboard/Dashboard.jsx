import { useSelector } from 'react-redux';
import RectangularBarGraph from '../charts/Graph';

const Dashboard = () => {
  const products = useSelector((state) => state.product.products);

  const totalProducts = products.reduce((cur, acc) => {
    return (cur += +acc.totalStock);
  }, 0);


  return (
    <div className='dashboard'>
      <div className='dashboard-total-product wrapper'>
        <p>Total Stock Products</p>
        <h4>{totalProducts}</h4>
      </div>

      <h1>Graph</h1>

      <RectangularBarGraph />
    </div>
  );
};

export default Dashboard;
