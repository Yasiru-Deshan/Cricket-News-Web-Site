import React,{ useEffect} from 'react';
import {
         ServicesH1,
         ServicesH2,
         ServicesContainer,
         ServicesWrapper,
         ServicesCard,
         ServicesIcon,
         Servicesp,
         ServicesIconWrapper
} from './ServiceElements';
import Aos from 'aos';
import "aos/dist/aos.css";

const Services = () => {

    useEffect(()=>{
        Aos.init({duration: 1500 });
    },[])

    return (
      <ServicesContainer id="services">
        <ServicesH1>Latest News</ServicesH1>
        <ServicesWrapper>
          <ServicesCard data-aos="fade-up">
            <ServicesIconWrapper>
              <ServicesIcon src="https://www.cricket.com.au/~/-/media/News/2022/07/14bblschedulemulti.ashx?w=1600" />
            </ServicesIconWrapper>{" "}
            <ServicesH2>KFC BBL|12</ServicesH2>
            <Servicesp>
              {" "}
              Check out the three new Big Bash venues and what this summer's BBL
              fixture means for the availability of
              {/* <a>
                &#8250;
              </a> */}
            </Servicesp>
          </ServicesCard>

          <ServicesCard data-aos="fade-up">
            <ServicesIconWrapper>
              <ServicesIcon src="https://www.cricket.com.au/~/-/media/News/2022/07/15ReeceTopley.ashx?w=1600" />
            </ServicesIconWrapper>{" "}
            <ServicesH2>ENGLAND V INDIA ODIS - MEN</ServicesH2>
            <Servicesp>
              {" "}
              ICC ටෙස්ට් ශ්‍රේණිගත කිරීම්වල ශ්‍රි ලංකා ක්‍රීඩකයින් ඉදිරියට
            </Servicesp>
          </ServicesCard>

          <ServicesCard data-aos="fade-up">
            <ServicesIconWrapper>
              <ServicesIcon src="https://www.cricket.com.au/~/-/media/News/2022/07/12chanimalcelebrates.ashx?w=1600" />
            </ServicesIconWrapper>{" "}
            <ServicesH2>SL v Aus Tests - Men</ServicesH2>
            <Servicesp>
              {" "}
              Dinesh Chandimal's career looked close to over when he last played
              a Test series against Australia. Three years on..
            </Servicesp>
          </ServicesCard>
          <ServicesCard data-aos="fade-up">
            <ServicesIconWrapper>
              <ServicesIcon src="https://www.cricket.com.au/~/-/media/News/2022/07/13scorchers-bbl11.ashx?w=1600" />
            </ServicesIconWrapper>{" "}
            <ServicesH2>BBL expands its borders for 12th season</ServicesH2>
            <Servicesp>
              {" "}
              A sneak peak of this season's fixture reveals Albury will host its
              first competitive men's..
            </Servicesp>
          </ServicesCard>
        </ServicesWrapper>
      </ServicesContainer>
    );
}

export default Services
