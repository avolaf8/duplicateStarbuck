import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchFromFood } from "../store/actions/actionCreator";
import "../assets/style/menu.scss";
import Box from "../components/Box";

export default function Landing() {
  const { pending, foods, error } = useSelector((state) => state.food);
  const dispatch = useDispatch();
  useEffect(() => {
    return async () => {
      await dispatch(fetchFromFood());
    };
  }, []);

  if (pending) {
    return (
      <section>
        <h1 className="animate-pulse text-red-400 text-3xl">Loading ...</h1>
      </section>
    );
  }
  return (
    <section className="menu">
      <div className="subnav">
        <nav>
          <ul>
            <li>
              All products
            </li>
            <li>
              Featured
            </li>
            <li>
              Previous Orders
            </li>
            <li>
              Favorite Products
            </li>
          </ul>
        </nav>
      </div>

      <div className="all__menu">
        <div className="left__side">
        <h2>Category</h2>
        <p>
          Hot Coffees <br />
          Hot Teas <br />
          Hot Drinks
        </p>
          {/* {name.map((value, index) => {
            return (
              <div key={index}>
                <h3>{value.name}</h3>

                {value.category}
                </p>
              </div>
            );
          })} */}
        </div>
        <div className="right__side">
          <div className="box1">
            <div className="heading">
              <h1>All Items</h1>
              <p>
                All category item is here it's main branch where all types of
                items is precentage.
              </p>
            </div>
            <div className="boxes">
              {foods.map((data) => {
                return <Box key={data.id} data={data} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
