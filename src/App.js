import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import MainPage from './components/MainPage/MainPage';
import About from './components/About/About';
import Contacts from './components/Contacts/Contacts';
import Delivery from './components/Delivery/Delivery';
import Payment from './components/Payment/Payment';
import GreenTea from './components/GreenTea/GreenTea';
import Footer from './components/Footer/Footer';

function App(props) {
  return (
    <BrowserRouter>
    
    <div className="App">
      <div class="grid__wrapper">
        <Header />
        <main className="grid__main">
          <Routes>
            <Route path="/" element={<MainPage goodsItem={props.state.goodsPage.goodsItem}/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/contacts" element={<Contacts/>}/>
            <Route path="/delivery" element={<Delivery/>}/>
            <Route path="/payment" element={<Payment/>}/>
            <Route path="/greenTea" element={<GreenTea goodsItem={props.state.goodsPageGreenTea.goodsItem}/>}/>
            <Route path="/blackTea" element={<GreenTea goodsItem={props.state.goodsPageBlackTea.goodsItem}/>}/>
            <Route path="/disposableTea" element={<GreenTea goodsItem={props.state.goodsPageDisposableTea.goodsItem}/>}/>
            <Route path="/phytoTea" element={<GreenTea goodsItem={props.state.goodsPagePhytoTea.goodsItem}/>}/>
            <Route path="/strawberryLeaves" element={<GreenTea goodsItem={props.state.goodsPageStrawberryLeaves.goodsItem}/>}/>
            <Route path="/otherGoods" element={<GreenTea goodsItem={props.state.goodsPageOtherGoods.goodsItem}/>}/>
          </Routes>
        </main>
        <Footer />
      </div>
    </div>
      </BrowserRouter>
  );
}

export default App;
