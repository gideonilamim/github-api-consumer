import React, { useState} from "react";
import CheckedIco from "../../images/checkedIco";
import * as S from './styled'

const MenuItem = ({children, onClick, selection}) =>{
    const [selected, setSelected] = useState(selection);
    
    const onItemClick = (item) => {
        onClick(item);
        setSelected(item);
    }

    const items = children.map((item) =>{
          return <S.MenuItem onClick={()=>onItemClick(item)}>
            {item === selected && <CheckedIco className="checked"/>}
            <button>{item}</button>
        </S.MenuItem>
    });
    return items;
}



const DropDownMenu = ({children, openToggle, onSelect, selection}) =>{

    return (<S.DropDownMenu>
                <S.Background onClick={openToggle}/>
                <S.DropDownBox>
                    <MenuItem onClick={(item)=>onSelect(item)} selection={selection}>{children}</MenuItem>
                </S.DropDownBox>
            </S.DropDownMenu>);

}
//
export default DropDownMenu;