//Copyright  © 2020  Matt Roberts
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
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
export default AppRouter;