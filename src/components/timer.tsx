import useLocalStorage from 'use-local-storage';
import classNames from 'classnames';
import { twMerge } from 'tailwind-merge';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(relativeTime);

const tzName = 'Europe/Berlin';

const low = 5;
const med = 10;
const high = 15;

export const TimerBubble = () => {
  const now = () => dayjs();
  const [timer, setTimer] = useLocalStorage('fasting-time', now().format());
  const parsedTimer = dayjs(timer);
  const diff = now().diff(parsedTimer, 'hour');

  return (
    <div
      className={twMerge(
        classNames(
          'rounded-full w-[200px] h-[200px] flex flex-col justify-center items-center font-bold text-white border-white border border-spacing-1 relative overflow-hidden',
          {
            'bg-orange-500': diff <= low,
            'bg-yellow-500': diff > low && diff <= med,
            'bg-blue-500': diff > med && diff <= high,
            'bg-green-500': diff >= high,
          },
        ),
      )}
    >
      <button
        className="w-full h-full"
        onClick={() => setTimer(now().format())}
      >
        <div>{diff}</div>
        {dayjs(timer).from(dayjs(now()))}
      </button>
    </div>
  );
};
