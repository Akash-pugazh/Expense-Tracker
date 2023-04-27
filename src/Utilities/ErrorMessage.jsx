export default function ErrorMessage(type) {
  const danger = "text-red-500 text-s";
  switch (type) {
    case "required":
      return <p className={danger}>This field is required</p>;
    case "minLength":
      return <p className={danger}>Enter a minimum char of 3 or more</p>;
    case "min":
      return <p className={danger}>Value should not be zero or less</p>;
  }
}
