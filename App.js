import './App.css';
import Navbar from './components/Navbar';
import TempForm from './components/tempform';


function App() {
  return (
    <>
      <Navbar title='React Shahab' aboutText='About us' /> 
      <div className='container'>
      <TempForm heading='Enter the text to analzye below'/>

      </div>

      
    </>
  );
}

export default App;
