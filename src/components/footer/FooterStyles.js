import styled from "styled-components";
import { colors } from "../../stylesheet/vars";

export const FooterStyles = styled.div`
  background: ${colors.footer};
  padding: 0 130px;

  .wrapperFooter {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: ${colors.textWhite};
  }
  .logoFooter {
    font-size: 24px;
    line-height: 56px;
  }
  .copyright {
    font-size: 16px;
  }
`;
