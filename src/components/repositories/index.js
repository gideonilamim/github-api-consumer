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
      getUserStarred(githubState.user.login);
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

  /*create an array of objects 
  https://www.freecodecamp.org/news/javascript-array-of-objects-tutorial-how-to-create-update-and-loop-through-objects-using-js-array-methods/
  */
  const sortingOptions = [
    {
      title:'Last updated',
      type:'pushed_at'
    },{
      title:'Creation date',
      type:'created_at'
    },{
      title:'Name',
      type:'name'
    },{
      title:'Stars',
      type:'stars'
    }];

  const sortRepositoriesHandler = (option) =>{
    let sortingType = sortingOptions.find(optionItem => optionItem.title === option).type;
    setSortingProperty(sortingType);
  }

  const sortedRepositories = () =>{ 
    //https://www.youtube.com/watch?v=RsFBsBep-hA
    const sortingFunction = (a,b)=>{
    //if a - b < 0   a comes first
      if(sortingProperty == 'created_at' || sortingProperty == 'pushed_at' ){
          const a_date = new Date(a[sortingProperty]).getTime();
          const b_date = new Date(b[sortingProperty]).getTime();
          return b_date - a_date;
      }else if (sortingProperty == 'name'){ 
          return a.name.replace(/[^a-zA-Z0-9 ]/g, '').localeCompare(b.name.replace(/[^a-zA-Z0-9 ]/g, ''));
      }else if (sortingProperty == 'stars'){
        return b.stargazers_count - a.stargazers_count
      }
    }
    
    const sortedRepos = githubState.repositories.sort(sortingFunction)
    return sortedRepos;  
  }

  const languages = getLanguages(githubState.repositories);
  const repositoriesNumber = githubState.repositories.length;
  
  

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
                    onSortRepositories={sortRepositoriesHandler} 
                    FindRepo={findRepoHandler}
            />

              {sortedRepositories().map((item) => {
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
