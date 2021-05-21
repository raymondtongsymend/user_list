import React from "react";
import { GetClientObjects } from "./util/userDataListUtil";

const UserList2 = ({ userDataList }) => {
  const clientObjectList = GetClientObjects(userDataList);

  return (
    <div>
      <h1> User List 2 - Not Composition </h1>
      {clientObjectList.map(({ name, vendors }) => (
        <UserList2Client name={name} vendors={vendors} key={name} />
      ))}
    </div>
  );
};

const UserList2Client = ({ name: clientName, vendors }) => (
  <div>
    <h2> Client: {clientName} </h2>
    {vendors.map(({ name, users }) => (
      <UserList2Vendor name={name} users={users} key={name} />
    ))}
  </div>
);

const UserList2Vendor = ({ name: vendorName, users }) => (
  <div>
    <h3> Vendor: {vendorName} </h3>
    <h4>Users</h4>
    {users.map(({ name }) => (
      <UserList2User name={name} key={name} />
    ))}
  </div>
);

const UserList2User = ({ name: userName }) => <p key={userName}>{userName}</p>;

export default UserList2;
