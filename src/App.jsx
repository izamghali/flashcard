import { useState } from 'react'
import Navbar from './components/Navbar'
import Drawer from './components/Drawer'
import Card from './components/Card'
import CardModal from './components/CardModal'
import TopicModal from './components/TopicModal'
import TopicTitle from './components/TopicTitle'

function App() {

  return (
    <>
    <section className='relative duration-200'>
      <CardModal />
      <TopicModal />


      <Navbar />
      <Drawer />

      <div className='
        flex flex-col gap-8
        padding-x
        pt-6
        sm:pt-8
        xl:pt-10
         
      '>

        <TopicTitle />

        <div className='flex justify-center'>
          <Card />
        </div>

      </div>
      
    </section>
    </>
  )
}

export default App
