import React from "react";
import "./assets/css/base/base.css";
import { Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./paginas/Home";
import Sobre from "./paginas/Sobre";
import Pagina404 from "./paginas/Pagina404";
import Post from "./paginas/Post";

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/sobre" component={Sobre} />
        <Route path="/post/:id" component={Post}/>
        <Route path="*" component={Pagina404} />
      </Switch>
    </>
  );
}

export default App;
