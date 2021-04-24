import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import { AboutScreen } from "./AboutScreen";
import { LoginScreen } from "./LoginScreen";
import { HomeScreen } from "./HomeScreen";
import { NavBar } from "./NavBar";


export const AppRouter = () => {
    return (

        <Router>
            {/* Se sugiere colocar un div siempre */}
            <div>

                <NavBar />

                <Switch>
                    {/* exact hace match con el path exacto indicado */}
                    <Route exact path="/" component={ HomeScreen } />
                    <Route exact path="/about" component={ AboutScreen } />
                    <Route exact path="/login" component={ LoginScreen } />

                    {/* Soluciona caso de path inexistente. Redireccionando a home */}
                    <Redirect to="/" />

                </Switch>

            </div>

        </Router>
        
    )
}
