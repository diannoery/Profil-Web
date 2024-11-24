import logo from './logo.svg';
import './App.css';
import HomePage from './HomePage'
import Sidebar from './SideBar';
function App() {
  return (
    <div className="flex h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <Sidebar />
      <HomePage/>
    </div>
    
  );
}

export default App;
