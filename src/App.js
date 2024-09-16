import './App.css';
import Header from "./components/head/header"
import LeftContent from './components/content/leftColumnContent'
import RightContent from './components/content/rightColumnContent';

function App() {
  return (
    <div className="App">
      <div className='app-mainfraim'>
        <div className="left-column-content">
          <Header />
          <LeftContent />
        </div>
        <div className="right-column-content">
          <RightContent />
        </div>
      </div>
    </div>
  );
}

export default App;
