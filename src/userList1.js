import React from "react"

export default function UserList1(props) {

    const userDataList = props.userDataList;

    return <div> 
        <h1>User List 1 - Basic Unordered </h1>
        <ul>
            { userDataList.map(userData => 
                <li key={userData.name}>
                    Name: {userData.name}, Client: {userData.client}, Vendor: {userData.vendor}
                </li>
            )}           
        </ul>
        
    </div>
}
