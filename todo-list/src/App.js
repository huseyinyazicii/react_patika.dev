import { useState } from 'react';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';

function App() {
    const [list, setList] = useState([]);
    const [filter, setFilter] = useState("All");

    return (
        <div>
            <section className="todoapp">
                <Header list={list} setList={setList} />

                <Main list={list} setList={setList} filter={filter} />
            
                <Footer setFilter={setFilter} filter={filter} list={list} setList={setList} />
            </section>
        </div>
    );
}

export default App;
