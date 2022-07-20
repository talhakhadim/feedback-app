import React from 'react';

import About from './pages/About';
import {BrowserRouter,Routes,Route} from'react-router-dom'
import feedbackData from './data/FeedbackData';
import Header from './components/Header';
import { FeedbackProvider } from './context/FeedbackContext';
import FeedbackList from './components/FeedbackList';
import FeedbackStats from './components/FeedbackStats';
import FeedbackForm from './components/FeedbackForm';
import AboutLink from './components/AboutLink';

function App() {
  return (
  <FeedbackProvider>
    <BrowserRouter>
        <Header/>
        <div className='container'>
        <Routes>
        <Route exact path='/' element={<>
        <FeedbackForm/>
        <FeedbackStats />
        <FeedbackList />
        <AboutLink/>
        </> }/>
        <Route path='/about' element={<About/>}/>
        </Routes>
       </div>
    </BrowserRouter>
</FeedbackProvider>  
  )
}

export default App;