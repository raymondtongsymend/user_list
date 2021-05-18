import './App.css';
import UserList from './userList';

function App() {

  const data = GetUserData();

  return (
    <div className="App">
      <header className="App-header">
        User List
      </header>
      <div>
        This is the body
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
