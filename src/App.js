import { BrowserRouter, Routes, Route } from "react-router-dom";
import Task from './Components/Task';
import HomePage from './Components/HomePage';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Task />} />
        <Route path='/home' element={<HomePage/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App



