import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import CharacterDetail from './pages/CharacterDetail';
import Home from './pages/Home';
import QuoteDetail from './pages/QuoteDetail';
import Quotes from './pages/Quotes';

function App() {
    return (
        <BrowserRouter>
            <div  className="main">
                <div>
                    <nav className='nav'>
                        <Link to="/characters" className="nav_link">Characters </Link>
                        <span className='nav_link_seperator'>|</span>
                        <Link to="/quotes" className='nav_link'> Quotes</Link>
                    </nav>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/characters" element={<Home />} />
                        <Route path="/character/:char_id" element={<CharacterDetail />} />
                        <Route path="/quotes" element={<Quotes />} />
                        <Route path="/quotes/:quote_id" element={<QuoteDetail />} />
                    </Routes>
                </div>
                <footer>
                    <span className='footer_text'>Created By </span><span className='author'>Hüseyin Yazıcı</span>
                </footer>
            </div>
        </BrowserRouter>
    );
}

export default App;
