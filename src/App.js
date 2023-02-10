import { Routes, Route } from 'react-router-dom';
import NoMatch from './components/NoMatch';
import Country from './components/country';
import { Countries } from './components/countries';

function App() {
  return (
    <div className="App">
      <>
       <Routes>
          <Route index path="/" element={<Countries/>} />
          <Route path="/country/:slug" element={<Country />} />
          <Route path="*" element={<NoMatch />} />
       </Routes>
      </>
      
    </div>
  );
}

export default App;
