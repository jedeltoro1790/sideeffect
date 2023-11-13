import './App.css'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AppRoutes from './AppRoutes';
import FooterApp from './FooterApp';
import AppBarMenu from './AppBarMenu';

function App() { 
  return (
    <>
      <Router>
        <AppBarMenu/>
        <Routes>
          {AppRoutes.map((route, index) =>{
              const { element, ...rest } = route;
              return <Route key={index} {...rest} element={element}/>;
          })}
        </Routes>
        <FooterApp/>
      </Router>
    </>
  )
}

export default App
