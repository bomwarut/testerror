import './App.css';

function teset() {
  const response = fetch('http://localhost:3000://', {  
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

function App() {
  teset(); 
  
  return (
    <div className="App">
    </div>
  );
}

export default App;
