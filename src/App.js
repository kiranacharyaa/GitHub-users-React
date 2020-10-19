import React from 'react';
import {AppProvider} from './store/AppContext';
import {NavBar} from './components';
import {Home, FollowersPage, ReposPage} from './pages/';
import {BrowserRouter, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    return (
        <AppProvider>
            <div className="App">
                <BrowserRouter basename={process.env.PUBLIC_URL}>
                    <NavBar />
                    <Route path="/" exact component={Home} />
                    <Route path="/followers" exact component={FollowersPage} />
                    <Route path="/repos" exact component={ReposPage} />
                </BrowserRouter>
            </div>
        </AppProvider>
    );
}

export default App;
