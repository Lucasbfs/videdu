import styles from "./Titles.module.css";

function Titles() {
  return (
    <div className="mt-10 ml-10 grid grid-cols-2 gap-6">
      <h1>
        <em>Based on what you watched</em>
      </h1>
      <div>
        <h1>
          <em>If you feel curious about new things!</em>
        </h1>
      </div>
    </div>
  );
}

export default Titles;
