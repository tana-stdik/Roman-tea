import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import MainPage from './components/MainPage/MainPage';
import About from './components/About/About';
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
            {/* <Route path="#" element={<News/>}/>
            <Route path="/#" element={<Music/>}/>
            <Route path="/#" element={<Setting/>}/> */}
          </Routes>
        </main>
        <Footer />
      </div>
    </div>
      </BrowserRouter>
  );
}

export default App;
