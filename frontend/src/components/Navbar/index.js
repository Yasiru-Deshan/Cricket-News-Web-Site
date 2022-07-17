import React, { useState, useEffect} from 'react';
import {FaBars} from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { Link } from 'react-router-dom';
import { animateScroll as scroll } from 'react-scroll';
import { Nav,
         NavbarContainer, 
         NavLogo,
         MobileIcon, 
         NavMenu, 
         NavItem, 
         NavLinks,
         NavBtnLink
        } from './NavbarElements'; 
     

const Navbar = ({ toggle}) => {

    const [scrollNav,setScrollNav] = useState(false)

    const changeNav = ()=>{
       if(window.scrollY >= 80) {
           setScrollNav(true)
       }else{
           setScrollNav(false)
       }
    }

    useEffect(() => {
        window.addEventListener('scroll',changeNav)
    }, [])

    const toggleHome = () =>{
        scroll.scrollToTop();
    }

    return (
      <>
        <IconContext.Provider value={{ color: "#fff" }}>
          <Nav scrollNav={scrollNav}>
            <NavbarContainer>
              <NavLogo to="/" onClick={toggleHome}>
                {/* <Img src={logo} alt=""/>  */}
                LoftCricket
              </NavLogo>

              <MobileIcon onClick={toggle}>
                <FaBars />
              </MobileIcon>

              <NavMenu>
                <NavItem>
                  <NavLinks
                    id="navbarScrollingDropdown"
                    to="news"
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact="true"
                    offset={-80}
                  >
                    News
                  </NavLinks>
                </NavItem>

                <NavItem>
                  <NavLinks
                    to="fixtures"
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact="true"
                    offset={-80}
                  >
                    Fixtures
                  </NavLinks>
                </NavItem>
                <NavItem>
                  <NavLinks
                    to="teams"
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact="true"
                    offset={-80}
                  >
                    Teams
                  </NavLinks>
                </NavItem>

                <NavItem>
                  <NavLinks
                    to="rankings"
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact="true"
                    offset={-80}
                  >
                    Rankings
                  </NavLinks>
                </NavItem>

                {/* <li className="nav-item dropdown">
                  <div
                    className="nav-link dropdown-toggle"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    style={{ color: "white" }}
                  >
                    Matches
                  </div>

                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <li>
                      <p>Live</p>
                    </li>

                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <p>Today</p>
                    </li>
                  </ul>
                </li> */}
              </NavMenu>
            </NavbarContainer>
          </Nav>
        </IconContext.Provider>
      </>
    );
};

export default Navbar;
