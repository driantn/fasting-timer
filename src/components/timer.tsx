import useLocalStorage from 'use-local-storage';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';

dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.extend(relativeTime);

dayjs.tz.setDefault('Europe/Berlin');

export const TimerBubble = () => {
  const now = () => dayjs().tz().format();
  const [timer, setTimer] = useLocalStorage('fasting-time', now());

  return (
    <button
      onClick={() => setTimer(now())}
      className="rounded-full w-[200px] h-[200px] flex flex-col justify-center items-center bg-green-500 font-bold"
    >
      {dayjs(timer).from(dayjs(now()))}
    </button>
  );
};
