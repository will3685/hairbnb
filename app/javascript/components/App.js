import React from "react";
import { Route, Switch } from 'react-router-dom'

import Salons from "./Salons/Salons";
import Salon from "./Salon/Salon";

const App = () => {
  return (
   <Switch>
     <Route exact path="/salons" component={Salons} />
     <Route exact path="/salons/:slug" component={Salon}/>
   </Switch>
  )
}

export default App