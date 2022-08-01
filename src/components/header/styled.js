import styled from "styled-components";

export const HeaderWrapper = styled.header`
  padding: 0px;
  border-bottom: 1px solid rgb(54, 54, 54);
  height: 60px;
  width: 100%;
  top: 0;
  left:0;
  right:0;
  background-color: #24292f;
  position: fixed;
  z-index: 999;
  padding: auto;
  color: #fff;
`
  export const ContentWrapper = styled.div`
  margin-top:10px;
  max-width: 1280px;
  margin-right: auto;
  margin-left: auto;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  input {
    min-width:200px;
    border: 1px solid #ccc;
    border-radius: 8px;
    width: 30%;
    height: 40px;
    padding: 8px;
    font-weight: 500;
    color: rgb(255,255,255);
    
  }

  button {
    background-color: #24292f;
    height:40px;
    padding: 8px 16px;
    margin: 0 16px;
    border-radius: 8px;
    border: 1px solid #fff;
    box-shadow: 3px 2px 10px rgba(0, 0, 0, 0.2);
    

    &:hover {
      background-color: #2c5282;
      box-shadow: 3px 2px 10px rgba(0, 0, 0, 0.2);
      color: rgb(255,255,255);
    }    
  }
`;

export const LogoWrapper =  styled.div`
      fill: #fff;
     height: 40px;
     margin-left: 30px;
     margin-right:30px;
`