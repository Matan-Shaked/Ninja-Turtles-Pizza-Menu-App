import "../App.css";
import { useState } from "react";

function Turtle({
  name,
  picture,
  toppings,
  onSubmit,
  alreadySelectedToppings,
}) {
  const [toppingPick, setToppingPick] = useState("");

  const handlePick = (event) => {
    const selectedTopping = event.target.textContent;

    setToppingPick(selectedTopping);
    onSubmit(selectedTopping);
  };

  return (
    <div className="turtle-container">
      <div className="turtle-name">{name}</div>
      <div>
        <img className="turtle-picture" src={picture} alt="picture of turtle" />
      </div>
      <h2 className="topping-title">Toppings:</h2>
      <div className="toppings-container">
        {toppings.map((topping, indexOfTopping) => (
          <button onClick={handlePick} key={indexOfTopping} className="topping">
            {topping}
          </button>
        ))}
      </div>
    </div>
  );
}
export default Turtle;

// {
//   showAlert && <div className="alert">Already selected</div>;
// }
