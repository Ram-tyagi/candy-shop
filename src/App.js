

import Form from "./Components/Form";
import Cart from "./Components/Cart";
import ContextProvider from "./Store/ContextProvider";
import Model from "./Components/Model";

function App() {
  return (
    <ContextProvider>
      <div >
        <div >
          <Form />
          <Model />
        </div>
        <div >
          <Cart />
        </div>
      </div>
    </ContextProvider>
  );
}

export default App;