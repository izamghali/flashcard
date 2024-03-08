import { useState } from 'react'
import Navbar from './components/Navbar'
import Drawer from './components/Drawer'
import Card from './components/Card'
import QuizModal from './components/QuizModal'
import TopicModal from './components/TopicModal'

function App() {

  return (
    <>
    <section className='relative'>
      <QuizModal />
      <TopicModal />


      <Navbar />
      <Drawer />

      <div className='p-10'>
        <Card />

      </div>
      
    </section>
    </>
  )
}

export default App
