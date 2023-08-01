import CartProvider from './Store/CartProvider';
import HeaderCard from './Components/headerCard';
import CandyInput from './Components/CandyInput';

import CandyShop from './Components/CandyShop';
import CartProvider from './Store/CartProvider';

function App() {
  return (
    <CartProvider>
      <HeaderCard />
      <CandyInput />
      <main>
      <CandyShop />
      </main>
      
    </CartProvider>
  );
}

export default App;
