import React, {Children, useState} from "react";
import * as S from './styled'
import DropDownMenu from "./dropdown-Menu";

const DropdownMenu = (props) => {

    const [open, setOpen] = useState(false);

    const openMenuHandler =()=>{
        setOpen(!open);
        console.log(open);
    }

    return  <>
                <S.NavItem><a onClick={openMenuHandler} >{props.children}</a></S.NavItem>
                {open &&  <DropDownMenu openToggle={openMenuHandler}>{props.content}</DropDownMenu>}   
            </>
}

export default DropdownMenu;