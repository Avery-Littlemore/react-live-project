import { useEffect, useState } from "react"
import ProgressBar from "./ProgressBar"

interface ProgressBarListProps {
  progressBarCount: number,
}

const ProgressBarList = ({progressBarCount }: ProgressBarListProps) => {
  const [progressBarList, setProgressBarList] = useState<number[]>([])
  const [progressBarQueue, setProgressBarQueue] = useState<number[]>([])

  useEffect(() => {
    for (let i = progressBarList.length; i < progressBarCount; i += 1) {
      setProgressBarList(prev => prev.concat(i))
      setProgressBarQueue(prev => prev.concat(i))
    }
  }, [progressBarCount])

  const handleFullyLoaded = () => {
    setProgressBarQueue(prev => prev.slice(1))
  }

  console.log('list', progressBarList)
  console.log('queue', progressBarQueue)
  return (
    <div>
      {progressBarList.map(id => <ProgressBar key={id} progressBarId={id} progressBarQueue={progressBarQueue} onFullyLoaded={handleFullyLoaded} />)}
    </div>
  )
}

export default ProgressBarList