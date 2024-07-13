import { useNavigate } from "react-router-dom";
import style from "./Landing.module.css";
const Landing = () => {
  const navigate = useNavigate();
  return (
    <>
    <div className={style.container}>
      <div className={style.cont}>
        <h1>WELCOME</h1>
        <button onClick={() => navigate("/home")}>HOME</button>
      </div>
    </div>
    </>
  );
};

export default Landing;
