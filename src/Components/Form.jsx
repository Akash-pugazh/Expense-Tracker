import {
  formClassNames,
  formDivClassNames,
  labelClassNames,
  inputClassNames,
  secondaryButtonClassNames,
} from "../Styles/StyleClassNames";
import ErrorMessage from "../Utilities/ErrorMessage";

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Button from "./Button";


const Form = ({ getData }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [data, setData] = useState([]);


  const submitHandler = inputData => {
    setData([...data, inputData]);
    reset()
  };

  useEffect(() => {
    getData(data);
  }, [data]);

  return (
    <form className={formClassNames} onSubmit={handleSubmit(submitHandler)}>
      <div className={formDivClassNames}>
        <label className={labelClassNames} htmlFor="Description">
          Description
        </label>
        <input
          {...register("Description", { required: true, minLength: 3 })}
          className={inputClassNames}
          id="Description"
          type="text"
        />
        {ErrorMessage(errors?.Description?.type)}
      </div>
      <div className={formDivClassNames}>
        <label className={labelClassNames} htmlFor="Amount">
          Amount
        </label>
        <input
          {...register("Amount", { required: true, min: 1 })}
          className={inputClassNames}
          id="Amount"
          type="number"
        />
        {ErrorMessage(errors?.Amount?.type)}
      </div>
      <Button className={secondaryButtonClassNames}>Submit</Button>
    </form>
  );
};

export default Form;
