import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from './ponents/Menu'

function App() {
  return (
    <div className="App">
      <div class="grid__wrapper">
        <div class="grid__header header">
          <div class="header__logo">
            Logo
          </div>
          <Menu />
          <div class="header__likes">
            likes
          </div>
          <div class="header__shoppingCart">
            shopping cart
          </div>
          <div class="header__languageSelection">
            language selection
          </div>
        </div> 
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
