import React, { useState, useContext } from 'react';
import "./App.css";
import { Switch, Route } from 'react-router-dom';
import { __RouterContext } from 'react-router';
import { useTransition, animated } from 'react-spring';

import Header from "./component/Header/Header";
import Home from "./component/Home/Home";
import ProductView from "./component/ProductView/ProductView";
import Content from "./component/Content/Content";
import About from './component/About/About';
import Footer from "./component/Footer/Footer";


import data from "./component/data/doors.json";
const dataArr = data.PANORAMY;

function App() {

  const [scroll, setScroll] = useState(0);
  const [i, setI] = useState(0);
  const openProduct = (index) => {
    setI(index);
  }
  const sendScroll = (scrolling) => {
    setScroll(scrolling);
  }


  const { location } = useContext(__RouterContext);
  const transitions = useTransition(location, location => location.pathname, {
    trail: 10,
    from: { opacity: 0.2 },
    enter: { opacity: 1 },
    leave: { opacity: 0.2 }
  })
  return (
    <div className="App">

      <Header />
      <div className="body">
        {transitions.map(({ item, props, key }) => (
          <animated.div key={key} style={props}>
            <Switch location={item}>
              <Route exact path="/" component={() => {
                return <Home scroll={scroll} sendScroll={sendScroll} openProduct={openProduct} />
              }} />
              <Route path="/productView" component={() => {
                return <ProductView dataArr={dataArr[i]} />
              }} />
              <Route path="/content" component={() => {
                return <Content />
              }} />
              <Route path="/about" component={() => {
                return <About />
              }} />
            </Switch>

          </animated.div>
        ))}
      </div>
      <Footer />

    </div>
  )
}
export default App;