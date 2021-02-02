import React from "react";
// import UserInfoPage from "../../pages/UserInfoPage";
import UsersListPage from "../../pages/UsersListPage";
import { ContentStyles } from "./ContentStyles";

function Content() {
  return (
    <ContentStyles>
      <UsersListPage />
      {/* <UserInfoPage /> */}
    </ContentStyles>
  );
}

export default Content;
