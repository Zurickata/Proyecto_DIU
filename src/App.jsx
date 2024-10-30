import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './views/home';
import NavBar from './components/navbar';
import Footer from './components/footer';

function App() {
  return (
    <Router>
      <div>
        <NavBar/>
          <div className="App">
            <Routes>
              <Route path="/" element={< Home />} />
            </Routes>
          </div>
        <Footer />
      </div>
    </Router>
  )
}

export default App