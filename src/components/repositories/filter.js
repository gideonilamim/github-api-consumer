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
            displayLanguage(language)
        }

        const languageOptions = () =>{ 
            if(languages.length === 0){
                return;
            }
            const languageOptions = ['all'];
            languages.map((language) => {
                            languageOptions.push(language);
            });
            return languageOptions;
        }

      

        const sortBy = ["creation date", "Last updated", "stars"]

        return <S.FilterWrapper>
                    <S.FormWrapper>
                        <form onSubmit={formSubmitHandler} accept-charset="UTF-8">
                            <div className="formDiv"> 
                                <input  type="text" placeholder="pesquisa..." onChange={(event)=> FindRepo(event.target.value)}/>                            
                            </div>
                        </form>
                        <MenuButton name="Languages" label='' select='all' onSelect={selectLanguage} content ={languageOptions()}/>
                        
                    </S.FormWrapper>
                </S.FilterWrapper>;
}

export default Filter;
