import React, { useState, useEffect, createContext } from "react";
import { useLocation } from 'react-router-dom'

import TabA from './TabA'
import TabB from './TabB'

import * as S from "./styles";

export const HomeContext = createContext()

const HomePage = () => {
  const [tabActive, setTabActive] = useState("A");
  const { state } = useLocation()
  const redirectTab = state?.tabActive

  useEffect(() => {
    if (redirectTab) setTabActive(redirectTab)
  }, [redirectTab])

  return (
    <div>
      Home Page
      <S.HomeHeader>
        <S.HomeTitle
          active={tabActive === "A"}
          onClick={() => setTabActive('A')}
        >
          Tab A
        </S.HomeTitle>
        <S.HomeTitle
          active={tabActive === "B"}
          onClick={() => setTabActive('B')}
        >
          Tab B
        </S.HomeTitle>
      </S.HomeHeader>
      {tabActive === 'A'
        ? <TabA />
        : <TabB redirectTab={redirectTab} />
      }
    </div>
  );
};

export default HomePage;
