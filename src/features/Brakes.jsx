import Content from "../content/Content.jsx";
import brake from "../assets/brakecar.png";
import { useNavigate } from "react-router-dom";

export default function Brakes() {
  const navigate = useNavigate();
  return (
    <>
      <Content
        image={brake}
        heading="Need new brakes?"
        paragraph="Feel the Difference with Fresh Brakes."
        btnName="Learn more"
        btnClick={() => navigate("/services")}
      />
    </>
  );
}
