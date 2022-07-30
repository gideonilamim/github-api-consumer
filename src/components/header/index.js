import React, { useState } from "react";
import * as S from "./styled";
import useGithub from "../../hooks/github-hooks";
import githubImg from "./images/githubIco.png";

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
        <div className="githubImg">
          <img src={githubImg}  />
        </div>
        <input
          type="text"
          placeholder="Digite o username para pesquisa..."
          onChange={(event) => setUsernameForSearch(event.target.value)}
        />
        <button type="submit" onClick={submitGetUser}>
          Buscar
        </button>
      </S.Wrapper>
    </header>
  );
};

export default Header;