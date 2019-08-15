import React from 'react';
import { useRoutes } from 'hookrouter';
import routes from './routes'

import { Layout, Logo, Nav } from 'components'

function App() {
  const routeResult = useRoutes(routes);

  return (
    <Layout.App>
      <Logo />

      { routeResult }
      
      <Nav />
    </Layout.App>
  );
}

export default App;
