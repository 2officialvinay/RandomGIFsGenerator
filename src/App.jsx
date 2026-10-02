import './App.css'
import Random from './Components/Random'
import Tags from './Components/Tags'

function App() {
  
  return (
    <div className='w-full min-h-screen flex flex-col background items-center'>
      <h1 className='bg-white rounded-lg w-11/12 text-center mt-[40px] px-10 py-2 text-4xl font-bold'>RANDOM GIFS</h1>
      <div className='flex flex-col'>
        <Random />
        <Tags />
      </div>
    </div>
  )
}

export default App
