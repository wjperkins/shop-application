import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import ProductsContainer from './features/products/ProductsContainer';
import NavBar from './features/common/NavBar';

function App() {
  return (
    <div>
      <CssBaseline />
      <NavBar>
        <ProductsContainer />
      </NavBar>
    </div>
  );
}

export default App;
