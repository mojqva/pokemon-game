import HomePage from './routes/Home';
import GamePage from './routes/Game';

import {useState} from 'react';

const App = () => {
  const [page, setPage] = useState('app');

  const ChangePage = (page) => {
    console.log('#### : <App/>');
    setPage(page);
  }
  
  switch(page){
    case "app":
      return <HomePage onChange = {ChangePage}/>
    case "game":
      return <GamePage 
                onChange = {ChangePage}
                title = "This is Game Page"
                descr = "A place for future battles "
              />
    default:
      return <HomePage/>
  }
}

export default App;