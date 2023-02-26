import './App.scss';
import Agenda from './pages/agenda/Agenda';
import AppView from './pages/app/AppView';
import Carrer from './pages/career/Carrer';
import Events from './pages/events/Events';
import FiveSteps from './pages/fiveSteps/FiveSteps';
import Footer from './pages/footer/Footer';
import Intro from './pages/intro/Intro';
import { motion } from "framer-motion"

function App() {
  return (
    <motion.div className="App" viewport={{ once: true, amount: 0.8 }}>
      <Intro/>
      <FiveSteps/>
      <Carrer/>
      <Events/>
      <Agenda/>
      <AppView/>
      <Footer/>
    </motion.div>
  );
}

export default App;
