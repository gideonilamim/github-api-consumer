import React, { useState } from "react";
import * as S from "./styled";
import useGithub from "../../hooks/github-hooks";
import LogoIco from "../images/logoIco";

const Header = () => {
  const { getUser } = useGithub();
  const [usernameForSearch, setUsernameForSearch] = useState();

  const submitGetUser = () => {
    if (!usernameForSearch) return;
    return getUser(usernameForSearch);
  };

  return (
 
      <S.HeaderWrapper>
        <S.ContentWrapper>
          <S.LogoWrapper>
            <LogoIco/>
            <span>GidHub</span>
          </S.LogoWrapper>
          <input
            type="text"
            placeholder="enter github user..."
            onChange={(event) => setUsernameForSearch(event.target.value)}
          />
          <button type="submit" onClick={submitGetUser}>
            Search
          </button> 
        </S.ContentWrapper>
      </S.HeaderWrapper>
   
  );
};

export default Header;
