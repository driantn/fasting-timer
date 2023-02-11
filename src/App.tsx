import { TimerBubble } from './components/timer';
import { Progress } from './components/progress';

function App() {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center bg-sky-800">
      <Progress />
      <TimerBubble />
    </div>
  );
}

export default App;
