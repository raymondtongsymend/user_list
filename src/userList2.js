import React from "react";

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

function GetClientObjects(userDataList) {
  let clientObjectList = [];

  userDataList.forEach(
    ({ name: userName, client: userClient, vendor: userVendor }) => {
      // find or create client object
      let clientObject = clientObjectList.find(
        ({ name: clientName }) => clientName === userClient
      );
      if (clientObject == null) {
        clientObject = { name: userClient, vendors: [] };
        clientObjectList.push(clientObject);
      }

      // find or create vendor object
      let vendorObject = clientObject.vendors.find(
        ({ name: vendorName }) => vendorName === userVendor
      );
      if (vendorObject == null) {
        vendorObject = { name: userVendor, users: [] };
        clientObject.vendors.push(vendorObject);
      }

      // add user
      let userObject = { name: userName };
      vendorObject.users.push(userObject);
    }
  );

  return clientObjectList;
}

export default UserList2;
