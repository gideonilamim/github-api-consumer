import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0px;
  border-bottom: 1px solid rgb(54, 54, 54);
  height: 77px;
  align-items: center;
  width: 100%;
  top: 0;
  left:0;
  right:0;
  background-color: #24292f;
  position: fixed;
  z-index: 999;
  padding: 16px;

  img{
   
    
    filter: invert(100%);
     height: 40px
  }

  input {
    border: 1px solid #ccc;
    border-radius: 8px;
    width: 30%;
    height: 44px;
    padding: 8px;
    font-weight: 500;
    color: rgb(255,255,255);
    
  }

  button {
    background-color: #ffffff;
    padding: 8px 16px;
    margin: 0 16px;
    border-radius: 8px;
    color: #24292f;

    &:hover {
      background-color: #2c5282;
      box-shadow: 3px 2px 10px rgba(0, 0, 0, 0.2);
      font-weight: bold;
      color: rgb(255,255,255);
    }


  
    
  }
`;
