import './App.scss';
import Agenda from './pages/agenda/Agenda';
import AppView from './pages/app/AppView';
import Career from './pages/career/Career';
import Events from './pages/events/Events';
import FiveSteps from './pages/fiveSteps/FiveSteps';
import Footer from './pages/footer/Footer';
import Intro from './pages/intro/Intro';
import { LazyMotion, domAnimation} from "framer-motion"
import FloatingButton from './components/FloatingButton';

function App() {
  return (
    <LazyMotion className="App" features={domAnimation}>
      <FloatingButton/>
      <Intro/>
      <FiveSteps/>
      <Career/>
      <Events/>
      {/* <Agenda/> */}
      <AppView/>
      <Footer/>
    </LazyMotion>
  );
}

export default App;
