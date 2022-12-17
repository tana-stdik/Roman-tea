import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import MainPage from './components/MainPage/MainPage';


function App() {
  return (
    <div className="App">
      <div class="grid__wrapper">
        <Header />
        <div className="grid__main">
          <MainPage />
        </div>
        <div className="grid__footer footer">
          <div class="footer__reviews">
            reviews
          </div>
          <div className="footer__forTea">
            for tea
          </div>
          <div className="footer__contacts">
            contacts
          </div>
        </div>
      </div> 
    </div>
  );
}

export default App;
