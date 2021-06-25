import {NavBar} from './components/NavBar/NavBar';
import {ItemListContainer} from './screens/ItemListContainer/ItemListContainer'

import {ItemDetailContainer} from './screens/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Cart } from './screens/cart/Cart'


function App() {
  return (
    <div>
      <BrowserRouter>
      <NavBar/>
        <Switch>
            <Route exact path="/">
                <ItemListContainer/>
            </Route>
            <Route exact path="/categoria/:categoriaID" >
              <ItemListContainer/>
            </Route>
            <Route  exact path="/detalle/:detalleID"> 
                <ItemDetailContainer/>
            </Route>
            <Route>
              <Cart exact path = "/cart"/>
            </Route>
            
        </Switch>

      </BrowserRouter>
    </div>
      
    
  );
}

export default App;





