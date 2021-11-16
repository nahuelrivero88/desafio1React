import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar/NavBar";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";




function App() {
  return (
    <div className="miApp">
      <NavBar />
      <ItemListContainer greeting='Distribuidora Riverinhio' />
      
    </div>
  );
}

export default App;
