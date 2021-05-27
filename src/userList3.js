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
      <Header headerText={clientName} size="large">
        {vendors.map(({ name: vendorName, users }) => (
          <Header headerText={vendorName} size="medium">
            <Header headerText="Users" size="small">
              {users.map(({ name }) => (
                <UserInfo name={name} key={name} />
              ))}
            </Header>
          </Header>
        ))}
      </Header>
    ))}
  </>
);

const Header = ({ headerText, size, className, children }) => {
  const HeaderNode = () => {
    switch (size) {
      case "small":
        return <h3>{headerText}</h3>;
      case "medium":
        return <h2>{headerText}</h2>;
      case "large":
      default:
        return <h1>{headerText}</h1>;
    }
  };

  return (
    <div className={className} key={headerText}>
      <HeaderNode />
      {children}
    </div>
  );
};

const UserInfo = ({ name: userName }) => <p key={userName}>{userName}</p>;

export default UserList3;
