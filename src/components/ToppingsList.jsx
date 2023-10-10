import ImageShow from "./ImageShow";
import "../App.css";

function ToppingsList({ topping }) {
  const backgroundColor = topping.length >= 5 ? "red" : "rgb(111, 75, 41)";

  const renderedImages = topping.map((image, index) => {
    return (
      <ImageShow
        style={{ backgroundColor }}
        key={index}
        image={image.img}
        title={image.name}
      />
    );
  });

  return <div className="image-list"> {renderedImages}</div>;
}
export default ToppingsList;
