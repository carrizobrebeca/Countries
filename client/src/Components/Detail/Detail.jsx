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
  console.log("Activities:", detail.Activities);
  return (
    <div>
      <>
        <Link to={`/home`}>
          <h2 className={style.name}>
            <button>Home</button>
          </h2>
        </Link>
      </>
      <div className={style.pageCenter}>
        <div className={style.container}>
          {detail && (
            <div>
              <h1>Details Country</h1>
              <div className={style.imgContainer}>
                <img src={detail.flags} alt="country" />
                
              </div>
              <h2>Name | {detail.name}</h2>

              <p>Capital | {detail.capital}</p>
              <p>Subregion | {detail.subregion}</p>
              <p>Area | {detail.area}</p>
              <p>Population | {detail.population}</p>

              {detail.Activities && detail.Activities.length > 0 && (
                <div>
                  <h2>Activities:</h2>
                  <div>
                    {detail.Activities.map((activity) => (
                      <div key={activity.id}>
                        <p> Name | {activity.name}</p>
                        <p> Difficulty | {activity.difficulty}</p>
                        <p>Duration | {activity.duration}</p>
                        <p>Season | {activity.season}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Detail;
