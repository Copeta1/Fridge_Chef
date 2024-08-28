import { useNavigate } from "react-router-dom";
import "./button.css";

export default function Button({ text, to }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(to);
  };

  return (
    <div className="btn" onClick={handleClick}>
      {text}
    </div>
  );
}
