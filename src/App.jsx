import { useEffect, useState } from "react";
import Form from "./Components/Form";

const App = () => {
  const [data, setData] = useState({
    description: [],
    amount: [],
  });
  const getData = data => {
    setData({
      ...data,
      description: [...data.description],
      amount: [...data.amount],
    });
  };

  const desc = data.description.map(desc => <p key={desc}>{desc}</p>);
  const amt = data.amount.map(amt => <p key={amt}>{amt}</p>);

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <div className="p-3">
      <Form getData={getData} />
      {desc} {amt}
    </div>
  );
};

export default App;
