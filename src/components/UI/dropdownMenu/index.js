import React, {useState} from "react";
import * as S from './styled';
import { ReactComponent as ArrowIco } from '../../images/iconmonstr-angel-down-thin.svg'
import DropDownMenu from './dropdown-Menu'

const items = ["JavaScript",
                "TypeScript",
                "HTML",
                "CSS",
                "Java"]

//The <ul> HTML element represents an unordered list of items, typically rendered as a bulleted list.
//<svg width="16" height="16" viewBox="-2 -9 30 30" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M23.245 4l-11.245 14.374-11.219-14.374-.781.619 12 15.381 12-15.391-.755-.609z"/></svg></a>

const MenuButton = (props) =>{

    const [open, setOpen] = useState(false);

    const openMenuHandler =()=>{
        setOpen(!open);
        console.log(open);
    }

    return  <>
                <S.MenuButton content={['content']} onClick={openMenuHandler}> 
                        text
                        <ArrowIco/>
                </S.MenuButton>
                {(open && props.content ) && <DropDownMenu openToggle={openMenuHandler}>{props.content}</DropDownMenu>}
            </>;
}
export default MenuButton;

