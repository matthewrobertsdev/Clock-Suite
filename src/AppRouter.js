//Copyright  © 2020  Matt Roberts
import React from 'react';
import { BrowserRouter, Route, Switch, HashRouter } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import Footer from './components/Footer';
//homepage
//support
//about
//later: products
const AppRouter = () => {
    return (
        <HashRouter basename='/'>
                <Header />
                <Switch>
                <Route path="/Clock-Suite" exact component={HomePage} />
                    {/*<Route path="/about" exact component={AboutPage} />*/}
                    <Route path="/Clock-Suite/contact" exact component={ContactPage} />
                    <Route path="/Clock-Suite/privacy" exact component={PrivacyPolicyPage} />
                    <Route component={HomePage} />
                </Switch>
                <Footer/>
        </HashRouter>
    );
}
export default AppRouter;