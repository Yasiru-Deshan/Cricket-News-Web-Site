import React from "react";
import "./news.css";

const News = () => {
  return (
    <div className="NewsContainer">
      <div className="NewsWrapper">
        <div className="NewsRow" data-aos="fade-up">
          <div className="Column1">
            <div className="TextWrapper">
              <p className="TopLine">England v India ODIs - Men</p>
              <p className="Heading">
                ICC ටෙස්ට් ශ්‍රේණිගත කිරීම්වල ශ්‍රි ලංකා ක්‍රීඩකයින් ඉදිරියට
              </p>
              <p className="Description">
                ඒ අනුව දිමුත් කරුණාරත්න 7 වෙනි ස්ථානයටත් , ඇන්ජලෝ මැතිව්ස් 14
                වෙනි ස්ථානයටත්, සුපිරි ද්විත්ව ශතකයක් රැස් කල දිනේෂ් චන්දිමාල්
                29 වෙනි ස්ථානය, දක්වා ඉදිරියට පැමීණීමට සමත් වී ඇත.{" "}
              </p>
              <div className="BtnWrap">
                <button className="ButtonView">View More</button>
              </div>
            </div>
          </div>
          <div className="Column2">
            <div className="ImgWrap">
              <img
                className="Img"
                src="https://www.cricket.com.au/~/-/media/News/2022/07/15ReeceTopley.ashx?w=1600"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
