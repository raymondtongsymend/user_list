import { FunctionComponent } from "react";
import { GetClientObjects } from "./util/userDataListUtil";
import { UserData } from "./App";

type UserList3Props = {
  userDataList: Array<UserData>;
};

const UserList3: FunctionComponent<UserList3Props> = ({ userDataList }) => {
  const clientObjectList = GetClientObjects(userDataList);

  return (
    <>
      <h1>User List 3 - Using Composition</h1>
      {clientObjectList.map(({ name: clientName, vendors }) => (
        <Header text={clientName} size="large" className="">
          {vendors.map(({ name, users }) => (
            <Header text={name} size="medium" className="">
              <Header text="Users" size="small" className="">
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

type HeaderProps = {
  text: string;
  size: string;
  className: string;
};

const Header: FunctionComponent<HeaderProps> = ({
  text,
  size,
  className,
  children,
}) => {
  const HeaderNode = () => {
    switch (size) {
      case "small":
        return <h3>{text}</h3>;
      case "medium":
        return <h2>{text}</h2>;
      case "large":
      default:
        return <h1>{text}</h1>;
    }
  };

  return (
    <div className={className} key={text}>
      <HeaderNode />
      {children}
    </div>
  );
};

type UserInfoProps = {
  name: string;
};

const UserInfo: FunctionComponent<UserInfoProps> = ({ name }) => (
  <p key={name}>{name}</p>
);

export default UserList3;
