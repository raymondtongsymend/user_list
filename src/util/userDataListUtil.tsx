import { UserData } from "../App";

function GetClientObjects(userDataList: Array<UserData>) {
  let clientObjectList: Array<Client> = [];

  userDataList.forEach(
    ({ name: userName, client: userClient, vendor: userVendor }) => {
      // find or create client object
      let clientObject = clientObjectList.find(
        ({ name: clientName }) => clientName === userClient
      ) ?? { name: userClient, vendors: [] };
      clientObjectList.push(clientObject);

      // find or create vendor object
      let vendorObject = clientObject.vendors.find(
        ({ name: vendorName }) => vendorName === userVendor
      ) ?? { name: userVendor as string, users: [] };

      clientObject.vendors.push(vendorObject);

      // add user
      let userObject = { name: userName };
      vendorObject.users.push(userObject);
    }
  );

  return clientObjectList;
}

type Client = {
  name: string;
  vendors: Array<Vendor>;
};

type Vendor = {
  name: string;
  users: Array<User>;
};

type User = {
  name: string;
};

export { GetClientObjects };
