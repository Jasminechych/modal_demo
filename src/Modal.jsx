import { useState } from "react";
import style from "./Modal.module.scss";

const Modal = () => {
  const [popUp, setPopUp] = useState(false);

  const handleClick = () => {
    setPopUp(!popUp);
    console.log("click", "popUp: ", popUp);
  };

  return (
    <>
      <button onClick={handleClick}>click me</button>
      {popUp && (
        <Content handleClick={handleClick} />
      )}
      {popUp && <Background />}
    </>
  );
};

const Background = () => {
  return <div className={style.background}></div>;
};

const Content = ({  handleClick }) => {
  
  return (
    <div className={style.content}>
      this is pop up content
      <button onClick={handleClick}>close me</button>
    </div>
  );
};

export { Modal };
