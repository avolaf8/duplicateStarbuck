import "../assets/style/home.scss";

export default function Home() {
  return (
    <section className="home">
      <div className="label1">
        <div className="left__side">
          <img src="./images/img1.jpg" alt="image not found" />
        </div>
        <div className="right__side">
          <div className="content">
            <h1>Spring in your step, Rewards in your cup</h1>
            <p>Shake up your usual and start earning Rewards —join today!*</p>
            <a>
              <button>Join now</button>
            </a>
          </div>
        </div>
      </div>

      <div className="label2">
        <div className="left__side">
          <div className="content">
            <h1>Uplifting anytime</h1>
            <p>
              Recharge with a lively Brown Sugar Oatmilk or Toasted Vanilla
              Oatmilk Shaken Espresso—140 calories or less in a grande.
            </p>
            <a>
              <button>Order now</button>
            </a>
          </div>
        </div>
        <div className="right__side">
          <img src="./images/img3.jpg" alt="image bot found" />
        </div>
      </div>

      <div className="label3">
        <div className="right__side">
          <img src="./images/img4.jpg" alt="image bot found" />
        </div>
        <div className="left__side">
          <div className="content">
            <h1>Oh, so vibrant</h1>
            <p>
              Dive into our bold, fruity and refreshing Dragon Drink® with
              coconutmilk.
            </p>
            <a>
              <button>Order now</button>
            </a>
          </div>
        </div>
      </div>

      <div className="label4">
        <div className="left__side">
          <div className="content">
            <h1>Savory and satisfying</h1>
            <p>
              The Impossible™ Breakfast Sandwich, featuring an Impossible™
              Sausage Patty Made From Plants, is always a great choice.**
            </p>
            <a>
              <button>Order now</button>
            </a>
          </div>
        </div>
        <div className="right__side">
          <img src="./images/img5.jpg" alt="image bot found" />
        </div>
      </div>
    </section>
  );
}
