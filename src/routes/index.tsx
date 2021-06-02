import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Create from '../pages/Create/Create';
import Detail from '../pages/Detail/Detail';
import Home from '../pages/Home/Home';


const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/detail/:id" exact component={Detail} />
      <Route path="/create" exact component={Create} />
    </Switch>
  );
};

export default Routes;
