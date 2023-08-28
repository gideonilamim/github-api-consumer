import React from "react";
import MenuButton from "../UI/dropdownMenu";
import * as S from "./styled"

const Filter = ({FindRepo, languages, sortingOptions, onSortRepositories, onDisplayLanguage}) => {

        const formSubmitHandler = (event) =>{
            event.preventDefault();
        }

        const selectLanguage = (language) => {
            onDisplayLanguage(language)
        }
        const languageOptions = () =>{ 
            if(languages.length === 0){
                return;
            }
            const languageOptions = ['all'];
            languages.map((language) => {
                            return languageOptions.push(language);
            });
            return languageOptions;
        }

        const sortingOptionsTitles = () =>{
            let options = [];
            sortingOptions.map((option)=>{
                options.push(option.title); 
            })
            return options;
        }
        const sortbyHandler = (option) => {
            onSortRepositories(option);
        }

        const sortBy = ["creation date", "Last updated", "stars"]

        return <S.FilterWrapper>
                    <S.FormWrapper>
                        <form onSubmit={formSubmitHandler} accept-charset="UTF-8">
                            <div className="formDiv"> 
                                <input  type="text" placeholder="pesquisa..." onChange={(event)=> FindRepo(event.target.value)}/>                            
                            </div>
                        </form>
                        <MenuButton 
                            name="Languages" 
                            label='' 
                            select='all' 
                            onSelect={selectLanguage} 
                            content ={languageOptions()}/>

                        <MenuButton 
                            name="Sort" 
                            label='' 
                            select={sortingOptionsTitles()[0]}
                            onSelect={sortbyHandler}
                            content ={sortingOptionsTitles()}/>
                    </S.FormWrapper>
                </S.FilterWrapper>;
}

export default Filter;
