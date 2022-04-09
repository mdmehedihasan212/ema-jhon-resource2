import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';
import Order from './components/Order/Order';
import OrderReview from './components/OrderReview/OrderReview';
import Inventory from './components/Inventory/Inventory';
import SignUp from './components/SignUp/SignUp';
import LogIn from './components/LogIn/LogIn';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Shop></Shop>}></Route>
        <Route path='/shop' element={<Shop></Shop>}></Route>
        <Route path='/order' element={<Order></Order>}></Route>
        <Route path='/order-review' element={<OrderReview></OrderReview>}></Route>
        <Route path='/inventory' element={<Inventory></Inventory>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
        <Route path='/login' element={<LogIn></LogIn>}></Route>
      </Routes>
    </div>
  );
}

export default App;
