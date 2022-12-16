import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from './components/Menu/Menu';
import Header from './components/Header';


function App() {
  return (
    <div className="App">
      <div class="grid__wrapper">
        <Header />
        <div class="grid__main">
          Main
        </div>
        <div class="grid__footer footer">
          <div class="footer__reviews">
            reviews
          </div>
          <div class="footer__forTea">
            for tea
          </div>
          <div class="footer__contacts">
            contacts
          </div>
        </div>
      </div> 
    </div>
  );
}

export default App;
