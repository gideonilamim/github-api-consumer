import React, { useState } from "react";
import NavBar from "../UI/dropdownMenu";
import MenuButton from "../UI/dropdownMenu";
import * as S from "./styled"

const Filter = ({FindRepo, languages, onSorting, displayLanguage}) => {

        const formSubmitHandler = (event) =>{
            event.preventDefault();
        }

        const sortbyHandler = (option) => {
            console.log(option);
        }

        const selectLanguage = (language) => {
            console.log('language' +language);
            displayLanguage(language)
        }

        const languageOptions = () =>{ 
            const languageOptions = ['all'];
            languages.map((language) => {
               
                languageOptions.push(language);
            })
             console.log(languageOptions);
            return languageOptions
        }
        

        const sortBy = ["creation date", "Last updated", "stars"]

        return <S.FilterWrapper>
                    <S.FormWrapper>
                        <form onSubmit={formSubmitHandler} accept-charset="UTF-8">
                            <div className="formDiv"> 
                                <input  type="text" placeholder="pesquisa..." onChange={(event)=> FindRepo(event.target.value)}/>                            
                            </div>
                        </form>
                        <MenuButton name="Languages" onSelect={selectLanguage} content ={languageOptions()}/>
                        <MenuButton name="sort by" onSelect={sortbyHandler} content ={sortBy}/>
                    </S.FormWrapper>
                </S.FilterWrapper>;
}

export default Filter;
//onChange={(event) => setUsernameForSearch(event.target.value)}