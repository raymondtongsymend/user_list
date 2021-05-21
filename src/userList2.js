import React from "react";
import UserList2ClientBreakdown from "./userList2ClientBreakdown";

const UserList2 = (props) => {
  const userDataList = props.userDataList;

  // create a distinct list of clients
  let clientList = [];
  userDataList.map((userData) => {
    clientList.push(userData.client);
  });
  clientList = clientList.filter((value, index, self) => {
    return self.indexOf(value) === index;
  });

  return (
    <div>
      <h1>User List 2 - Grouped By Client / Vendor </h1>
      <ul>
        {clientList.map((client) => (
          <UserList2ClientBreakdown
            client={client}
            userDataList={userDataList}
          />
        ))}
      </ul>
    </div>
  );
};

export default UserList2;
