import {
    LoadingDiv,
    LoadingImg,
    PagenumberDiv,
    PagingSection,
    PostListDiv,
    PostSection,
    PostTitle,
    PostTitleDiv,
  } from "./styledComponent";

import {
    faArrowsRotate,
    faPenToSquare,
    faArrowLeft,
    faArrowRight,
  } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import loadingIcon from "./loading.svg";
import EachPost from "./EachPost";

function ShowPostList({isPost, loading, addPost, postList}) {
    return (
    <>
        <PostSection>
            <PostTitleDiv>
              <FontAwesomeIcon onClick={addPost} icon={faArrowsRotate}/>
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
                  {postList.map((element) => (
                    <EachPost key={element.id} title={element.title} replCount={element.replCount}/>
                  ))}
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
    </>
    );
}

export default ShowPostList;