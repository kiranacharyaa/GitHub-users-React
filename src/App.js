import React from 'react';
import {AppProvider} from './context/AppContext';
import {NavBar} from './components';
import {Home, FollowersPage, ReposPage} from './pages/';
import {BrowserRouter, Route } from 'react-router-dom';

function App() {
    return (
        <AppProvider>
            <div className="App">
                <BrowserRouter>
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
