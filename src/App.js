import './App.scss';
import Agenda from './pages/agenda/Agenda';
import AppView from './pages/app/AppView';
import Carrer from './pages/career/Carrer';
import Events from './pages/events/Events';
import FiveSteps from './pages/fiveSteps/FiveSteps';
import Footer from './pages/footer/Footer';
import Intro from './pages/intro/Intro';
import { LazyMotion, domAnimation} from "framer-motion"

function App() {
  return (
    <LazyMotion className="App" features={domAnimation}>
      <Intro/>
      <FiveSteps/>
      <Carrer/>
      <Events/>
      <Agenda/>
      <AppView/>
      <Footer/>
    </LazyMotion>
  );
}

export default App;
