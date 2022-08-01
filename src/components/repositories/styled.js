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
  padding: 4px;
  display: flex;
  margin: 0;
`;
WrapperTabList.tabsRole = "TabList";

export const WrapperTab = styled(Tab)`
  border-radius: 16px;
  border: 1px solid #ccc;
  padding: 16px;
  user-select: none;
  cursor: pointer;
  z-index: 9;
  background-color: "#fff";
  margin: 8px;

  &:focus {
    outline: none;
  }

  &.is-selected {
    box-shadow: 3px 2px 10px rgba(0, 0, 0, 0.2);
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