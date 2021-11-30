// import './App.css';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import LandingPage from './Screens/LandingPage/LandingPage';

function App() {
  return (
    <div className="App">
      <Header />
      <main style={{ minHeight: "90vh" }}>
        <LandingPage />
      </main>
      <Footer />
    </div>
  );
}

export default App;
