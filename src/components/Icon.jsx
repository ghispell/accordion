import plus from "../assets/images/icon-plus.svg";
import moins from "../assets/images/icon-minus.svg";
import { useState } from "react";

function Icon({ setter }) {
  const [icon, setIcon] = useState(true);

  function handleClick() {
    setIcon((prev) => !prev);
    setter((prev) => !prev);
  }

  return (
    <>
      <img src={icon ? plus : moins} alt="icon" onClick={handleClick} />
    </>
  );
}

export default Icon;
