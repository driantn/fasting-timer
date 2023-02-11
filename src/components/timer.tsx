import useLocalStorage from 'use-local-storage';
import classNames from 'classnames';
import { twMerge } from 'tailwind-merge';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';

dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.extend(relativeTime);

dayjs.tz.setDefault('Europe/Berlin');

const low = 5;
const med = 10;
const high = 15;

export const TimerBubble = () => {
  const now = () => dayjs().tz();
  const [timer, setTimer] = useLocalStorage('fasting-time', now().format());
  const parsedTimer = dayjs(timer).tz();
  const diff = now().diff(parsedTimer, 'hours');

  return (
    <div
      className={twMerge(
        classNames(
          'rounded-full w-[200px] h-[200px] flex flex-col justify-center items-center font-bold text-white border-white border border-spacing-1',
          {
            'bg-orange-500': diff <= low,
            'bg-yellow-500': diff > low && diff <= med,
            'bg-blue-500': diff > med && diff <= high,
            'bg-green-500': diff >= high,
          },
        ),
      )}
    >
      <button onClick={() => setTimer(now().format())}>
        {dayjs(timer).from(dayjs(now()))}
      </button>
    </div>
  );
};
