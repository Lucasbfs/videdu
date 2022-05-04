import styles from "./Card.module.css";
import image1 from "../../assets/images/videdu1.jpg";

function Card() {
  return (
    <div className={`mb-10 grid grid-cols-3 ${styles.card}`}>
      <div className="">
        <img src={image1} alt="image demo" />
        {/* <h1 className="">hello there</h1> */}
      </div>

      <div className="p-2 col-span-2 border-2">
        <h2 className="text-center">Title</h2>
        <p className="mt-2 text-black">
          Lorem ipsum is placeholder text commonly used in the graphic, print,
        </p>
        <ul>
          <li>1</li>
          <li>2</li>
          <li>3</li>
        </ul>
      </div>
    </div>
  );
}

export default Card;
