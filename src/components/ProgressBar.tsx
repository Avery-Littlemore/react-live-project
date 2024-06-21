import { useEffect, useState } from "react"

interface ProgressBarProps {
  progressBarId: number,
  progressBarQueue: number[],
  onFullyLoaded: () => void,
}

const ProgressBar = ({progressBarId, progressBarQueue, onFullyLoaded}: ProgressBarProps) => {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    if (progressBarId === progressBarQueue[0]) {
      // Define the increment function
      const incrementProgress = () => {
        setProgress(prev => Math.min(prev + 20, 100)); // Increment progress, capping at 100%
      };

      // Set the interval to increment progress
      const progressInterval = setInterval(incrementProgress, 1000);

      // Clean up the interval after 5 seconds or when component unmounts
      const timeoutId = setTimeout(() => {
        clearInterval(progressInterval);
        onFullyLoaded()
      }, 5000);
      
      // Cleanup function to clear interval and timeout when component unmounts
      return () => {
        clearInterval(progressInterval);
        clearTimeout(timeoutId);   
      };
    }
  }, [progressBarQueue]); // Empty dependency array to run the effect only once on mount
  // }

  
  return (
    <div className="progressbar">
      <div style={{"width": `${progress}%`}}>{progress}%</div>
    </div>
  )
}

export default ProgressBar