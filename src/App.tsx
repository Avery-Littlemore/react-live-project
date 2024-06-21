import { useState } from 'react'
import './App.css'
import ProgressBarList from './components/ProgressBarList'

function App() {
  const [progressBarCount, setProgressBarCount] = useState(0)
  // const [timeStampQueue, setTimeStampQueue] = useState([])

  const handleNewProgressBar = () => {
    if (progressBarCount < 5) {
      setProgressBarCount(prev => prev + 1)
    }
  }

  return (
    <div>
      <ProgressBarList progressBarCount={progressBarCount} /*timeStampQueue={timeStampQueue} setTimeStampQueue={setTimeStampQueue}*/ />
      <button onClick={handleNewProgressBar}>New Progress Bar</button>
    </div>
  )
}

export default App
