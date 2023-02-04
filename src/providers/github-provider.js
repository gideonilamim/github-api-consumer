import React, { createContext, useCallback, useState } from "react";
import api from "../services/api";

export const GithubContext = createContext({
  loading: false,
  user: {},
  repositories: [],
  starred: [],
});

const GithubProvider = ({ children }) => {
  const [githubState, setGithubState] = useState({
    hasUser: false,
    loading: false,
    user: {
      id: undefined,
      avatar: undefined,
      login: undefined,
      name: undefined,
      html_url: undefined,
      blog: undefined,
      company: undefined,
      location: undefined,
      followers: 0,
      following: 0,
      public_gists: 0,
      public_repos: 0,
    },
    repositories: [],
    starred: [],
  });

  const getUser = (username) => {
    setGithubState((prevState) => ({
      ...prevState,
      loading: !prevState.loading,
    }));

    api
      .get(`users/${username}`)
      .then(({ data }) => {
        setGithubState((prevState) => ({
          ...prevState,
          hasUser: true,
          user: {
            id: data.id,
            avatar: data.avatar_url,
            login: data.login,
            name: data.name,
            html_url: data.html_url,
            blog: data.blog,
            company: data.company,
            location: data.location,
            followers: data.followers,
            following: data.following,
            public_gists: data.public_gists,
            public_repos: data.public_repos,
          },
        }));
      })
      .finally(() => {
        setGithubState((prevState) => ({
          ...prevState,
          loading: !prevState.loading,
        }));
      });
  };

   const getUserRepos = async (username) => {

    const sortRepositories = (repos) =>{

      //https://www.youtube.com/watch?v=RsFBsBep-hA
      const compareFunction = (a,b)=>{
          //if a - b < 0   a comes first
          const a_date = new Date(a.pushed_at).getTime();
          const b_date = new Date(b.pushed_at).getTime();
          return b_date - a_date;
      }
      const sortedRepos = repos.sort(compareFunction);
      return sortedRepos;     
    }

    let allRepositories = [];
    let stop = false;
    let i = 1;

    do {
      await api.get(`users/${username}/repos?page=${i}`).then(({ data }) => {
      //console.log("data: " + JSON.stringify(data));
        if(data !== 30){stop = true}
        allRepositories = allRepositories.concat(data);
      });
      i = i+1;
    }while(stop = false || i < 15);
    
    setGithubState((prevState) => ({
      ...prevState,
      repositories: allRepositories,
      
    }));
 
  };

  const getUserStarred = (username) => {
    api.get(`users/${username}/starred`).then(({ data }) => {
      console.log("data: " + JSON.stringify(data));
      setGithubState((prevState) => ({
        ...prevState,
        starred: data,
      }));
    });
  };

  const contextValue = {
    githubState,
    getUser: useCallback((username) => getUser(username), []),
    getUserRepos: useCallback((username) => getUserRepos(username), []),
    getUserStarred: useCallback((username) => getUserStarred(username), []),
  };

  return (
    <GithubContext.Provider value={contextValue}>
      {children}
    </GithubContext.Provider>
  );
};

export default GithubProvider;
