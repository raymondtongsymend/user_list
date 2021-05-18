import './App.css';
import UserList1 from './userList1';

function App() {

  const userDataList = GetUserData();

  return (
    <div className="App">
      <header className="App-header">
        User Lists
      </header>
      <div>
        <UserList1 userDataList={userDataList} />
      </div>
    </div>
  );
}

function GetUserData()
{
  const users = [
    { name: "Joe", client: "Shaw", vendor: "Shaw Wireless" },
    { name: "Bob", client: "Shaw", vendor: "Shaw Internet" },
    { name: "Sam", client: "Rogers", vendor: "Rogers Cellular" }
  ];

  return users;
}

export default App;
