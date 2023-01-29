import './App.css';
import Agenda from './pages/agenda/Agenda';
import AppView from './pages/app/AppView';
import Carrer from './pages/career/Carrer';
import Events from './pages/events/Events';
import FiveSteps from './pages/fiveSteps/FiveSteps';
import Footer from './pages/footer/Footer';
import Intro from './pages/intro/Intro';

function App() {
  return (
    <div className="App">
      <Intro/>
      <FiveSteps/>
      <Carrer/>
      <Events/>
      <Agenda/>
      <AppView/>
      <Footer/>
    </div>
  );
}

export default App;
