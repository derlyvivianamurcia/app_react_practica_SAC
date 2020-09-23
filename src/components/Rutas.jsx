import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import InsigniaPages from '../pages/InsigniaPages';
import InsigniaNueva from '../pages/InsigniaNueva';
import Layout from "./Layout";

function Rutas() {
  return (
    <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path='/' component={InsigniaPages} />
        <Route exact path='/insignianew' component={InsigniaNueva} />
      </Switch>
      </Layout>
    </BrowserRouter>

  );
}

export default Rutas;
