//Copyright  © 2020  Matt Roberts
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from '../view/Header';
import HomePage from '../view/HomePage';
import ContactPage from '../view/ContactPage';
import PrivacyPolicyPage from '../view/PrivacyPolicyPage';
import Footer from '../view/Footer';
//homepage
//support
//about
//later: products
export default function AppRouter() {
    return (
        <BrowserRouter>
                <Header />
                <Switch>
                <Route path="/" exact component={HomePage} />
                    {/*<Route path="/about" exact component={AboutPage} />*/}
                    <Route path="/contact" exact component={ContactPage} />
                    <Route path="/privacy" exact component={PrivacyPolicyPage} />
                    <Route component={HomePage} />
                </Switch>
                <Footer/>
        </BrowserRouter>
    );
}