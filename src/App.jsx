import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar'
import TopicPage from './pages/TopicPage'
import LearnPage from './pages/LearnPage'

import { useSelector, useDispatch } from 'react-redux'

function App() {
  const count = useSelector((state) => state.value) // NOTE: should be state.counter.value, but because it only has 1 slice it's state.value
  const dispatch = useDispatch()

  const [ page, setPage ] = useState(false)

  return (
    <>
      <div className=' bg-white 
        flex items-center flex-col gap-4 
        h-screen sm:pt-0 pt-10
      '>
        <NavBar page={page} setPage={setPage} /> {/* FIX:  NavBar at the bottom when mobile screen  */}

        { page ? <LearnPage page={page} /> : <TopicPage page={page} /> }

      </div>
    </>
  )
}

{/* <h2>{count}</h2>
<div className='flex gap-4'>
  <button onClick={() => dispatch(decremented())} className='bg-red-400 py-2 px-6 rounded-md cursor-pointer'>-</button>
  <button onClick={() => dispatch(incremented())} className='bg-green-400 py-2 px-6 rounded-md cursor-pointer'>+</button>
</div> */}

export default App
