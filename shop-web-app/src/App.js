import React from 'react';
import { get } from './http';

function App() {
  return (
    <div>
      <button type="button" onClick={() => get('/api/values')}>
        Click me!
      </button>
    </div>
  );
}

export default App;
