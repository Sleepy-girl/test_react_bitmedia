import styled from "styled-components";
import { colors } from "../stylesheet/vars";

export const UsersListStyles = styled.div`
  .breadcrumbs {
    display: block;
    font-size: 16px;
    line-height: 20px;
    color: ${colors.breadcrums};
    margin-bottom: 24px;
  }
  h2 {
    font-weight: 700;
    font-size: 32px;
    line-height: 39px;
    color: ${colors.textTitle};
    margin-bottom: 16px;
  }
  tr .tableHeader {
    display: flex;
    padding-left: 24px;
  }
  th {
    /* flex-grow: 1; */
    font-size: 16px;
    font-weight: 400;
    line-height: 48px;
    color: ${colors.textWhite};
    background: ${colors.main};
    padding: 0 24px;
    margin-right: 1px;
  }
  .id {
    border-top-left-radius: 8px;
  }
  .views {
    border-top-right-radius: 8px;
  }
  .id,
  .gender,
  .clicks,
  .views {
    /* flex-grow: 110;
     */
  }
  .email {
    /* flex-grow: 50; */
  }
`;
