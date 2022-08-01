import React, {Children, useState} from "react";
import * as S from './styled'

const MenuItem = ({children}) =>{
    const items = children.map((item) =>{
        return <S.MenuItem><a>{item}</a></S.MenuItem>
    });
    //https://stackoverflow.com/questions/6279672/fixed-positioned-div-inside-another-div
    return items;
}


//<S.Background onClick={openToggle}/>
const DropDownMenu = ({children, openToggle}) =>{
    console.log(children);
    return (<S.DropDownMenu>
                <S.Background onClick={openToggle}/>
                <S.dropDownBox>
                     <MenuItem>{children}</MenuItem>
                </S.dropDownBox>
            </S.DropDownMenu>);

}

export default DropDownMenu;