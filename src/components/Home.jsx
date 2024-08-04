import React from "react";
import HomeBanner from "./HomeBanner";
import HomeMidSection from "./HomeMidSection/HomeMidSection";
import SpeakersSideBar from "./SpeakersSideBar/SpeakersSideBar";
import RegisterNowBtn from "./RegisterNowBtn/RegisterNowBtn";
import OurMission from "./OurMission/OurMission";

const Home = () => {
  return (
    <>
      <HomeBanner />
      <HomeMidSection />
      <RegisterNowBtn />
      <div className="home-body-section">
        <SpeakersSideBar />
        <OurMission />
      </div>
    </>
  );
};

export default Home;
