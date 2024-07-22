import React from "react";
import style from './form.module.css';
const Form = () => {
  return (
    <div className={style.container}>
      <form>

        <div className={style.inputContainer}>
          <label htmlFor="">NAME |</label>
          <input type="text" name="nombre" placeholder="nombre" />
        </div>

        <div className={style.inputContainer}>
          <label htmlFor="">DIFICULTAD |</label>
          <input
            type="text"
            name="dificultad"
            placeholder="dificultad"
            />
        </div>

        <div className={style.inputContainer}>
          <label htmlFor="">DURACION |</label>
          <input
            type="text"
            name="duracion"
            placeholder="duracion"
            />
        </div>

        <div className={style.inputContainer}>
          <label htmlFor="">TEMPORADA |</label>
          <input
            type="text"
            name="temporada"
            placeholder="temporada"
            />
        </div>

        <div className={style.buttonContainer}>
          <button className={style.btton} type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Form;
