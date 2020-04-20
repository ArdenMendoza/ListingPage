import React from 'react';
import './App.css';
import Header from './pages/pageHeader';
import Footer from './pages/pageFooter';
import ItemList from './pages/itemList';
import ItemDetails from './pages/itemDetails';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App" style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
        <Header />
        <div style={{ flex: 1, overflowY: 'auto', width: '1350px', margin: '0px auto' }}>
          <Switch>
            <Route path="/" exact component={ItemList} />
            <Route path="/itemDetails/:id" component={ItemDetails} />
          </Switch>
        </div>
        <Footer />
      </div>
    </BrowserRouter >
  );
}

export default App;
