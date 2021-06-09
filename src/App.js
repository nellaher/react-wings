
import Button from '@material-ui/core/Button';
import {BarraNav} from './components/NavBar/NavBar';
import {Card} from './components/cards/Card';
import {BtnCard} from './components/cards/boton/Boton'
import ItemListContainer from './components/ItemListContainer/ItemList'



function App() {
  return (
    <div>
      <BarraNav></BarraNav>
      <ItemListContainer/>
      <Card titulo ="Producto" subtitulo ="Marca">
        <BtnCard/>
      </Card>
      <Button>Boton</Button>
    </div>
      
    
  );
}

export default App;





