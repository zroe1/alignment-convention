import "./OurMission.css";
import TheoryOfChangeImg from "../TheoryOfChangeImg/TheoryOfChangeImg";

const OurMission = () => {
  return (
    <div className="our-mission">
      <h2 className="mission-header">Our Mission</h2>
      <hr className="mission-hr" />
      <TheoryOfChangeImg />
      <p className="theory-of-change-text">
        The mission of the Center for Effective Altruism is to build a global community of people
        who have made helping others a core part of their lives, and who use evidence and scientific
        reasoning to figure out how to do so as effectively as possible. We aim to create a world in
        which the vast majority of people consider it important to help others, and are able to do
        so in the most effective ways they can. We focus on the most pressing problems, which may
        not be the most popular or emotionally compelling, and use reason and evidence to find the
        most effective ways to address them.
      </p>
    </div>
  );
};

export default OurMission;
