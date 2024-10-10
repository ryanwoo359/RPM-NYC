import { useNavigate } from "react-router-dom";
import "./Home.css";
import Button from "../../components/button/Button.jsx";
import RPM from "../../assets/RPM white.png";
import GTR from "../../assets/GTR drive.mp4";
import Brakes from "../../features/Brakes";
import CarBodyWork from "../../features/CarBodyWork";
import Commitments from "../../components/commitments/Commitments.jsx";

export default function Home() {
  const navigate = useNavigate();
  return (
    <main>
      <div className="landing-section">
        <div className="content">
          <img className="rpmlogo" src={RPM} alt="RPM Logo" />
          <h2>New York's Premier Automotive Specialists.</h2>
          <Button
            name="Explore Our Services"
            click={() => navigate("/services")}
          />
        </div>
        <div className="vid-background">
          <video autoPlay muted loop playsInline className="background-video">
            <source src={GTR} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
      <div className="service-Container">
        <Brakes />
        <CarBodyWork />
      </div>
      <h2 style={{ textAlign: "center" }}>What makes RPM different</h2>
      <Commitments />
    </main>
  );
}
