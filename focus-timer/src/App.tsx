import { useState, useEffect } from 'react';

const formatTime = (totalSeconds: number): string => {
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  const formattedSeconds = seconds.toString().padStart(2, '0');

  return `${minutes}:${formattedSeconds}`;
};

const App = () => {
  const [seconds, setSeconds] = useState<number>(1500);
  const [isRunning, setIsRunning] = useState<boolean>(false);

  const decreaseSeconds = () => {
    setSeconds((prevSeconds) => prevSeconds - 1);
  };

  const toggleTimer = () => {
    setIsRunning((prevIsRunning) => !prevIsRunning);
  };

  const resetTimer = () => {
    setSeconds(1500);
    setIsRunning(false);
  };

  useEffect(() => {
    if (!isRunning || seconds === 0) return;

    const timer = setInterval(() => {
      setSeconds((prevSeconds) => {
        if (prevSeconds <= 1) {
          setIsRunning(false);
          return 0;
        }

        return prevSeconds - 1;
      });
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [isRunning]);

  return (
    <main className="app">
      <section>
        <h1>Focus Timer</h1>
        <p>{formatTime(seconds)}</p>
        <button onClick={toggleTimer}>{isRunning ? 'Pause' : 'Start'}</button>
        <button onClick={resetTimer}>Reset</button>
      </section>
    </main>
  );
};

export default App;
