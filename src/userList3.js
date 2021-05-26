import React from "react";
import { GetClientObjects } from "./util/userDataListUtil";

const UserList3 = ({ userDataList }) => {
  const clientObjectList = GetClientObjects(userDataList);

  return <UserListTree clientObjectList={clientObjectList} />;
};

const UserListTree = ({ clientObjectList }) => (
  <>
    <h1>User List 3 - Using Composition</h1>
    {clientObjectList.map(({ name: clientName, vendors }) => (
      <ClientHeader clientName={clientName} key={clientName}>
        {vendors.map(({ name: vendorName, users }) => (
          <VendorHeader vendorName={vendorName} key={vendorName}>
            {users.map(({ name }) => (
              <UserInfo name={name} key={name} />
            ))}
          </VendorHeader>
        ))}
      </ClientHeader>
    ))}
  </>
);

const ClientHeader = (props) => (
  <div key={props.clientName}>
    <h2>Client: {props.clientName} </h2>
    {props.children}
  </div>
);

const VendorHeader = (props) => (
  <div key={props.vendorName}>
    <h3> Vendor: {props.vendorName} </h3>
    {props.children}
  </div>
);

const UserInfo = ({ name: userName }) => <p key={userName}>{userName}</p>;

export default UserList3;
