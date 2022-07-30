import React from "react";
import * as S from "./styled";
import PushedAt from './pushedAt'
import LanguageColors from "./languageColors";

const mystyle = {  
  border: "1px solid rgba(27,31,36,0.15);",  
  backgroundColor: "#f1e05a;",    
}; 

const RepositoryItem = ({name, linkToRepo, language, pushed_at}) => {
  

  const getLanguageColor = () =>{
    let color = null;
    if (language){
      const colors = LanguageColors[0];
      color = colors[language];   //https://stackoverflow.com/questions/4244896/dynamically-access-object-property-using-variable
    }else{
      color = null;
    }
  console.log(color? true: false);
    return color;
  }
  const isVisible =() =>{
    return language? 'visible' : 'hidden';
  }

  return (
    <S.Wrapper>
      <S.WrapperTitle>
          <S.WrapperLink href={linkToRepo} target="_blank" rel="noreferrer">{name}</S.WrapperLink>
      </S.WrapperTitle>
           <S.repoContentWrapper> 
              <S.repoLanguageColor visibility={() => isVisible} color={() => getLanguageColor()}/>
              <span>{language}</span>
              <PushedAt pushed_at={pushed_at}/>
            </S.repoContentWrapper>
     </S.Wrapper>
  );
};

export default RepositoryItem;
