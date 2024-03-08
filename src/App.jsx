import { useState } from 'react'
import Navbar from './components/Navbar'
import Drawer from './components/Drawer'
import Card from './components/Card'
import QuizModal from './components/QuizModal'
import TopicModal from './components/TopicModal'

function App() {

  return (
    <>
    <section className='relative sm:px-10 px-4 duration-200'>
      <QuizModal />
      <TopicModal />


      <Navbar />
      <Drawer />

      <div className=''>
        <Card />

      </div>
      
    </section>
    </>
  )
}

export default App
