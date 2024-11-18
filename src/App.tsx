import { Router, Route } from '@solidjs/router';
import './App.css'
import { Nav } from './components/Nav/Nav'
import Home from './routes/Home';
import Footer from './components/Footer/Footer';
import News from './routes/News';
import Wishlist from './routes/Wishlist';
import Perfumes from './routes/Perfumes';
import Profile from './routes/Profile';

function App() {

  return (
    <div>
      <Nav />
      <Router>
          <Route path="/" component={Home}/>
          <Route path="/wishlist" component={Wishlist}/>
          <Route path="/news" component={News}/>
          <Route path="/perfumes" component={Perfumes}/>
          <Route path="/profile" component={Profile}/>
      </Router>
      <Footer />
    </div>
  )
}

export default App
