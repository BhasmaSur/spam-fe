import './App.css';
import AllRoutes from './routes';
import Test from './views/test/Test';

function App() {

  const theme = JSON.parse(localStorage.getItem('theme'));
  if (theme) {
    const { primaryColorCode, sideBarBg, isDark } = theme;
    primaryColorCode && document.documentElement.style.setProperty('--primary', primaryColorCode);
    sideBarBg &&
      document.documentElement.style.setProperty('--sidebar-bg', isDark ? sideBarBg : '#fff');
  }
  
  String.prototype.capitalize = function () {
    return this.charAt(0).toUpperCase() + this.slice(1);
  };
  return (
    <div className="App">
      <AllRoutes/>
    </div>
  );
}

export default App;
