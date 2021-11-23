import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar/NavBar";
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';



function App() {
  return (
    <div className="miApp">
      <NavBar />
      <ItemDetailContainer />
      
    </div>
  );
}

export default App;
