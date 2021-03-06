import HomePage from './routes/Home';
import GamePage from './routes/Game';
import MenuHeader from './components/MenuHeader';
import Footer from './components/Footer';
import About from './routes/About';
import Contact from './routes/Contact';
import NotFound from './routes/NotFound';
import Firebase from './service/firebase';

import {useLocation, useRouteMatch, Switch, Route, Redirect} from 'react-router-dom';

import cn from 'classnames';

import s from './App.module.css';
import {FireBaseContext} from './context/firebaseContext';


const App = () => {
  const location = useLocation();
  const isPadding = location.pathname === '/' || location.pathname === '/home' || location.pathname === '/game/board';

  return (
    <FireBaseContext.Provider value = {new Firebase()}>
      <Switch>
          <Route path = "/404" component = {NotFound}/>
          <Route>
          <>
            <MenuHeader bgActive = {!isPadding}/>
            <div className = {cn(s.wrap, {
              [s.isHomePage] : isPadding}
            )}>
              <Switch>
                <Route path = "/" exact component = {HomePage}/>
                <Route path = "/home" exact component = {HomePage}/>
                <Route path = "/game" component = {GamePage}/>
                <Route path = "/about" component={About}/>
                <Route path = "/contact" component = {Contact}/>
                <Route render={() => (
                    <Redirect to = "/404"/>
                )}/>
              </Switch>
            </div>
            
            <Footer/>
          </>  
        </Route>
        

      </Switch>
    </FireBaseContext.Provider>
  )
}

export default App;