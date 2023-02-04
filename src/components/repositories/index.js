import React, { useEffect, useState } from "react";
import useGithub from "../../hooks/github-hooks";
import RepositoryItem from "../repository-item";
import * as S from "./styled";
import Filter from "./filter";
import BookIco from "../images/bookIco";
//https://docs.github.com/en/rest/git/refs

const Repositories = () => {
  const { githubState, getUserRepos, getUserStarred } = useGithub();
  const [hasUserForSearchrepos, setHasRepositories] = useState(false);
  const [searchText, setSearchText] = useState('');//every time I update the value of searchText, it renders the repositories list
  const [targetLanguage, setTargetLanguage] = useState('all');
  const [sortingProperty, setSortingProperty] = useState('pushed_at');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (githubState.user.login) {
      getUserRepos(githubState.user.login);
    } 
    setHasRepositories(githubState.repositories);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [githubState.user.login]);

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

  const languageHandler = (language) => {
    setTargetLanguage(language);
  }

  const findRepoHandler = (repoName) =>{
    setSearchText(repoName);
  }

  const sortingOptions = ['Last updated','Creation date','Name','Stars'];

  const sortRepositoriesHandler = (option) =>{
    if (option === 'Last updated'){
      setSortingProperty('pushed_at');
    }else if (option === 'Creation date'){
      setSortingProperty('created_at');
    }else if (option === 'Name'){
      setSortingProperty('name');

    }
  }

  const sortRepositories = (option) =>{ 
    //https://www.youtube.com/watch?v=RsFBsBep-hA
    const compareDatesFunction = (a,b)=>{
      //if a - b < 0   a comes first
      const a_date = new Date(a[sortingProperty]).getTime();
      const b_date = new Date(b[sortingProperty]).getTime();
      return b_date - a_date;
    }
    const compareNamesFunction = (a,b)=>{
      //if a - b < 0   a comes first
      return a.name - a.name;
    }


    const sortedRepos = githubState.repositories.sort(compareDatesFunction);
    return sortedRepos;  
  }

  const languages = getLanguages(githubState.repositories);
  const repositoriesNumber = githubState.repositories.length;
  console.log('render');

  return (
    <>
      {hasUserForSearchrepos ? (
        <S.WrapperTabs
          selectedTabClassName="is-selected"
          selectedTabPanelClassName="is-selected"
        >
          <S.WrapperTabList>
            <S.WrapperTab><BookIco/><span>Repositories</span><span>{repositoriesNumber}</span></S.WrapperTab>
          </S.WrapperTabList>
          <S.WrapperTabPanel>
            <S.WrapperList>
            <Filter languages={languages}
                    onDisplayLanguage={languageHandler} 
                    sortingOptions={sortingOptions}
                    onSortRepositories={sortRepositories} 
                    FindRepo={findRepoHandler}
            />

              {sortRepositories().map((item) => {
                //console.log(item);
                return <RepositoryItem
                  key={item.id}
                  name={item.name}
                  searchText={searchText}
                  linkToRepo={item.full_name}
                  fullName={item.full_name}
                  language={item.language}
                  targetLanguage={targetLanguage}
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
