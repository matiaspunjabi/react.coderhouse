import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
import ItemDetailContainer from './components/itemDetailContainer/ItemDetailContainer';


function App() {
  return (
    <>
      <NavBar/>
      <ItemListContainer/>
      <ItemDetailContainer/>
    </>
  );
}

export default App;
