import "./App.css";
import HomeBanner from "./components/HomeBanner";
import Header from "./components/Header/Header";
import HomeMidSection from "./components/HomeMidSection/HomeMidSection";
import SpeakersSideBar from "./components/SpeakersSideBar/SpeakersSideBar";
import RegisterNowBtn from "./components/RegisterNowBtn/RegisterNowBtn";
import OurMission from "./components/OurMission/OurMission";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <HomeBanner />
      <HomeMidSection />
      <RegisterNowBtn />
      <div className="home-body-section">
        <SpeakersSideBar />
        <OurMission />
      </div>

      <Footer />
    </div>
  );
}

export default App;
