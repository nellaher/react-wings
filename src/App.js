
import Button from '@material-ui/core/Button';
import {NavBar} from './components/NavBar/NavBar';
import {Card} from './components/cards/Card';
import {BtnCard} from './components/cards/boton/Boton'
import ItemListContainer from './components/ItemListContainer/ItemList'



function App() {
  return (
    <div>
      <NavBar/>
      <ItemListContainer/>
      <Card titulo ="Producto" subtitulo ="Marca">
        <BtnCard/>
      </Card>
      <Button>Boton</Button>
    </div>
      
    
  );
}

export default App;





