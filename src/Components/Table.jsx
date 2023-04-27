import {
  tableClassName,
  tableHeadClassName,
  tableDataClassName,
  dangerButtonClassNames,
} from "../Styles/StyleClassNames";
import Button from "./Button";

const Table = ({ data, totalAmount }) => {
  const totalRender = (
    <tr>
      <td className={tableDataClassName}>Total</td>
      <td className={tableDataClassName}>{totalAmount}</td>
    </tr>
  );
  const rowRender = data.map(element => {
    return (
      <tr key={element.Description + Math.floor(Math.random() * 1000000)}>
        <td className={tableDataClassName}>{element.Description}</td>
        <td className={tableDataClassName}>{element.Amount}</td>
        <td className={tableDataClassName}>
          <Button buttonClassName={dangerButtonClassNames}>Delete</Button>
        </td>
      </tr>
    );
  });

  return (
    <table className={tableClassName}>
      <thead>
        <tr>
          <th className={tableHeadClassName}>Description</th>
          <th className={tableHeadClassName}>Amount</th>
        </tr>
      </thead>
      <tbody>
        {rowRender}
        {totalRender}
      </tbody>
    </table>
  );
};

export default Table;
