import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navi from './layouts/Navi';
import Hastaliklar from './layouts/Hastaliklar';
import {  Container } from 'react-bootstrap';
import Footer from './layouts/Footer';
import { Route, Routes } from 'react-router-dom';

import EgzersizListesi from './layouts/EgzersizListesi';
import HastalikDetail from './layouts/HastalikDetail';
import AdminPanel from './layouts/AdminPanel';
function App() {
  return (
    <div>
      <Container>
        <Navi></Navi>
       <Routes>
<Route path='/' element={<Hastaliklar/>}/>
<Route path='/hastaliklar/:id' element={<HastalikDetail/>}/>
<Route path='/egzersizler/:id' element={<EgzersizListesi/>}/>
<Route path='/adminpanel' element={<AdminPanel/>} />
       </Routes>
       <Footer></Footer>
      </Container>
    
      
    </div>
  );
}

export default App;
