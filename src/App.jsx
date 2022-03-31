import Navbar from './components/Navbar' 
import Svg from './components/Svg' 
import Footer from './components/Footer' 
import AllRoutes from './Route/Routes';
import "./App.css"

function App() {
  return (
    <>
    <div className='App'>
    <Navbar/>
    <AllRoutes/>
    <Svg/>
    <Footer/>
    </div>
    
    </>
  );
}

export default App;