import { useState, useReducer, useEffect } from "react";
import "./filter.scss";

function reducerSeason(state, action) {
  switch (action.type) {
    case "Зима":
      return "Зима";
    case "Осень/Весна":
      return "Осень/Весна";
    case "Лето":
      return "Лето";
    default:
      return "";
  }
}
function reducerSize(state, action) {
  switch (action.type) {
    case "S":
      return "S";
    case "M":
      return "M";
    case "L":
      return "L";
    case "XL":
      return "XL";
    default:
      return "";
  }
}

const Filter = (props) => {
  const [isfilter, setIsFilter] = useState(false);
  const [season, dispatchSeason] = useReducer(reducerSeason, "");
  const [size, dispatchSize] = useReducer(reducerSize, "");
  useEffect(() => {
    props.onChangeFilter(season, size);
  }, [season, size]);

  useEffect(() => {
    switch (props.season) {
      case "winter":
        dispatchSeason({ type: "Зима" });
        break;
      case "summer":
        dispatchSeason({ type: "Лето" });
        break;
      case "autumn":
        dispatchSeason({ type: "Осень/Весна" });
        break;
      default:
        dispatchSeason({ type: "" });
    }
  }, []);
  const iconClass = isfilter
    ? "icon icon__arrow icon__rotate"
    : "icon icon__arrow";

  const showFilters = isfilter ? "filter__content show" : "filter__content";
  return (
    <div className="filter">
      <button
        className="filter__trigger"
        onClick={() => {
          setIsFilter((isfilter) => !isfilter);
        }}
      >
        Фильтры
        <svg className={iconClass}>
          <use xlinkHref="../../images/allsvg.svg#select-arrow"></use>
        </svg>
      </button>
      <div className={showFilters}>
        <h3 className="filter__title">Сезон:</h3>
        <ul className="filter__list">
          <li className="filter__list-item">
            <button
              className={`${season === "Зима" ? "active" : null} filter__btn`}
              onClick={() => {
                dispatchSeason({ type: "Зима" });
              }}
            >
              Зима
            </button>
          </li>
          <li className="filter__list-item">
            <button
              className={`${
                season === "Осень/Весна" ? "active" : null
              } filter__btn`}
              onClick={() => {
                dispatchSeason({ type: "Осень/Весна" });
              }}
            >
              Осень/Весна
            </button>
          </li>
          <li className="filter__list-item">
            <button
              className={`${season === "Лето" ? "active" : null} filter__btn`}
              onClick={() => {
                dispatchSeason({ type: "Лето" });
              }}
            >
              Лето
            </button>
          </li>
        </ul>
        <h3 className="filter__title">Размер:</h3>
        <ul className="filter__list">
          <li className="filter__list-item">
            <button
              className={`${size === "S" ? "active" : null} filter__btn`}
              onClick={() => {
                dispatchSize({ type: "S" });
              }}
            >
              42-46
            </button>
          </li>
          <li className="filter__list-item">
            <button
              className={`${size === "M" ? "active" : null} filter__btn`}
              onClick={() => {
                dispatchSize({ type: "M" });
              }}
            >
              48-50
            </button>
          </li>
          <li className="filter__list-item">
            <button
              className={`${size === "L" ? "active" : null} filter__btn`}
              onClick={() => {
                dispatchSize({ type: "L" });
              }}
            >
              52-54
            </button>
          </li>
          <li className="filter__list-item">
            <button
              className={`${size === "XL" ? "active" : null} filter__btn`}
              onClick={() => {
                dispatchSize({ type: "XL" });
              }}
            >
              54-56
            </button>
          </li>
        </ul>
        <button
          className="filter__btn"
          onClick={() => {
            dispatchSize({ type: "" });
            dispatchSeason({ type: "" });
          }}
        >
          Сбросить
        </button>
      </div>
    </div>
  );
};
export default Filter;
