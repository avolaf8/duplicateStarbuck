import { useNavigate } from "react-router-dom";
import "../assets/style/menu.scss";
export default function Box({ data }) {
  const navigate = useNavigate();
  return (
    <div className="sub__box1">
      {/* <pre>{data.categoryId}</pre> */}
      <p onClick={() => navigate(`detail/${data.id}`)} style={{ cursor: "pointer" }}>
        <img src={data.imgUrl} alt={data.name} />
        <p>{data.name}</p>
      </p>
    </div>
  );
}
