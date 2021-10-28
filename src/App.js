import './App.css';
import Header from "./components/HeaderComponent";
import Footer from "./components/FooterComponent";
import Generator from "./components/LandingComponent";
import ResponsivePlayer from "./components/VideoComponent";
import DashboardContent from "./components/dashboard/Dashboard"

function App() {
  return (
    <div className="App">
      <DashboardContent />
    </div>
  );
}

export default App;
