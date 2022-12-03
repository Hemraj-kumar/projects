import './App.css';
import socket from './components/socket';
import DashBoard from './components/Dashboard';

socket.on('fun' , ()=>{})

function App() {
  return (
    <DashBoard/>
  );
}



export default App;
