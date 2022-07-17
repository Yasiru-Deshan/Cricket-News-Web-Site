import React, { useEffect } from "react";
import "./news.css";
import Aos from "aos";
import "aos/dist/aos.css";

const HeadNews = () => {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  return (
    <div className="HeadNewsContainer">
      <div className="NewsWrapper">
        <div className="NewsRow" data-aos="fade-up">
          <div className="Column2">
            <div className="TextWrapper">
              <p className="TopLine">KFC BBL|12</p>
              <p className="HeadHeading">
                Full BBL schedule confirms window for Test stars{" "}
              </p>
              <p className="HeadDescription">
                Check out the three new Big Bash venues and what this summer's
                BBL fixture means for the availability of Australia's Test
                players
              </p>
              <div className="BtnWrap">
                <button className="HeadButtonView">View More</button>
              </div>
            </div>
          </div>
          <div className="Column1">
            <div className="ImgWrap">
              <img
                className="Img"
                src="https://www.cricket.com.au/~/-/media/News/2022/07/14bblschedulemulti.ashx?w=1600"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeadNews;
