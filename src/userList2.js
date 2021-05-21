import React from "react";
import { GetClientObjects } from "./util/userDataListUtil";

const UserList2 = ({ userDataList }) => {
  let clientObjectList = GetClientObjects(userDataList);

  return (
    <div>
      <h1> User List 2 </h1>
      {clientObjectList.map(({ name, vendors }) => (
        <UserList2Client name={name} vendors={vendors} />
      ))}
    </div>
  );
};

const UserList2Client = ({ name: clientName, vendors }) => (
  <div>
    <h2> Client: {clientName} </h2>
    {vendors.map(({ name, users }) => (
      <UserList2Vendor name={name} users={users} />
    ))}
  </div>
);

const UserList2Vendor = ({ name: vendorName, users }) => (
  <div>
    <h3> Vendor: {vendorName} </h3>
    <h4>Users</h4>
    {users.map(({ name }) => (
      <UserList2User name={name} />
    ))}
  </div>
);

const UserList2User = ({ name: userName }) => <p>{userName}</p>;

export default UserList2;
