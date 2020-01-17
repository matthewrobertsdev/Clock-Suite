import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from '../view/Header';
import Home from '../view/Home';
import AboutPage from '../view/AboutPage';
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
                    <Route path="/about" exact component={AboutPage} />
                    <Route path="/contact" exact component={Home} />
                    <Route path="/privacy" exact component={Home} />
                    <Route component={Home} />
                </Switch>
            </div>
        </BrowserRouter>
    );
}