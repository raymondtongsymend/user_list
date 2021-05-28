import { FunctionComponent } from "react";
import { UserData } from "./App";

type UserList1Props = {
  userDataList: Array<UserData>;
};

const UserList1: FunctionComponent<UserList1Props> = ({ userDataList }) => (
  <>
    <h1>User List 1</h1>
    <ul>
      {userDataList.map(
        ({ name: userName, client: clientName, vendor: vendorName }) => (
          <li key={userName}>
            User: {userName}, Client: {clientName}, Vendor: {vendorName}
          </li>
        )
      )}
    </ul>
  </>
);

export default UserList1;
