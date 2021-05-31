import { FunctionComponent } from "react";
import { GetClientObjects } from "./util/userDataListUtil";
import { UserData } from "./App";
import { HeaderSize, Header } from "./util/header";

type UserList3Props = {
  userDataList: Array<UserData>;
};

const UserList3: FunctionComponent<UserList3Props> = ({ userDataList }) => {
  const clientObjectList = GetClientObjects(userDataList);

  return (
    <>
      <h1>User List 3 - Using Composition</h1>
      {clientObjectList.map(({ name: clientName, vendors }) => (
        <Header text={clientName} size={HeaderSize.Large} className="">
          {vendors.map(({ name, users }) => (
            <Header text={name} size={HeaderSize.Medium} className="">
              <Header text="Users" size={HeaderSize.Small} className="">
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
};

type UserInfoProps = {
  name: string;
};

const UserInfo: FunctionComponent<UserInfoProps> = ({ name }) => (
  <p key={name}>{name}</p>
);

export default UserList3;
