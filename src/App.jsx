
import Form from "./Components/Form";
import Table from "./Components/Table";
import { useEffect, useState } from "react";

const App = () => {
  const [data, setData] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);
  const getData = inputData => {
    setData(inputData);
  };
  const sumTotal = data.reduce(
    (accumulator, current) => parseInt(accumulator) + parseInt(current.Amount),
    0,
  );

  useEffect(() => {
    setTotalAmount(sumTotal);
  }, [data]);

  return (
    <div className="p-3">
      <Form getData={getData} />
      <Table data={data} totalAmount={totalAmount} /> 
    </div>
  );
};

export default App;
