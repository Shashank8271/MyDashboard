// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Textbox from './components/Textbox';

function App() {
  return (
    <>
     <Navbar pageName = "My Dashboard" /> 
     <div className="container"><Textbox submit = "Add New Schecule" /></div>
     
    </>
  
  )
};

export default App;
