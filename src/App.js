import './App.css';
import UserList1 from './userList1';
import UserList2 from './userList2';

function App() {

  const userDataList = GetUserData();

  return (
    <div className="App">
      <header className="App-header">
        User Lists
      </header>
      <div>
        <UserList1 userDataList={userDataList} />
        <UserList2 userDataList={userDataList} />
      </div>
    </div>
  );
}

function GetUserData()
{
  const users = [
    { name: "Joe", client: "Shaw", vendor: "Shaw Wireless" },
    { name: "Bob", client: "Shaw", vendor: "Shaw Internet" },
    { name: "Robert", client: "Shaw", vendor: "Shaw Internet" },
    { name: "Sam", client: "Rogers", vendor: "Rogers Cellular" }
  ];

  return users;
}

export default App;
