import React from "react"
import UserList2VendorBreakdown from "./userList2VendorBreakdown";

export default function UserList2ClientBreakdown(props) {
    const client = props.client;
    const userDataList = props.userDataList;

    // filter users down to those that belong to the client
    let clientUserList = userDataList.filter((value, index, self) => {
        return value.client === client
    });

    // create a distinct list of vendors for the client
    let vendorList = [];
    clientUserList.map(userData => {
        vendorList.push(userData.vendor)
    });
    
    vendorList = vendorList.filter((value, index, self) => {
        return self.indexOf(value) === index;
    })
    

    return <div>
        <h2> {client} </h2>
        {
            vendorList.map(vendor => 
                <UserList2VendorBreakdown vendor={vendor} userDataList={userDataList} />)
        }
    </div>
}