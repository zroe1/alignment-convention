import "./HomeMidSection.css";
import alignConLogo from "./cea.png";
import uchiLgo from "./uchi.png";
import ea from "./ea.png";
import bd from "./bd.png";

const HomeMidSection = () => {
  return (
    <div className="home-mid-section">
      <div className="logos-div">
        <img src={bd} className="bd-logo" alt="" />
        <img src={alignConLogo} className="mid-logo" alt="" />
        <img src={uchiLgo} className="uchi-logo" alt="" />
        <img src={ea} className="mid-logo" alt="" />
        {/* <AlignConLogo className="align-con-logo" /> */}
      </div>
    </div>
  );
};

export default HomeMidSection;
