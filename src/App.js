import logo from './logo.svg';
import './styles/App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

import Item from './components/items/Item';
import Menu from './components/menus/Menu';
import Hello from './components/hello/Hello';
import Car from './components/cars/Car';
import Login from './components/login/Login';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Menu />
      </header>
    </div>
  );
}

export default App;
