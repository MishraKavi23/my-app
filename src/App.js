import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './component/Layout';
import Home from './component/Home';
import Blog from './component/Blog';
import About from './component/About';
import Service from './component/Service';
import Contact from './component/Contact';

function App() {
  return (
      <>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Layout />}>
                  <Route index element={<Home />}></Route>
                  <Route path='blog' element={<Blog />}></Route>
                  <Route path='about' element={<About />}></Route>
                  <Route path='service' element={<Service />}></Route>
                  <Route path='contact' element={<Contact />}></Route>
              </Route>
          </Routes>
        </BrowserRouter>
      </>
  );
}

export default App;
