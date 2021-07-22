import React from "react";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import SongsTable from "./pages/Songs";
import {useSelector} from "react-redux";
import Navigation from "./components/Navigation";
import ProductsTable from "./pages/Products";

const App = () => {

    const state = useSelector(state => state);

    return (
        <Router>
            <div className="App">  {/*router here*/}
                <Navigation />
                <Switch>
                    <Route exact path="/" render={() => <div>Homepage</div>} />
                    <Route exact path="/products" render={() => <ProductsTable state={state}/>} />
                    <Route exact path="/songs" render={() => <SongsTable state={state}/>} />
                    <Route exact path="/playlists" render={() => <div>Playlists</div>} />
                </Switch>
            </div>
        </Router>
    );
}

export default App;
