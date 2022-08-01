import React, { useEffect, useState } from "react";
import useGithub from "../../hooks/github-hooks";
import RepositoryItem from "../repository-item";
import * as S from "./styled";
import Filter from "./filter";
//https://docs.github.com/en/rest/git/refs

const getLanguages =(repos)=>{
  const allLanguages = repos.map((item) => {
      if(item.language !== null){
        return (item.language);
      }
  });

  const data = allLanguages.filter(function( element ) {
    return element !== undefined;
 })

  return [... new Set(data)];
}

const getSortedRepos = (repos) =>{
  
  //https://www.youtube.com/watch?v=RsFBsBep-hA
  const compareFunction = (a,b)=>{
      console.log('a = '+ a.id);
      //if a - b < 0   a comes first
      return b.id - a.id;
  }

  const sortedRepos = repos.sort(compareFunction);
   
  return sortedRepos;  
  
}

const Repositories = () => {
  const { githubState, getUserRepos, getUserStarred } = useGithub();
  const [hasUserForSearchrepos, setHasUserForSearchrepos] = useState(false);
  const [searchText, setSearchText] = useState('');//every time I update the value of searchText, it renders the repositories list
    
  const languages = getLanguages(githubState.repositories);
  const sortedRepositories = getSortedRepos(githubState.repositories);
  
 

  useEffect(() => {
    if (githubState.user.login) {
      getUserRepos(githubState.user.login);
      getUserStarred(githubState.user.login);
    }
    setHasUserForSearchrepos(githubState.repositories);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [githubState.user.login]);
  

  const findRepoHandler = (repoName) =>{
    setSearchText(repoName);
  }

  return (
    <>
      {hasUserForSearchrepos ? (
        <S.WrapperTabs
          selectedTabClassName="is-selected"
          selectedTabPanelClassName="is-selected"
        >
          <S.WrapperTabList>
            <S.WrapperTab>Repositories</S.WrapperTab>
            <S.WrapperTab>Starred</S.WrapperTab>
          </S.WrapperTabList>
          <S.WrapperTabPanel>
            <S.WrapperList>
            <Filter languages={languages} FindRepo={findRepoHandler}/>
              {sortedRepositories.map((item) => {
                //console.log(item);
                return <RepositoryItem
                  key={item.id}
                  name={item.name}
                  searchText={searchText}
                  linkToRepo={item.full_name}
                  fullName={item.full_name}
                  language={item.language}
                  pushed_at={item.pushed_at}
                  description={item.description}
                  fork={item.fork}
                  stargazersCount={item.stargazers_count}
                  />
              })}
            </S.WrapperList>
          </S.WrapperTabPanel>
          <S.WrapperTabPanel>
            <S.WrapperList>
              {githubState.starred.map((item) => (
                <></>
              ))}
            </S.WrapperList>
          </S.WrapperTabPanel>
        </S.WrapperTabs>
      ) : (
        <></>
      )}
    </>
  );
};

export default Repositories;
