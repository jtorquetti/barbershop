import React from 'react';
import GlobalStyle from './globalStyles'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Navbar, Footer } from './components'
import Home from './pages/HomePage/Home';
import Services from './pages/Services/Services';
import Products from './pages/Products/Products';
import ScrollToTop from './components/ScrollToTop';
import Contacts from './pages/Contacts/Contacts';
import AboutUs from './pages/AboutUs/AboutUs';



function App() {
  return (
    <Router>
      <GlobalStyle />
      <ScrollToTop />
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/services" exact component={Services}/>
        <Route path="/products" exact component={Products}/>
        <Route path="/aboutus" exact component={AboutUs}/>
        <Route path="/contacts" exact component={Contacts}/>
      </Switch>
      <Footer />
    </Router>
  );
}


export default App;
