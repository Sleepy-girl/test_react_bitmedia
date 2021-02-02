import styled from "styled-components";
import { colors, gradient } from "../stylesheet/vars";
import backgroundHeader from "../assets/images/header.svg";
import mobile from "../assets/images/mobile.svg";

export const MainPageStyles = styled.div`
  section {
    padding: 0 130px;
  }
  .wrapper {
    padding-top: 24px;
    width: 586px;
  }
  .header {
    position: relative;
    width: 100vw;
    min-height: 655px;
    background-image: url(${backgroundHeader});
    background-size: 655px;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    margin-bottom: 16px;
  }
  h1 {
    font-size: 40px;
    line-height: 49px;
    color: ${colors.textWhite};
    margin-bottom: 48px;
  }
  h2 {
    /* font-weight: 400; */
    font-size: 48px;
    line-height: 59px;
    color: ${colors.textWhite};
    margin-bottom: 24px;
  }
  .title {
    font-weight: 400;
  }
  .desribtion {
    display: block;
    font-size: 20px;
    line-height: 28px;
    color: ${colors.textWhite};
    margin-bottom: 32px;
  }
  .btnStats {
    width: 154px;
    height: 56px;
    color: ${colors.main};
    background: ${colors.textWhite};
    border-radius: 8px;
  }
  .mobile {
    position: absolute;
    right: 209px;
    top: 72px;
    width: 321px;
    height: 561px;
  }

  h3 {
    width: 500px;
    font-size: 32px;
    line-height: 39px;
    margin: 0 auto;
    text-align: center;
    color: ${colors.textTitle};
    margin-bottom: 24px;
  }
  .contentTitle {
    font-weight: 400;
  }
  .contentDescribtion {
    display: block;
    width: 780px;
    font-size: 20px;
    line-height: 142%;
    margin: 0 auto;
    text-align: center;
    color: ${colors.textContent};
    margin-bottom: 40px;
  }

  ul {
    display: flex;
    justify-content: space-between;

    margin-bottom: 128px;
  }
  li {
    width: 380px;
    height: 323px;
    box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.16);
    border-radius: 32px;
    padding: 48px 32px;
  }
  span {
    display: block;
    font-weight: 600;
    font-size: 24px;
    line-height: 29px;
    text-align: center;
    color: ${colors.textTitle};
    margin-bottom: 16px;
  }
  p {
    width: 316px;
    font-size: 16px;
    line-height: 142%;
    text-align: center;
    color: ${colors.textContent};
  }
`;
