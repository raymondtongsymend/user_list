import React from "react";

const UserList1 = ({ userDataList }) => (
  <div>
    <h1>User List 1</h1>
    <ul>
      {userDataList.map(
        ({ name: userName, client: clientName, vendor: vendorName }) => (
          <li key={userName}>
            User: {userName}, Client: {clientName}, Vendor: {vendorName}
          </li>
        )
      )}
    </ul>
  </div>
);

export default UserList1;
