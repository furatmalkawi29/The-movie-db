import Header from './components/Header/Header'
import Main from './components/Main/Main';
import {Provider} from 'react-redux'
import store from "./redux/store";
import React from 'react';
   
function App() {
  return (
    <React.Fragment>
    <Provider store={store}>
    <Header/>
    <Main/>
   </Provider>
    </React.Fragment>
  );
}

export default App;
