import {
  Main,
  MediaDiv,
} from "./styledComponent";

import { darkTheme, GlobalStyles, lightTheme } from './styles';
import { ThemeProvider } from 'styled-components';
import {useState} from 'react';
import Header from './Header';
import Slogun from './Slogun';
import ShowPostList from './ShowPostList';
import Footer from './Footer';

function App() {
  const initialPostList = [
    {id: 1, title:'EECS 101 Ed Stem', replCount:23},
    {id: 2, title:'CS 197', replCount:30},
    {id: 3, title:'CS 198-99', replCount:17}
  ]
  const [darkMode, setDarkMode] = useState(true);
  const [loading, setLoading] = useState(false);
  const [isPost, setIsPost] = useState(false);
  const [postList, setPostList] = useState(initialPostList);
  
  const addPost = () => {
    setPostList((postList) => [
      ...postList, {id: 4, title: 'CS 198-97', replCount: 21}
    ])
  }

  return (
  <>
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <GlobalStyles />
      <MediaDiv>
        <Header darkMode={darkMode} setDarkMode={setDarkMode} />
        <Main>
          <Slogun/>
          <ShowPostList 
            loading={loading} 
            isPost={isPost} 
            addPost={addPost}
            postList={postList}
          />
        </Main>
        <Footer/>
      </MediaDiv>      
    </ThemeProvider>
  </>
  );
}

export default App;