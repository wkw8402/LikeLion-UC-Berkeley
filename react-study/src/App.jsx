import {
  EachPostLi,
  Footer,
  FooterBig,
  FooterSmall,
  Header,
  LoadingDiv,
  LoadingImg,
  Main,
  MediaDiv,
  PagenumberDiv,
  PagingSection,
  PostLink,
  PostListDiv,
  PostRepl,
  PostSection,
  PostTitle,
  PostTitleDiv,
  SlogunBig,
  SlogunSection,
  SlogunSmall,
  SubHeaderDiv,
  TitleBig,
  TitleLogoDiv,
  TitleSmall,
} from "./styledComponent";

// yarn add @fortawesome/free-solid-svg-icons @fortawesome/react-fontawesome @fortawesome/fontawesome-svg-core @fortawesome/free-brands-svg-icons
import {
  faSun,
  faMoon,
  faArrowsRotate,
  faPenToSquare,
  faLocationPin,
  faArrowLeft,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact } from "@fortawesome/free-brands-svg-icons";
import { darkTheme, GlobalStyles, lightTheme } from './styles';
import { ThemeProvider } from 'styled-components';
import loadingIcon from "./loading.svg";

function App() {
  const darkMode = true;
  const loading = false;
  const isPost = false;
  return (
  <>
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <GlobalStyles />
      <MediaDiv>
        <Header>
          <TitleLogoDiv>
            <TitleBig>LikeLion</TitleBig>
            <TitleSmall>Post</TitleSmall>
          </TitleLogoDiv>
          <SubHeaderDiv>
            {darkMode ? (
              <div>
                <FontAwesomeIcon icon={faSun} />
              </div>
            ) : ( 
              <div>
                <FontAwesomeIcon icon={faMoon} />
              </div>
            )}
          </SubHeaderDiv>
        </Header>
        <Main>
          <SlogunSection>
            <SlogunBig>HACK YOUR LIFE</SlogunBig>
            <SlogunSmall>Embody My Idea By Myself</SlogunSmall>
          </SlogunSection>
          <PostSection>
            <PostTitleDiv>
              <FontAwesomeIcon icon={faArrowsRotate}/>
              <PostTitle>Post</PostTitle>
              <FontAwesomeIcon icon={faPenToSquare}/>
            </PostTitleDiv>
            <PostListDiv>
            {loading ? (
                <LoadingDiv>
                  <LoadingImg src={loadingIcon} />
                </LoadingDiv>
              ) : isPost ? (
                  <LoadingDiv>
                    No Posts Yet
                  </LoadingDiv> 
                ) : (
                <ul>
                  <EachPostLi>
                    <div>
                      <FontAwesomeIcon icon={faLocationPin} />
                      <PostLink>EECS 101 Ed Stem</PostLink>
                    </div>
                    <PostRepl>[35]</PostRepl>
                  </EachPostLi>
                </ul>
              )}
              
            </PostListDiv>
            <PagingSection>
              <PagenumberDiv>
                <FontAwesomeIcon icon={faArrowLeft} />
              </PagenumberDiv>
              <PagenumberDiv>2</PagenumberDiv>
              <PagenumberDiv>
                <FontAwesomeIcon icon={faArrowRight} />
              </PagenumberDiv>
            </PagingSection>
          </PostSection>
        </Main>
        <Footer>
          <FontAwesomeIcon icon={faReact} />
          <FooterBig>for react study</FooterBig>
          <FooterSmall>2022. by kun</FooterSmall>
        </Footer>
      </MediaDiv>      
    </ThemeProvider>
  </>
  );
}

export default App;