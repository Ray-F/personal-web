import React, { useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import IndexPage from './pages/IndexPage';

const RedirectRoute = ({ redirectUrl }: { redirectUrl: string }) => {
  useEffect(() => {
    window.location.href = redirectUrl;
  }, []);

  return (
    <>
    </>
  );
};

export default function MainRouter() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={'/'} component={IndexPage} />

        <Route exact path={'/linkedin'}>
          <RedirectRoute redirectUrl={'https://linkedin.com/in/raymond-feng-nz'} />
        </Route>

        {/* Default path if nothing matches */}
        <Route path={'/'} component={IndexPage} />
      </Switch>
    </BrowserRouter>
  );
}
