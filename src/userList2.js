import React from "react";
import { GetClientObjects } from "./util/userDataListUtil";

const UserList2 = ({ userDataList }) => {
  const clientObjectList = GetClientObjects(userDataList);

  return (
    <>
      <h1> User List 2 - Not Composition </h1>
      {clientObjectList.map(({ name, vendors }) => (
        <UserList2Client name={name} vendors={vendors} key={name} />
      ))}
    </>
  );
};

const UserList2Client = ({ name: clientName, vendors }) => (
  <>
    <h2> Client: {clientName} </h2>
    {vendors.map(({ name, users }) => (
      <UserList2Vendor name={name} users={users} key={name} />
    ))}
  </>
);

const UserList2Vendor = ({ name: vendorName, users }) => (
  <>
    <h3> Vendor: {vendorName} </h3>
    <h4>Users</h4>
    {users.map(({ name }) => (
      <UserList2User name={name} key={name} />
    ))}
  </>
);

const UserList2User = ({ name: userName }) => <p key={userName}>{userName}</p>;

export default UserList2;
