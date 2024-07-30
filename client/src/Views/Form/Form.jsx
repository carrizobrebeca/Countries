import React, { useEffect, useState } from "react";
import style from "./form.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  getActivity,
  getCountries,
  postActivity,
} from "../../Redux/Actions/actions";

const Form = () => {
  const dispatch = useDispatch();

  
    
  const optionSeason = ["Season", "Verano", "Otoño", "Invierno", "Primavera"];
  const optionDifficulty = ["Difficulty","1", "2", "3", "4", "5"];
  const allCountries = useSelector((state) => state.allCountries);

 

  //cuando el componente se monta me trae la propiedad ID de Country
  useEffect(() => {
    dispatch(getActivity());
    dispatch(getCountries());
  }, []);

  const [state, setState] = useState({
    name: "",
    difficulty: "",
    duration: "",
    season: "",
    countryId: "",
  });

  const [errors, setErrors] = useState({
    name: "Name cannot be empty",
    difficulty: "Select a Difficulty",
    duration: "Duration cannot be empty",
    season: "Select a season",
    countryId: "Select Country Id",
  });

  //Validaciones para cada input
  const validate = (state, name) => {
    if (name === "name") {
      if (state.name === "")
        setErrors({ ...errors, name: "Name cannot be empty" });
      else if (state.name.length >= 30)
        setErrors({ ...errors, name: "Name is long" });
      else {
        setErrors({ ...errors, name: "" });
        return;
      }
    }
    if (name === "difficulty") {
      if (state.difficulty === "" || state.difficulty === "Difficulty")
        setErrors({ ...errors, difficulty: "Select a Difficulty" });
      else {
        setErrors({ ...errors, difficulty: "" });
        return;
      }
    }
    if (name === "duration") {
      if (state.duration === "")
        setErrors({ ...errors, duration: "Duration cannot be empty." });
      else {
        setErrors({ ...errors, duration: "" });
        return;
      }
    }
    if (name === "season") {
      if (state.season === "" || state.season === "Season")
        setErrors({ ...errors, season: "Select a Season" });
      else {
        setErrors({ ...errors, season: "" });
        return;
      }
    }
    if (name === "countryId") {
      if (state.countryId === "")
        setErrors({ ...errors, countryId: "Select Country Id" });
      else {
        setErrors({ ...errors, countryId: "" });
        return;
      }
    }
  };

  //modificar los estados
  const handleChange = (e) => {
    e.preventDefault();
    
    // Obtenemos el nombre y el valor del elemento que cambió
  const { name, value, type, options, selectedIndex, selectedOptions } = e.target;

  // Manejo de input simple (name, duration)
  if (type === 'text' || type === 'number') {
    setState({
      ...state,
      [name]: value,
    });
  }

  // Manejo de selectores simples (difficulty, season)
  if (type === 'select-one') {
    setState({
      ...state,
      [name]: value,
    });
  }

  // Manejo de selectores múltiples (countryId)
  if (type === 'select-multiple') {
    const selectedCountries = Array.from(selectedOptions, option => option.value);
    setState({
      ...state,
      [name]: selectedCountries,
    });
  }

    //re-rendering react
    validate(
      {
        ...state,
        [e.target.name]: e.target.value,
      },
      e.target.name
    );
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(postActivity(state));
  };

  
  console.log(state);
  return (
    <div className={style.container}>
      <form onSubmit={handleSubmit}>
        <div className={style.inputContainer}>
          <label>NAME |</label>
          <input onChange={handleChange} name="name" id="name" />
          <label className={style.form_error}>{errors.name}</label>
        </div>

        <div className={style.inputContainer}>
          <label>DIFFICULTY |</label>
          <select onChange={handleChange} name="difficulty" id="difficulty">
            {optionDifficulty.map((opc) => (
              <option key={opc} value={opc}>
                {opc}
              </option>
            ))}
          </select>
          <label className={style.form_error}>{errors.difficulty}</label>
        </div>

        <div className={style.inputContainer}>
          <label>DURATION |</label>
          <input onChange={handleChange} name="duration" id="duration" />
          <label className={style.form_error}>{errors.duration}</label>
        </div>

        <div className={style.inputContainer}>
          <label>SEASON |</label>
          <select onChange={handleChange} name="season" id="season">
            {optionSeason.map((opc) => (
              <option key={opc} value={opc}>
                {opc}
              </option>
            ))}
          </select>
          <label className={style.form_error}>{errors.season}</label>
        </div>

        <div className={style.inputContainer}>
          <label>COUNTRY ID |</label>
          <select onChange={handleChange} name="countryId" id="countryId">
            {allCountries.map((c) => (
              <option key={c.id} value={c.id}>{c.id}</option>
            ))}
          </select>
          <label className={style.form_error}>{errors.countryId}</label>
          <div className={style.id}>{state.countryId}</div>
        </div>

        <div className={style.buttonContainer}>
          <button className={style.btton} type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;


