import styled from "styled-components";

export const Wrapper = styled.div`
padding-top: 24px;
padding-bottom: 24px;
display: flex;
flex-direction:column;
border-bottom: 1px solid #d0d7de;
width:100%;
`;

export const WrapperTitle = styled.h2`
  
`;

export const WrapperLink = styled.a`
  font-size: 20px;
  font-weight: 600;
  margin: 8px 0;
  color: #0969da;
`;



export const repoContentWrapper = styled.div`
  font-size: 12px;
  font-weight: 600;
  margin: 0;
  padding:0;
  color: #57606a;

  span{
    margin-right: 16px;
    margin-left: 0px;
  }
`;

export const repoLanguageColor = styled.span`
visibility: ${props => props.visibility};
position: relative;
top: 1px;
display: inline-block;
width: 12px;
height: 12px;
border: 1px solid rgba(27,31,36,0.15);
border-radius: 50%;
background-color: ${props => props.color};
/*https://styled-components.com/docs/basics*/
`;
