import Sidebar from "./components/Sidebar";
import Home from './pages/Home';

function App() {
  return (
    <div className="flex h-screen bg-white text-black">
      <main className="main-home-screen">
        <Home />
      </main>
    </div>
  );
}

export default App;

