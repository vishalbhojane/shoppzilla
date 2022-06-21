import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header';
import Store from './components/Store';

function App() {
  return (
    <>
      <BrowserRouter>
        <div className='container'>
          <div className='app-container'>
            <Header />
            <Routes>
              <Route path='/store' element={<Store />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;