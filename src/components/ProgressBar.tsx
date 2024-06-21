import { useEffect, useState } from "react"

interface ProgressBarProps {
  isRunning: boolean,
  onComplete: () => void
}

const ProgressBar = ({isRunning, onComplete}: ProgressBarProps) => {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    if (isRunning) {
      
      const incrementProgress = () => {
        setProgress(prev => Math.min(prev + 20, 100));
      };

      const progressInterval = setInterval(incrementProgress, 1000);

      const timeoutId = setTimeout(() => {
        clearInterval(progressInterval);
        onComplete()
      }, 5000);
      
      return () => {
        clearInterval(progressInterval);
        clearTimeout(timeoutId);   
      };
    }
  }, [isRunning]); 

  
  return (
    <div className="progressbar">
      <div style={{"width": `${progress}%`}}>{progress}%</div>
    </div>
  )
}

export default ProgressBar