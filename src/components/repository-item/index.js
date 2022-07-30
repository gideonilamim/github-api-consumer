import React from "react";
import * as S from "./styled";
import PushedAt from './pushedAt'



const RepositoryItem = ({name, linkToRepo, language, pushed_at}) => {
  
  return (
    <S.Wrapper>
      <S.WrapperTitle>
          <S.WrapperLink href={linkToRepo} target="_blank" rel="noreferrer">{name}</S.WrapperLink>
      </S.WrapperTitle>
           <S.repoContentWrapper> 
              
              <span>{language}</span>
              <PushedAt pushed_at={pushed_at}/>
            </S.repoContentWrapper>
     </S.Wrapper>
  );
};

export default RepositoryItem;
