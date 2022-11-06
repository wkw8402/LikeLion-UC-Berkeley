import {
    HeaderDiv,
    TitleLogoDiv,
    TitleBig,
    TitleSmall,
    SubHeaderDiv,
  } from "./styledComponent";
  
  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
  import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
  
  function Header({ darkMode, setDarkMode }) {
    const toggleDarkMode = () => {
      setDarkMode((darkMode) => !darkMode);
    };
  
    return (
      <HeaderDiv>
        <TitleLogoDiv>
          <TitleBig>LikeLion</TitleBig>
          <TitleSmall>Post</TitleSmall>
        </TitleLogoDiv>
        <SubHeaderDiv>
          {darkMode ? (
            <div>
              <FontAwesomeIcon onClick={toggleDarkMode} icon={faSun} />
            </div>
          ) : (
            <div>
              <FontAwesomeIcon onClick={toggleDarkMode} icon={faMoon} />
            </div>
          )}
        </SubHeaderDiv>
      </HeaderDiv>
    );
  }
  
  export default Header;