import React, {useState} from "react";
import * as S from './styled';
import DropDownMenu from './dropdown-Menu'
import Button from "../button";

//The <ul> HTML element represents an unordered list of items, typically rendered as a bulleted list.
//<svg width="16" height="16" viewBox="-2 -9 30 30" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M23.245 4l-11.245 14.374-11.219-14.374-.781.619 12 15.381 12-15.391-.755-.609z"/></svg></a>

const MenuButton = (props) =>{
    //needs: default:selected item; name: button text; content: array.
    const [open, setOpen] = useState(false);
    const [selected, setSelected] = useState(props.select);

    const openMenuHandler =()=>{
        setOpen(!open);
    }

    const selectHandler = (option) => {
        props.onSelect(option);
        setSelected(option);
        //setOpen(false);   
    }

    return  <>
                <Button onClick={openMenuHandler}> 
                        {props.name}
                        {(props.content && props.content.length > 0) && <S.ArrowIco/>}
                </Button>
                {(open && props.content && props.content.length > 0 ) && <DropDownMenu onSelect={selectHandler} selection={selected} openToggle={openMenuHandler}>{props.content}</DropDownMenu>}
            </>;
}
export default MenuButton;

