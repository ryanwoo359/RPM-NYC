import Content from "../content/Content.jsx";
import bodyWork from "../assets/bodywork.png";
import { useNavigate } from "react-router-dom";

export default function CarBodyWork() {
  const navigate = useNavigate();
  return (
    <>
      <Content
        image={bodyWork}
        heading="Body work"
        paragraph="Pimp out your ride!"
        btnName="Learn more"
        btnClick={() => navigate("/services#stuff")}
      />
    </>
  );
}
