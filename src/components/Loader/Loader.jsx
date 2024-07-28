import { TailSpin } from "react-loader-spinner";
import css from "./Loader.module.css";

const Loader = () => {
  return (
    <div className={css.loader}>
      <TailSpin height="50" width="50" color="blue" ariaLabel="loading" />
    </div>
  );
};

export default Loader;
