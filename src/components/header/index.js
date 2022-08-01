import React, { useState } from "react";
import * as S from "./styled";
import useGithub from "../../hooks/github-hooks";
import githubImg from "./images/githubIco.png";
import NavBar from "../UI/dropdownMenu";
import LogoIco from "../images/logoIco";

const Header = () => {
  const { getUser } = useGithub();
  const [usernameForSearch, setUsernameForSearch] = useState();

  const submitGetUser = () => {
    if (!usernameForSearch) return;
    return getUser(usernameForSearch);
  };

  return (
    <header>
      <S.Wrapper>
        <S.LogoWrapper>
          <LogoIco/>
        </S.LogoWrapper>
        <input
          type="text"
          placeholder="enter github user..."
          onChange={(event) => setUsernameForSearch(event.target.value)}
        />
        <button type="submit" onClick={submitGetUser}>
          Search
        </button>
      </S.Wrapper>
    </header>
  );
};

export default Header;
