import React from "react";
import { Route, Switch } from 'react-router-dom'

import Salons from "./Salons/Salons";
import Salon from "./Salon/Salon";
import Home from "./Home/Home";

const App = () => {
  return (
   <Switch>
     <Route exact path="/" component={Home} />
     <Route exact path="/salons" component={Salons} />
     <Route exact path="/salons/:slug" component={Salon}/>
   </Switch>
  )
}

export default App