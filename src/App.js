import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar';
import Home from './component/Home';
import ImageSection from './component/Carousel';
import CardList from './component/CardList';
import Growth from './component/Growth';
import MarketingTool from './component/MarketingTool';
import Goodbye from './component/Goodbye';
import Footer from './component/Footer';

function App() {
  return (
    <div >
      <Navbar/>
      <Home/>
      <ImageSection/>
      <CardList/>
      <Growth/>
      <MarketingTool/>
      <Goodbye/>
      <Footer/>
    </div>
  );
}

export default App;
