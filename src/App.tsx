import { useEffect, useState } from 'react'
import './App.css'
// import ProgressBarList from './components/ProgressBarList'
import ProgressBar from './components/ProgressBar'

interface ProgressBar {
  id: number,
  isRunning: boolean,
}

function App() {
  const [progressBars, setProgressBars] = useState<ProgressBar[]>([])
  const [nextAvailable, setNextAvailable] = useState(1)

  const handleNewProgressBar = () => {
    setProgressBars(prev => prev.concat({
      id: prev.length + 1, 
      isRunning: false
    }))
  }

  const handleComplete = () => {
    setNextAvailable(prev => prev += 1)
  }

  return (
    <div>
      {progressBars.map(pb => <ProgressBar key={pb.id} isRunning={nextAvailable === pb.id} onComplete={handleComplete} />)}
      <button onClick={handleNewProgressBar}>New Progress Bar</button>
    </div>
  )
}

export default App
