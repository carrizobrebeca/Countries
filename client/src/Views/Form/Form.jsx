import React from "react";
import style from './form.module.css';
const Form = () => {
  return (
    <div className={style.container}>
      <form>
        <div className={style.inputContainer}>
          <label htmlFor="">ID |</label>
          <input type="text" name="id" placeholder="id" />
        </div>

        <div className={style.inputContainer}>
          <label htmlFor="">FORENAME |</label>
          <input type="text" name="forename" placeholder="forename" />
        </div>

        <div className={style.inputContainer}>
          <label htmlFor="">SURNAME |</label>
          <input
            type="text"
            name="surname"
            placeholder="surname"
            />
        </div>

        <div className={style.inputContainer}>
          <label htmlFor="">NATIONALITY |</label>
          <input
            type="text"
            name="nationality"
            placeholder="nationality"
            />
        </div>

        <div className={style.inputContainer}>
          <label htmlFor="">IMAGE |</label>
          <input
            type="text"
            name="image"
            placeholder="image"
            />
        </div>

        <div className={style.inputContainer}>
          <label htmlFor="">DESCRIPTION |</label>
          <input
            type="text"
            name="desccription"
            placeholder="desccription"
            />
        </div>

        <div className={style.inputContainer}>
          <label htmlFor="">DATE OF BORN |</label>
          <input
            type="text"
            name="dateOfBorn"
            placeholder="1999-12-31"
            />
        </div>

        <div className={style.inputContainer}>
          <label htmlFor="">TEAM |</label>
          <input
            type="text"
            name="team"
            placeholder="team"
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
