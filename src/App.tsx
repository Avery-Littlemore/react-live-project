import { useEffect, useState } from 'react'
import './App.css'
import ProgressBar from './components/ProgressBar'

interface ProgressBar {
  id: number,
  isRunning: boolean,
}

function App() {
  const [progressBars, setProgressBars] = useState<ProgressBar[]>([])
  const [nextAvailable, setNextAvailable] = useState([1,2,3,4,5])

  const handleNewProgressBar = () => {
    setProgressBars(prev => prev.concat({
      id: prev.length + 1, 
      isRunning: false
    }))
  }

  const handleComplete = () => {
    setNextAvailable(prev => {
      return prev.slice(1).concat(prev[prev.length - 1] + 1)
  })
  }

  return (
    <div>
      {progressBars.map(pb => <ProgressBar key={pb.id} isRunning={nextAvailable.includes(pb.id)} onComplete={handleComplete} />)}
      <button onClick={handleNewProgressBar}>New Progress Bar</button>
    </div>
  )
}

export default App
