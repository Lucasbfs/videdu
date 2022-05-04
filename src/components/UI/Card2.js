import image1 from "../../assets/images/videdu1.jpg";

function Card2() {
  return (
    <div className="">
      <div className="">
        <img src={image1} alt="image demo" />
        {/* <h1 className="">hello there</h1> */}
      </div>

      <div className="p-2 col-span-2 border-2">
        <h2>Title</h2>
        <p className="mt-2 text-black">
          Lorem ipsum is placeholder text commonly used in the graphic, print,
        </p>
      </div>
    </div>
  );
}

export default Card2;
