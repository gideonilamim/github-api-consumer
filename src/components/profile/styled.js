import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;
  margin-top:90px;
  justify-content: flex-start;
  align-content: flex-end;
  flex-direction: column;
  align-items:center;
  width:296px;
`;

export const WrapperInfoUser = styled.div`
  padding-top: 16px !important;
  padding-bottom: 16px !important;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 8px;
  height: 200px;
  width:90%;

  h1 {
    font-size: 24px;
    font-weight: 600;
    line-height: 1;
    margin-top: 0;
    margin-bottom: 0;
    
  }

  h2 {
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
    margin-top: 0;
    margin-bottom: 0;
  }

  h4 {
    font-size: 16px;
    font-weight: bold;
  }

  button{
    width:9px;
  }
`;

export const WrapperStatusCount = styled.div`
  display: flex;
  align-items: center;
  div {
    margin: 8px;
    text-align: center;
  }

  h4{
    font-size: 10px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
    margin-top: 0;
    margin-bottom: 0;
  }
`;

export const WrapperUserGeneric = styled.div`
  display: flex;
  align-items: center;
  margin-top: 8px;
  width:100%;
  h3 {
    margin-right: 8px;
  }

  .btn {
    display: block;
    width: 100%;
    text-align: center;
    padding: 5px 16px;
    font-size: 14px;
    font-weight: 500;
    line-height: 20px;
    white-space: nowrap;
    vertical-align: middle;
    cursor: pointer;
    border: 1px solid;
    border-radius: 6px;
    text-decoration: none;
    color: #24292f;
    background-color: #f6f8fa;
    border-color: rgba(27,31,36,0.15);
  }
`;

export const WrapperImage = styled.img`
  border-radius: 50%;
  width: 100%;
  margin: 8px;
`;
