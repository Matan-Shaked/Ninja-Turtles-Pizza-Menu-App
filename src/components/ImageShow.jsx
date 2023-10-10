import "../App.css";

function ImageShow({ title, image, style }) {
  return (
    <div>
      <div className="topping-box" style={style}>
        <h2 className="topping-title-show">{title}</h2>
        <img className="topping-image" src={image} alt=""></img>
      </div>
    </div>
  );
}
export default ImageShow;
