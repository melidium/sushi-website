/* eslint-disable no-unused-vars */
// Other imports
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './css/app.css'

// Components
import Header from './Components/Header';
import Footer from './Components/Footer';
import Loader from './Components/Loader'

// Pages:
import ContactUs from './Routes/ContactUs';
import FAQt from './Routes/FAQ';
import Gallery from './Routes/Gallery';
import Home from './Routes/Home';
import Menu from './Routes/Menu';


function App() { 
  return (
  <div>
    <Loader/>
    <Header/>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/ContactUs" component={ContactUs} />
      <Route exact path="/FAQ" component={FAQt} />
      <Route exact path="/Menu" component={Menu} />
      <Route exact path="/Gallery" component={Gallery} />
    </Switch>
    <Footer/>
  </div>
)}


export default App;
