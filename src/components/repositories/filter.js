import React, { useState } from "react";
import * as S from "./styled"

const Filter = ({FindRepo}) => {

        const formSubmitHandler = (event) =>{
            event.preventDefault();
        }

        return <S.FilterWrapper>
                    <S.FormWrapper>
                        <form onSubmit={formSubmitHandler} accept-charset="UTF-8">
                            <div className="formDiv"> 
                                <input  type="text" placeholder="pesquisa..." onChange={(event)=> FindRepo(event.target.value)}/> 
                                <button>sort by</button>
                            </div>
                        </form>
                    </S.FormWrapper>
                </S.FilterWrapper>;
}

export default Filter;
//onChange={(event) => setUsernameForSearch(event.target.value)}