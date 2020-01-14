import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
//homepage
//support
//about
//later: products
export default function AppRouter() {
    return (
        <BrowserRouter>
            <div>
                <Header />
                <Switch>
                <Route path="/" exact component={Home} />
                    <Route path="/about" exact component={Home} />
                    <Route path="/contact" exact component={Home} />
                    <Route component={Home} />
                </Switch>
            </div>
        </BrowserRouter>
    );
}