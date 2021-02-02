import React from "react";
import MainPage from "../../pages/MainPage";
// import Content from "../content/Content";
// import Footer from "../footer/Footer";
// import Header from "../header/Header";
import { AppStyles } from "./AppStyles";

function App() {
  return (
    <>
      <AppStyles>
        <MainPage />
        {/* <Header />
        <Content />
        <Footer /> */}
      </AppStyles>
    </>
  );
}

export default App;
