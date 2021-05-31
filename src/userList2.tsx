import { FunctionComponent } from "react";
import { GetClientObjects } from "./util/userDataListUtil";
import { UserData } from "./App";

type UserList2Props = {
  userDataList: Array<UserData>;
};

const UserList2: FunctionComponent<UserList2Props> = ({ userDataList }) => {
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

type UserList2ClientProps = {
  name: string;
  vendors: Array<UserList2VendorProps>;
};

const UserList2Client: FunctionComponent<UserList2ClientProps> = ({
  name,
  vendors,
}) => (
  <>
    <h2> Client: {name} </h2>
    {vendors.map(({ name, users }) => (
      <UserList2Vendor name={name} users={users} key={name} />
    ))}
  </>
);

type UserList2VendorProps = {
  name: string;
  users: Array<UserList2UserProps>;
};

const UserList2Vendor: FunctionComponent<UserList2VendorProps> = ({
  name,
  users,
}) => (
  <>
    <h3> Vendor: {name} </h3>
    <h4>Users</h4>
    {users.map(({ name }) => (
      <UserList2User name={name} key={name} />
    ))}
  </>
);

type UserList2UserProps = {
  name: string;
};

const UserList2User: FunctionComponent<UserList2UserProps> = ({ name }) => (
  <p key={name}>{name}</p>
);

export default UserList2;
