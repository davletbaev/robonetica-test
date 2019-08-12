import React from 'react';

import { Header, Logo, Nav } from 'components'
import { RequestPage } from 'modules'

function App() {

  return (
    <div className="App">
      <Header>
        <Logo />
      </Header>

      <RequestPage />
      
      <Nav />
    </div>
  );
}

export default App;
