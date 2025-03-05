import './App.css';
import Navbar from './components/Navbar';
import TempForm from './components/tempform'; // Ensure correct case

function App() {
  return (
    <>
      <Navbar title="React Shahab" aboutText="About us" />
      <div className="container">
        <TempForm heading="Enter the text to analyze below" /> {/* Fixed spelling */}
      </div>
    </>
  );
}

export default App;
