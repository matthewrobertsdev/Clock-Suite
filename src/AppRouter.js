//Copyright  © 2020  Matt Roberts
import React from 'react';
import {Route, Switch, HashRouter } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import FAQ_Page from './pages/FAQ_Page';

import Footer from './components/Footer';
const AppRouter = () => {
    return (
        <HashRouter basename='/'>
                <Header />
                <Switch>
                <Route path="/" exact component={HomePage} />
                    {/*<Route path="/about" exact component={AboutPage} />*/}
                    <Route path="/contact" exact component={ContactPage} />
                    <Route path="/privacy" exact component={PrivacyPolicyPage} />
                    <Route path="/faq" exact component={FAQ_Page} />
                    <Route component={HomePage} />
                </Switch>
                <Footer/>
        </HashRouter>
    );
}
export default AppRouter;