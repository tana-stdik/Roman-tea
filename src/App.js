import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {LanguageContext} from "./languageContext";
import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import MainPage from './components/MainPage/MainPage';
import About from './components/About/About';
import Contacts from './components/Contacts/Contacts';
import Delivery from './components/Delivery/Delivery';
import Payment from './components/Payment/Payment';
import ShopCartList from './components/Header/ShopCart/ShopCartList/ShopCartList';
import Items from './components/Items/Items';
import Footer from './components/Footer/Footer';

function App(props) {
  const [language, setLanguage] = useState ("ua");
  
  useEffect(() => {
    console.log(language)
 }, [language] )

  return (
    <BrowserRouter>
      <div className="App">
        <LanguageContext.Provider value={{language:language, setLanguage:setLanguage}}>
          <div class="grid__wrapper">
            <Header />
            <main className="grid__main">
              <Routes>
                <Route path="/" element={<MainPage goodsItem={props.state.goodsPage.goodsItem}/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/contacts" element={<Contacts/>}/>
                <Route path="/delivery" element={<Delivery/>}/>
                <Route path="/payment" element={<Payment/>}/>
                <Route path="/greenTea" element={<Items goodsItem={props.state.goodsPageGreenTea.goodsItem}/>}/>
                <Route path="/shopCartList" element={<ShopCartList goodsItem={props.state.goodsPageGreenTea.goodsItem}/>}/>
                <Route path="/blackTea" element={<Items goodsItem={props.state.goodsPageBlackTea.goodsItem}/>}/>
                <Route path="/disposableTea" element={<Items goodsItem={props.state.goodsPageDisposableTea.goodsItem}/>}/>
                <Route path="/phytoTea" element={<Items goodsItem={props.state.goodsPagePhytoTea.goodsItem}/>}/>
                <Route path="/strawberryLeaves" element={<Items goodsItem={props.state.goodsPageStrawberryLeaves.goodsItem}/>}/>
                <Route path="/otherGoods" element={<Items goodsItem={props.state.goodsPageOtherGoods.goodsItem}/>}/>
              </Routes>
            </main>
            <Footer />
          </div>
        </LanguageContext.Provider>
      </div>
  </BrowserRouter>
  );
}

export default App;
