// css
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../assets/style/login.scss";

export default function Login() {
  let [userInfo, setUserInfo] = useState({
    name: "",
    password: "",
  });
  let navigate = useNavigate();

  const check = (e) => {
    let { name, value } = e.target;
    setUserInfo((val) => {
      return { ...val, [name]: value };
    });
  };

  const showData = () => {
    localStorage.setItem("name", userInfo.name);
    localStorage.setItem("password", userInfo.password);
    navigate("/");
    window.location.reload(true);
  };

  return (
    <section className="sign__in">
      <div className="heading">
        <h1>Sign in or create an account</h1>
      </div>
      <div className="box1">
        <p>* indicates required field</p>
        <form>
          <input
            type="text"
            placeholder="* Username or email address"
            name="name"
            onChange={check}
          />
          <input
            type="password"
            placeholder="* Password"
            name="password"
            onChange={check}
          />
        </form>
        <div className="checked">
          <input type="checkbox" />
          <p>
            Keep me signed in.
            <span
              style={{
                color: "#005638",
                fontWeight: "600",
                cursor: "pointer",
                textDecoration: "underline",
              }}
            >
              Details
            </span>
          </p>
        </div>
        <div className="option">
          <p>Forgot your username?</p>
          <p>Forgot your password?</p>
        </div>

        <div className="button1">
          <button onClick={showData}>Sign in</button>
        </div>
      </div>

      <div className="messageBox">
        <h4>JOIN STARBUCKS® REWARDS</h4>
        <p>
          Join Starbucks® Rewards to earn free food and drinks, get free
          refills, pay and order with your phone, and more.
        </p>
        <button>Join now</button>
      </div>
    </section>
  );
}
