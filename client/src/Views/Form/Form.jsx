import React, { useEffect, useState } from "react";
import style from "./form.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getActivity, postActivity } from "../../Redux/Actions/actions";

const Form = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getActivity());
  }, []);

  const activities = useSelector((state) => state.activities);
  const [state, setState] = useState({
    name: "",
    difficulty: "",
    duration: "",
    season: "",
    countries: [],
  });
  const [errors, setErrors] = useState({
    name: "Name cannot be empty",
    difficulty: "",
    duration: "Duration cannot be empty",
    season: "",
    countries: "",
  });

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
    }
    if (name === "duration") {
    }
    if (name === "season") {
    }
    if (name === "countries") {
      if (state.countries === "")
        setErrors({ ...errors, countries: "Countries cannot be empty" });
      else {
        setErrors({ ...errors, countries: "" });
        return;
      }
    }
  };

  const handleChange=(e)=>{
    e.preventDefault();
    if(e.target.name==="difficulty"){
      if(state.difficulty.includes(e.target.value)) return
      setState({
        ...state,
        [e.target.name]: [...state[e.target.name], e.target.value]
      })

    // if(e.target.name==="season"){
    //     if(state.season.includes(e.target.value)) return
    //     setState({
    //       ...state,
    //       [e.target.name]: [...state[e.target.name], e.target.value]
    //     })
    // if(e.target.name==="countries"){
    //   if(state.season.includes(e.target.value)) return
    //   setState({
    //     ...state,
    //     [e.target.name]: [...state[e.target.name], e.target.value]
    //   })
      // traer el valor dentro del input
    }else if(e.target.name==="season" || e.target.name==="season"){

    }
  }
  const handleSubmit =(e)=> {
    e.preventDefault();
    dispatch(postActivity(state))
  }
  return (
    <div className={style.container}>
      <form>
        <div className={style.inputContainer}>
          <label htmlFor="">NAME |</label>
          <input type="text" name="name" placeholder="name" />
        </div>

        <div className={style.inputContainer}>
          <label htmlFor="">DIFFICULTY |</label>
          <input type="text" name="difficulty" placeholder="difficulty" />
        </div>

        <div className={style.inputContainer}>
          <label htmlFor="">DURATION |</label>
          <input type="text" name="duration" placeholder="duration" />
        </div>

        <div className={style.inputContainer}>
          <label htmlFor="">SEASON |</label>
          <input type="text" name="season" placeholder="season" />
        </div>

        <div className={style.inputContainer}>
          <label htmlFor="">COUNTRY ID |</label>
          <input type="text" name="countryId" placeholder="country id" />
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
