import {
  formClassNames,
  formDivClassNames,
  labelClassNames,
  inputClassNames,
  secondaryButtonClassNames,
} from "../Styles/StyleClassNames";
import ErrorMessage from "../Utilities/ErrorMessage";

import { useState } from "react";
import { useForm } from "react-hook-form";

const Form = ({ getData }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [data, setData] = useState([]);

  const submitHandler = inputData => {
    setData([...data, inputData]);
    getData(data);
  };

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
      <button className={secondaryButtonClassNames}>Submit</button>
    </form>
  );
};

export default Form;
