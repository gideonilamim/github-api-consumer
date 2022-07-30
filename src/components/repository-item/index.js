import React from "react";
import * as S from "./styled";
import PushedAt from './pushedAt'
import LanguageColors from "./languageColors";
import LanguageWrapper from "./language";
import ForkIco from "./fork";
import StarIco from './starred'

const RepositoryItem = ({name, linkToRepo, language, pushed_at, description, fork, stargazersCount}) => {
  
  console.log(description);
  return (
    <S.Wrapper>
      <S.WrapperTitle>
          <S.WrapperLink href={linkToRepo} target="_blank" rel="noreferrer">{name}</S.WrapperLink>
      </S.WrapperTitle>
      <S.DescriptionText><p>{description}</p></S.DescriptionText>
      <S.repoContentWrapper> 
        <LanguageWrapper language={language}/>
        <ForkIco fork={fork}/>
        <StarIco stargazersCount={stargazersCount}/>   
        <PushedAt pushed_at={pushed_at}/>
      </S.repoContentWrapper>
     </S.Wrapper>
  );
};

export default RepositoryItem;
