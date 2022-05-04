import Card from "../UI/Card";
import styles from "./BasedOnWatched.module.css";
import image1 from "../../assets/images/videdu1.jpg";
import PreviousMap from "postcss/lib/previous-map";
import Card2 from "../UI/Card2";

function BasedOnWatched(props) {
  return (
    <div
      className={`mt-16 ml-5 grid grid-cols-2 gap-6 ${styles.heightMainPage}`}
    >
      <section className={`gap-y-8 ${styles.section1}`}>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </section>

      <section className={`mr-10 ${styles.section1}`}>
        <div className="gap-y-8 gap-x-5 grid grid-cols-3 ">
          <Card2 />
          <Card2 />
          <Card2 />
          <Card2 />
          <Card2 />
          <Card2 />
          <Card2 />
          <Card2 />
          <Card2 />
          <Card2 />
          <Card2 />
        </div>
      </section>
    </div>
  );
}

export default BasedOnWatched;
