import styled from "styled-components";
import { colors, gradient } from "../stylesheet/vars";
import backgroundHeader from "../assets/images/header.svg";
import backgroundFooter from "../assets/images/footer.svg";
import design from "../assets/images/design.svg";

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
    /* background-size: 655px; */
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
  li::before {
    display: block;
    content: "";
    width: 106px;
    height: 96px;
    background-repeat: no-repeat;
    background-position: center;
    margin: 0 auto;
    text-align: center;
    margin-bottom: 16px;
  }
  li {
    width: 380px;
    height: 323px;
    box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.16);
    border-radius: 32px;
    padding: 48px 32px;
  }
  .iconDesign::before {
    background-image: url(${design});
  }
  .iconData::before {
    background-image: url(${design});
  }
  .iconRetina::before {
    background-image: url(${design});
  }
  .listTitle {
    display: block;
    font-weight: 600;
    font-size: 24px;
    line-height: 29px;
    text-align: center;
    color: ${colors.textTitle};
    margin-bottom: 16px;
  }
  .listDescription {
    width: 316px;
    font-size: 16px;
    line-height: 142%;
    text-align: center;
    color: ${colors.textContent};
  }

  .footer {
    width: 100vw;
    min-height: 184px;
    background-image: url(${backgroundFooter});
    /* background-size: 655px; */
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    padding-top: 26px;
  }
  form {
    text-align: center;
  }
  label {
    position: relative;
  }
  input {
    width: 579px;
    height: 64px;
    border: 1px solid #f1f1f1;
    border-radius: 10px;
    padding: 19px;
    margin-bottom: 32px;
  }
  input::placeholder {
    font-size: 16px;
    line-height: 26px;
    color: ${colors.placeholder};
  }
  .btnFooter {
    position: absolute;
    width: 176px;
    height: 56px;
    top: -18px;
    right: 4px;
    color: ${colors.textWhite};
    background: ${colors.main};
    border-radius: 8px;
  }
  .wrapperFooter {
    display: flex;
    justify-content: space-between;
    color: ${colors.textWhite};
  }
  .logoFooter {
    font-size: 32px;
  }
  .copyright {
    font-size: 16px;
  }
`;
