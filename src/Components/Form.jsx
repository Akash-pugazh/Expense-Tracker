import { useState } from "react";

const Form = ({ getData }) => {
  const [finalData, setFinalData] = useState({
    description: [],
    amount: [],
  });
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState(0);
  const [errorMessageVisiblity, setErrorMessageVisibility] = useState(false);
  const [successMessageVisibility, setSuccessMessageVisibility] =
    useState(false);

  const errorMessageToggler = () => {
    setErrorMessageVisibility(true);
    setTimeout(() => {
      setErrorMessageVisibility(false);
    }, 1000);
  };
  const successMessageToggler = () => {
    setSuccessMessageVisibility(true);
    setTimeout(() => {
      setSuccessMessageVisibility(false);
    }, 1000);
  };

  const errorMessage = msg => {
    return <span className="text-red-500 text-xs mt-1">{msg}</span>;
  };
  const successMessage = msg => {
    return <span className="text-green-500 text-xs mt-1">{msg}</span>;
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (description === "" || description.length < 3) {
      errorMessageToggler();
      return;
    }
    if (amount === 0) {
      errorMessageToggler();
      return;
    }

    setFinalData({
      ...finalData,
      description: [...finalData.description, description],
      amount: [...finalData.amount, amount],
    });

    setDescription("");
    setAmount(0);
    getData(finalData);
    successMessageToggler();
  };

  const handleDescriptionChange = e => {
    const descriptionValue = e.target.value;
    setDescription(descriptionValue);
  };

  const handleAmountChange = e => {
    const amountValue = parseInt(e.target.value);
    setAmount(amountValue);
  };

  const labelClassNames = "mt-4 text-xl font-normal mb-1";
  const inputClassNames =
    "transition ease-in-out delay-150 border-b-2 focus:outline-none focus:border-blue-200";
  const buttonClassNames =
    "mt-8 px-3 py-1 transition ease-in duration-200 text-white rounded-md bg-slate-400 hover:bg-slate-500";

  return (
    <form
      className="p-5 border-2 border-gray-100 rounded-md flex flex-col items-start "
      onSubmit={handleSubmit}
    >
      <label className={labelClassNames} htmlFor="description">
        Description
      </label>
      <input
        className={inputClassNames}
        value={description}
        type="text"
        id="description"
        onChange={handleDescriptionChange}
      />
      {errorMessageVisiblity && errorMessage("Enter valid description :( ")}

      <label className={labelClassNames} htmlFor="amount">
        Amount
      </label>
      <input
        className={inputClassNames}
        value={amount || ""}
        type="number"
        id="amount"
        onChange={handleAmountChange}
      />
      {errorMessageVisiblity && errorMessage("Enter valid amount :( ")}

      <button className={buttonClassNames} type="submit" onClick={handleSubmit}>
        Submit
      </button>
      {successMessageVisibility && successMessage("Submitted Successfully ✅")}
    </form>
  );
};

export default Form;
