import styled from "styled-components";

export const MenuButton = styled.button`
    height: 60px;
    background-color: #f3f4f6;
    padding: 0 1rem;
    border-color: 1px solid #474a4d;
    color: #24292f;
    padding: 5px 16px;
    
`

export const navOptionsList = styled.ul`
        max-width: 100%;
        height: 100%;
        display: flex;
        justify-content: flex-end;
`

export const NavItem = styled.a`
        width: calc(60px * 0.8);
        display: flex;
        align-items: center;
        justify-content: center;

        a {
            --button-size: calc(60px * 0.5);
            width: var(--button-size);
            height: var(--button-size);
            border-radius:50%;
            padding:5px;
            margin:2px;
            background-color: gray;
            display:flex;
            align-items: center;
            justify-content: center;
            color: #fff;
            transition: filter 300ms;
        }
        a:hover{
            filter: brightness(7);
        }

        svg {
            fill: #dadce1;
            width: 100%;
            height: 100%;
            transform: scale(0.7);
        }
`
export const DropDownMenu = styled.div`
    position: relative; 
    display: flex;
`

export const dropDownBox = styled.div`
        color:#fff;
        position: absolute;
        display: flex;
        flex-direction: column;
        top: 58px;
        right: auto;
        bottom: auto;
        left: -114px;
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
        border-radius: 8px;
        transition: background,margin-left 500ms;
        padding: 0.5rem;

        :hover{
            background-color: #525357;
            margin-left: 14px;  
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
