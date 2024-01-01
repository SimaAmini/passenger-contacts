import { Link } from "react-router-dom";

export const Error = () => {
  return (
    <div>
      <h2>Something went wrong!</h2>
      <Link to="/">Lets go home</Link>
    </div>
  );
};
