import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getDetail } from "../../Redux/Actions/actions";
import style from "./detail.module.css";

const Detail = () => {
  let { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDetail(id));
    // return () => {
    //   dispatch(clearDetail());
    // };
  }, [dispatch, id]);

  const detail = useSelector((state) => state.detail);
console.log(detail);
  return (
    <div className={style.pageCenter}>
      <div>
        <Link to={`/home`}>
          <h2 className={style.name}>
            <button>Home</button>
          </h2>
        </Link>

        <div className={style.container}></div>
        
        {detail && (
          <div>
            <div className={style.container}></div>
            <h1>Details Country</h1>
           
            <p>Capital | {detail.capital}</p>
            <p>Subregion | {detail.subregion}</p>
            <p>Area | {detail.area}</p>
            <p>Population | {detail.population}</p>
            <div className={style.imgContainer}>
               <img src={detail.flags} alt="country" />
               <h2>Name | {detail.name}</h2>
            </div>
            {detail.activities && detail.activities.length > 0 && (
              <div className={style.activities}>
                <h2>Activities:</h2>
                <ul>
                  {detail.activities.map((activity) => (
                    <li key={activity.id}>
                      {activity.name} - Difficulty: {activity.difficulty}, Duration: {activity.duration}, Season: {activity.season}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}
      </div>

      {/* <div > */}

      {/* <img src={detail.flags} alt="country" />

          <h2 className={style.name}>Name | {detail.name}</h2>
        </div>
        <div className={style.description}>
          <h2>
            Continents | <span>{detail.continents}</span>
          </h2>
          <h2>
            Capital | <span>{detail.capital}</span>
          </h2>
          <h2>
            Subregion | <span>{detail.subregion}</span>
          </h2>
          <h2>
            Area | <span>{detail.area}</span>
          </h2>
          <h2>
            Population | <span>{detail.population}</span>
          </h2> */}

      {/* <h2>
            Activities |{" "}
            <span>
              {detail.activities.map((activity) => (
                <span key={activity.id}>{activity.name}</span>
              ))}
            </span>
          </h2> */}
    </div>
  );
};

export default Detail;