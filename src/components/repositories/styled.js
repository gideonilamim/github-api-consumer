import styled from "styled-components";
import { Tabs, TabList, Tab, TabPanel } from "react-tabs";

export const WrapperTabs = styled(Tabs)`
  font-size: 16px;
  width: 100%;
  margin-top: 16px;
  background-color: #ffffff;
`;

export const WrapperTabList = styled(TabList)`
  list-style-type: none;
  padding: 0px;
  display: flex;
  margin: 0;
  border-bottom: 1px solid #d0d7de;
`;
WrapperTabList.tabsRole = "TabList";

export const WrapperTab = styled(Tab)`
font-weight: 600;
color: var(--color-fg-default);
margin-botton:0;
margin-left:10px;
margin-right:10px;
border-bottom: 3px solid #fd8c63;
position: relative;
    display: flex;
    padding: 0 8px;
    font-size: 14px;
    line-height: 30px;
    text-align: center;
    white-space: nowrap;
    cursor: pointer;
    background-color: transparent;
    align-items: center;
    
  ::before{    position: absolute;
    top: 50%;
    left: 50%;
    width: 100%;
    height: 100%;
    min-height: 48px;
    content: "";
    transform: translateX(-50%) translateY(-50%);
  }
  &:focus {
    outline: none;
  }
  span {
    margin-left: 5px;
  }
  
`;
WrapperTab.tabsRole = "Tab";

export const WrapperTabPanel = styled(TabPanel)`
  padding: 16px;
  border: 1px solid "#ccc";
  display: none;
  margin-top: -5px;

  &.is-selected {
    display: block;
  }
`;
WrapperTabPanel.tabsRole = "TabPanel";

export const WrapperList = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  flex-wrap: nowrap;
  padding-left: 0;
`;

export const FilterWrapper = styled.div`
padding-top: 24px;
padding-bottom: 24px;
display: flex;
flex-direction:column;
border-bottom: 1px solid #d0d7de;
width:100%;
`;
export const FormWrapper = styled.div`
display: flex;


form {
  width:100%;
}

form input[type=text] {
  padding: 5px 12px;
  width: 100%;
  font-size: 14px;
  line-height: 20px;
  vertical-align: middle;
  border-radius: 6px;
  box-shadow: inset 0 1px 0 rgba(208,215,222,02);
  color: #24292f;
  border: 1px solid #d0d7de;
  transition: 80ms black;
  transition-property: box-shadow,border-color;
  margin-right: 16px;
  margin-bottom: 0 ;
}

.formDiv{
  display: flex;
  flex-direction: row;
  flex: auto;
  
}
  
}
`;