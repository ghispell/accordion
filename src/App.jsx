import { useState } from "react";
import "./App.css";
import etoile from "./assets/images/icon-star.svg";
import Icon from "./components/Icon";

function App() {
  const [par1, setPar1] = useState(false);
  const [par2, setPar2] = useState(false);
  const [par3, setPar3] = useState(false);
  const [par4, setPar4] = useState(false);

  return (
    <div>
      <div className="top-background" />
      <div className="container">
        <div className="faq">
          <div className="top-title">
            <img src={etoile} alt="etoile" />
            <h1>FAQs</h1>
          </div>
          <div className="h2-title">
            <h2>What is Frontend Mentor, and how will it help me?</h2>
            <Icon setter={setPar1} />
          </div>
          {par1 ? (
            <p>
              Frontend Mentor offers realistic coding challenges to help
              developers improve their frontend coding skills with projects in
              HTML, CSS, and JavaScript. It's suitable for all levels and ideal
              for portfolio building.
            </p>
          ) : (
            ""
          )}

          <div className="trait" />
          <div className="h2-title">
            <h2>Is Frontend Mentor free?</h2>
            <Icon setter={setPar2} />
          </div>
          {par2 ? (
            <p>
              Yes, Frontend Mentor offers both free and premium coding
              challenges, with the free option providing access to a range of
              projects suitable for all skill levels.
            </p>
          ) : (
            ""
          )}

          <div className="trait" />
          <div className="h2-title">
            <h2>Can I use Frontend Mentor projects in my portfolio?</h2>
            <Icon setter={setPar3} />
          </div>
          {par3 ? (
            <p>
              Yes, you can use projects completed on Frontend Mentor in your
              portfolio. It's an excellent way to showcase your skills to
              potential employers!
            </p>
          ) : (
            ""
          )}

          <div className="trait" />
          <div className="h2-title">
            <h2>
              {" "}
              How can I get help if I'm stuck on a Frontend Mentor challenge?
            </h2>
            <Icon setter={setPar4} />
          </div>
          {par4 ? (
            <p>
              {" "}
              The best place to get help is inside Frontend Mentor's Discord
              community. There's a help channel where you can ask questions and
              seek support from other community members.
            </p>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
