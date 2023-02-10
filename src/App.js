import { Routes, Route } from 'react-router-dom';
import NoMatch from './components/NoMatch';
import Country from './components/country';
import { Countries } from './components/countries';

function App() {
  return (
    <div className="App">
      <>
       <Routes>
          <Route path="/" element={<Countries/>} />
          <Route path="/country/:slug" element={<Country />} />
          <Route path="*" element={<NoMatch />} />
       </Routes>
      </>
      {/* <CountriesGrid/> */}
    </div>
  );
}

export default App;
