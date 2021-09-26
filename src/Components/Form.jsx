import React from "react";
import { useContext, useState } from "react";
import { ThemeContext } from "../Context/ThemeContext";
function Form() {
  const [changeColor, setChangeColor] = useState();
  const { red } = useContext(ThemeContext);
  const submitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <form onSubmit={submitHandler}>
        <input type="text" placeholder="enter name" />
        <input type="text" placeholder="password" />
        <button
          type="submit"
          style={{ color: `${changeColor}` }}
          onClick={() => {
            setChangeColor(red);
          }}
        >
          login
        </button>
      </form>
    </div>
  );
}
export default Form;
