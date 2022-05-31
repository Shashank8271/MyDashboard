// import logo from './logo.svg';
// import './App.css';
import Navbar from './components/Navbar';
import Textbox from './components/Textbox';
// import Placehold from './components/Placehold';


function App() {
  return (
    <>
     <Navbar pageName = "My Dashboard" /> 
     <div className="container"><Textbox submit = "Add New Schecule" /></div>
     {/* <Placehold /> */}

     
    </>
  
  )
};

export default App;
