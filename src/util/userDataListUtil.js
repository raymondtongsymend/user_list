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

export { GetClientObjects };
