import { BrowserRouter, Switch, Route } from 'react-router-dom';
import About from './components/about';
import Navbar from './components/header';
import Home from './components/main';
import Projects from './components/projects';
import Skills from './components/skills';

export default function Router() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path="/home" exact component={Home} />
        <Route path="/About" exact component={About} />
        <Route path="/skills" component={Skills} />
        <Route path="/projects" exact component={Projects} />
      </Switch>
    </BrowserRouter>
  );
}
