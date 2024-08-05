import "../Subpage.css";
import FAQ from "../FQA/FQA";

const About = () => {
  return (
    <div className="sub-page-container">
      <h2>About AlignCon</h2>
      <div className="sub-page-text-container">
        <p className="sub-page-text">
          AlignCon is a conference that brings together experts in artificial intelligence, machine
          learning, and data science to discuss the future of technology. Our goal is to create a
          space where professionals can share their knowledge and collaborate on innovative
          projects. We believe that by working together, we can build a better future for everyone.
          Join us at AlignCon to learn from the best and help shape the future of technology. More
          text here...
        </p>
      </div>
      <FAQ />
    </div>
  );
};

export default About;
