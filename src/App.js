import {NavBar} from './components/NavBar/NavBar';
import {ItemListContainer} from './screens/ItemListContainer/ItemListContainer'
import {ItemDetailContainer} from './screens/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Cart } from './screens/cart/Cart';
import {CartComponentContext} from './CartContext/CartContext'


function App() {
  return <>
      <CartComponentContext>
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
            <Route  exact path = "/cart">
              <Cart/>
            </Route>
            
        </Switch>
        </BrowserRouter>
        </CartComponentContext>
    </>
}

export default App;





