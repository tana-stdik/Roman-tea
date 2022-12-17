import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import MainPage from './components/MainPage/MainPage';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <div class="grid__wrapper">
        <Header />
        <div className="grid__main">
          <MainPage />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
