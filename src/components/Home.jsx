import React from "react";
import HomeBanner from "./HomeBanner";
import HomeMidSection from "./HomeMidSection/HomeMidSection";
import SpeakersSideBar from "./SpeakersSideBar/SpeakersSideBar";
import RegisterNowBtn from "./RegisterNowBtn/RegisterNowBtn";
import OurMission from "./OurMission/OurMission";
import FAQ from "./FQA/FQA";

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
      <FAQ />
    </>
  );
};

export default Home;
