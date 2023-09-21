import { Home } from './home';
import {Submit} from './Submit';
import { Route, Routes  } from 'react-router-dom';

function App() {

  return (
    <div className="App">
    <Routes>
<Route exact path='/' element={<Home />} />
<Route exact path='/Submit' element={<Submit />} />
</Routes>
    </div>
  
    
  
  )
}

export default App
