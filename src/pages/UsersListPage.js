import React from "react";
import { UsersListStyles } from "./UsersListStyles";

function UsersListPage() {
  return (
    <UsersListStyles>
      <span className="breadcrumbs">Main page &#8250; User statistics</span>
      <h2>Users statistics</h2>
      <table>
        <tr className="tableHeader">
          <th className="id">id</th>
          <th>First name</th>
          <th>Last name</th>
          <th>Email</th>
          <th>Gender</th>
          <th>IP address</th>
          <th>Total clicks</th>
          <th className="views">Total page views</th>
        </tr>

        <tr>
          <td>1</td>
          <td>Anna</td>
          <td>Vygovska</td>
          <td>Email@gmail.com</td>
          <td>male</td>
          <td>192.168.32.06</td>
          <td>1209890</td>
          <td>56789</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Samuel</td>
          <td>Frost</td>
          <td>Email@gmail.com</td>
          <td>male</td>
          <td>192.168.32.06</td>
          <td>1209890</td>
          <td>56789</td>
        </tr>
      </table>
      {/* <div className="tableHeader">
        <div className="tableTitle id">id</div>
        <div className="tableTitle">First name</div>
        <div className="tableTitle">Last name</div>
        <div className="tableTitle email">Email</div>
        <div className="tableTitle gender">Gender</div>
        <div className="tableTitle">IP address</div>
        <div className="tableTitle clicks">Total clicks</div>
        <div className="tableTitle views">Total page views</div>
      </div>
      <div className="tableBody">
        <ul>
          <li>1</li>
          <li>2</li>
          <li>3</li>
        </ul>
      </div> */}
    </UsersListStyles>
  );
}

export default UsersListPage;
