import React from "react";
import * as S from "./styled";
import LanguageColors from "./languageColors";

const LanguageWrapper = ({language}) =>{
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

    if(language){
        return (<>  
                    <S.repoLanguageColor visibility={() => isVisible} color={() => getLanguageColor()}/>
                    <span>{language}</span>
                </>
        );
    }else{

        return (<></>);
    }
}

export default LanguageWrapper;