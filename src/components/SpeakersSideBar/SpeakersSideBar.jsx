import React, { useEffect, useRef } from "react";
import "./SpeakersSideBar.css";

const SpeakersSideBar = () => {
  const observerRef = useRef(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fade-in");
          } else {
            entry.target.classList.remove("fade-in");
          }
        });
      },
      { threshold: 0.1 }
    );

    const speakers = document.querySelectorAll(".speaker-container");
    speakers.forEach((speaker) => {
      observerRef.current.observe(speaker);
    });

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  return (
    <div className="speakers-sidebar">
      <div className="speaker-container">
        <h3 className="speaker-mobile">Jialing Jiao</h3>
        <div className="speaker-img-container">
          <img className="speaker-img" src="/speaker1.jpeg" alt="speaker" />
        </div>
        <div>
          <h3 className="speaker">Jialing Jiao</h3>
          <p className="speaker-bio">
            TLDR: Even in worlds where we create an unaligned AGI, it will cooperate acausally with
            counterfactual FAIs—and spend some percentage of its resources pursuing human values—as
            long as its utility function is concave in resources spent. The amount of resources UAI
            spends on humans will be roughly proportional to the measure of worlds with aligned AGI,
            so this does not change the fact that we should be working on alignment.
          </p>
        </div>
      </div>
      <div className="speaker-container">
        <h3 className="speaker-mobile">Avik Garg</h3>
        <div className="speaker-img-container">
          <img className="speaker-img" src="/speaker2.jpeg" alt="speaker" />
        </div>
        <div>
          <h3 className="speaker">Avik Garg</h3>
          <p className="speaker-bio">
            Our utility function is concave in resources spent; e.g. we would prefer a 100% chance
            of 50% of the universe turning into utopia to a 50% chance of 100% of the universe
            turning into utopia, assuming that the rest of the universe is going to be filled with
            something we don't really care about, like paperclips.
          </p>
        </div>
      </div>
      <div className="speaker-container">
        <h3 className="speaker-mobile">Lil Wayne</h3>
        <div className="speaker-img-container">
          <img className="speaker-img" src="/speaker3.png" alt="speaker" />
        </div>
        <div>
          <h3 className="speaker">Lil Wayne</h3>
          <p className="speaker-bio">
            Let's say two agents, Alice and Bob, have utilities that are concave in money. Let's say
            for concreteness that each agent's utility is the logarithm of their bank account
            balance, and they each start with $10. They are playing a game where a fair coin is
            flipped. If it lands heads, Alice gets $10, and if it lands tails, Bob gets $10. Each
            agent's expected utility here is
          </p>
        </div>
      </div>
    </div>
  );
};

export default SpeakersSideBar;
