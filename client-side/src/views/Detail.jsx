import { fetchFromDetailFood } from "../store/actions/actionCreator";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import "../assets/style/detail.scss";

export default function Detail() {
  const { id } = useParams();
  const { pending, food, error } = useSelector((state) => state.detail);
  const dispatch = useDispatch();
  useEffect(() => {
    return async () => {
      await dispatch(fetchFromDetailFood(id));
    };
  }, []);
  if (pending) {
    return (
      <section>
        <h1 className="animate-pulse text-red-400 text-3xl">Loading ...</h1>
      </section>
    );
  }
  // {JSON.stringify(food.Ingredients)}
  // food.Ingredients.forEach(element => {
  //   element.name
  // });
  return (
    <section className="detail">
      <div className="subnav">
        <nav>
          <ul>
            <li>
              Menu / {food.name} / {food.Category.name}
            </li>
          </ul>
        </nav>
      </div>

      <div className="label1">
        <div className="left__side">
          <div className="boxes">
            <div className="sub__box1">
              <img src={food.imgUrl} alt="image not found" />
            </div>
          </div>
        </div>
        <div className="right__side">
          <div className="content">
            <p>
              {/* {food.Category.map((category, index) => (
                <span key={index}>
                  {category.name}
                </span>
              ))} */}
              {food.description}*<h4>Rp{food.price}</h4>
            </p>
            <p>
              {" "}
              Ingredients:
              {food.Ingredients.map((ingredient, index) => (
                <h3 key={index}>{ingredient.name}</h3>
              ))}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
