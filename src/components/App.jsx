import React from "react";
//import styled from "styled-components";
import MyNavBar from "./MyNavBar";
import MyCarousel from "../components/MyCarousle/MyCarousel";
import MyTitleMessage from "../components/MyTitleMessage/MyTitleMessage";
//import "./styles.css";

const App = () => {
  return (
    <div>
      <MyNavBar />
      <MyCarousel />
      <MyTitleMessage />
    </div>
  );
};

export default App;

// const Box = styled.div`
//   padding: 3rem 7.5rem;
//   border-radius: 0.8rem;
//   display: flex;
//   flex-direction: column;
// `;
