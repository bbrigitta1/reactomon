import React from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import "./index.css";
import { Layout, Menu } from "antd";
import { Route, Switch, BrowserRouter, Link } from "react-router-dom";
import Pokemons from "./components/routing/Pokemons";
import Types from "./components/routing/Types";
import PokemonDetails from "./components/routing/PokemonDetails";
import Home from "./components/routing/Home";

const { Header, Content, Footer } = Layout;

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Layout>
          <Header style={{ position: "fixed", zIndex: 1, width: "100%" }}>
            <div className="logo" />
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
              <Menu.Item key="1">
                <Link to={"/"} className="nav-link">
                  Home
                </Link>
              </Menu.Item>
              <Menu.Item key="2">
                <Link to={"/pokemons"} className="nav-link">
                  Pokémons
                </Link>
              </Menu.Item>
              <Menu.Item key="3">
                <Link to={"/types"} className="nav-link">
                  Pokémon Types
                </Link>
              </Menu.Item>
            </Menu>
          </Header>
          <Content
            className="site-layout"
            style={{ padding: "0 50px", marginTop: 64 }}
          >
            <div
              className="site-layout-background"
              style={{ padding: 24, minHeight: 380 }}
            >
              <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/pokemons" exact component={Pokemons} />
                <Route path="/types" exact component={Types} />
                <Route path="/pokemons/:id" exact component={PokemonDetails} />
              </Switch>
            </div>
          </Content>
          <Footer style={{ textAlign: "center" }}></Footer>
        </Layout>
      </div>
    </BrowserRouter>
  );
}

export default App;
