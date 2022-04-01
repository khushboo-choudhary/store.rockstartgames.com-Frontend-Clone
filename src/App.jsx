import Navbar from './components/Navbar/Navbar' 
import Footer from './components/Navbar/Footer' 
import AllRoutes from './Route/Routes';
import "./App.css"

function App() {
  return (
    <>
    <div className='App'>
    <Navbar/>
    <AllRoutes/>
    <Footer/>
    </div>
    
    </>
  );
}

export default App;