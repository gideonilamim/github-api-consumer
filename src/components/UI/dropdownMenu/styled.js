import styled from "styled-components";

export const MenuButton = styled.button`
    background-color: #f3f4f6;
    position: relative;
    display: inline-block;
    padding: 5px 16px;
    font-size: 14px;
    font-weight: 500;
    line-height: 20px;
    white-space: nowrap;
    vertical-align: middle;
    cursor: pointer;
    -webkit-user-select: none;
    user-select: none;
    border: 1px solid rgba(27,31,36,0.15);
    border-radius: 6px;
    -webkit-appearance: none;
    appearance: none;
    cursor: pointer;
    margin-right: 5px;
    
`
export const ArrowIco = styled.div`
    margin-left: 5px;
    display: inline-block;
    width: 0;
    height: 0;
    vertical-align: middle;
    content: "";
    border-style: solid;
    border-width: 4px 4px 0;
    border-right-color: transparent;
    border-bottom-color: transparent;
    border-left-color: transparent;
`

export const DropDownMenu = styled.div`
    position: relative; 
    display: flex;
`

export const DropDownBox = styled.div`
        color:#fff;
        position: absolute;
        display: flex;
        flex-direction: column;
        top: 28px;
        right: auto;
        bottom: auto;
        left: -187px;
        padding: 0;
        z-index: 99;
        width: 300px;
        transform: translateX(25%);
        background-color: #242526;
        border: 1px solid #474a4d;
        border-radius: 8px;
        padding:1rem;
        overflow:hidden;
        Z-index:99;
        
`
export const MenuItem = styled.div`
        height: 50px;
        display: flex;
        align-items;
        transition: background,margin-left 500ms;
        padding: 0.5rem;
        border-bottom:1px solid #474a4d;
        margin-top:3px;
        

        :hover{ 
            background-color: #525357;
            margin-left: 14px;  
        }

        .checked {
            margin-right: 10px;
            fill: #fff;
        }
`

export const Background = styled.div`{
    position: fixed;
    left: 0px;
    width: 100vw;
    height: 100vw;
    z-index: 90;
    bottom: 0px;
`   
