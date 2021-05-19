import React from "react"

export default function UserList2VendorBreakdown(props) {
    const vendor = props.vendor;
    const userDataList = props.userDataList;

    // filter users down to those that belong to the vendor
    let vendorUserList = userDataList.filter((value, index, self) => {
        return value.vendor === vendor
    });

    return <div>
        <h2> {vendor} </h2>
        <h3> Users </h3>
        {
            vendorUserList.map(user => 
                <p>
                    {user.name}
                </p>)
        }
    </div>
}