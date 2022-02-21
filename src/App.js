import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navi from './layouts/Navi';
import Hastaliklar from './layouts/Hastaliklar';
import { Col, Container, Row } from 'react-bootstrap';
import Footer from './layouts/Footer';
import { Route, Routes } from 'react-router-dom';
import SignedIn from './layouts/SignedIn';
import SignedOut from './layouts/SignedOut';
function App() {
  return (
    <div>
      <Container>
        <Navi></Navi>
       <Routes>
<Route path='/' element={<Hastaliklar/>}/>
<Route path='/navi/:id' element={<Navi/>}/>
<Route path='/navi' element={<SignedOut/>}/>
<Route path='/navi/kayit' element={<SignedIn/>}/>
       </Routes>
      </Container>
     
      <Footer></Footer>
    </div>
  );
}

export default App;
