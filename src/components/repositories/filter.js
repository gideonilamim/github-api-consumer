import React, { useState } from "react";
import NavBar from "../UI/dropdownMenu";
import MenuButton from "../UI/dropdownMenu";
import * as S from "./styled"

const Filter = ({FindRepo, languages}) => {

        const formSubmitHandler = (event) =>{
            event.preventDefault();
        }

        return <S.FilterWrapper>
                    <S.FormWrapper>
                        <form onSubmit={formSubmitHandler} accept-charset="UTF-8">
                            <div className="formDiv"> 
                                <input  type="text" placeholder="pesquisa..." onChange={(event)=> FindRepo(event.target.value)}/> 
                                <MenuButton content ={languages}/>
                            <MenuButton content ={["JavaScript",
                            "yasmim",
                            "Gabriel",
                            "CSS",
                            "Java"]}/>
                            </div>
                        </form>
                    </S.FormWrapper>
                </S.FilterWrapper>;
}

export default Filter;
//onChange={(event) => setUsernameForSearch(event.target.value)}