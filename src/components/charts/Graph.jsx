import { useSelector } from 'react-redux';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const RectangularBarGraph = () => {
  const products = useSelector((state) => state.product.products);

  return (
    <ResponsiveContainer width="100%" height={400}>
      <BarChart
        data={products}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="title" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="totalStock" fill="#8884d8" />
        <Bar dataKey="regularPrice" fill="#82ca9d" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default RectangularBarGraph;
