import Nav from "./components/Nav";
import Todos from "./components/Todos";

import {Provider} from 'react-redux'
import store from './store/store.js'


function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Nav></Nav>
        <Todos/>
      </div>
    </Provider>
  );
}

export default App;
