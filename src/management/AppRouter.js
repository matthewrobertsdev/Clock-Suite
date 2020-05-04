import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from '../view/Header';
import Home from '../view/Home';
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
            <div>
                <Header />
                <Switch>
                <Route path="/" exact component={Home} />
                    {/*<Route path="/about" exact component={AboutPage} />*/}
                    <Route path="/contact" exact component={ContactPage} />
                    <Route path="/privacy" exact component={PrivacyPolicyPage} />
                    <Route component={Home} />
                </Switch>
                <Footer/>
            </div>
        </BrowserRouter>
    );
}