import React from 'react';
import { useRoutes } from 'hookrouter';
import routes from './routes'

import { Layout, Header, Logo, Nav } from 'components'

function App() {
  const routeResult = useRoutes(routes);

  return (
    <Layout.App>
      <Header>
        <Logo />
      </Header>

      { routeResult }
      
      <Nav />
    </Layout.App>
  );
}

export default App;
