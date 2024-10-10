import logo from './logo.svg';
import './styles/App.css';
import './styles/index.css';

import Item from './views/items/Item';
import Menu from './views/menus/Menu';
import Hello from './views/hello/Hello';
import Car from './views/cars/Car';
import Login from './views/login/Login';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Item />
        <Menu />
        <Hello />
        <Car />
        <Login />
      </header>
    </div>
  );
}

export default App;
