import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { Dayjs } from 'dayjs'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const smoothScroll = (targetId: string, duration: number = 200): void => {
  const target = document.getElementById(targetId);
  if (!target) return;

  const targetPosition = target.getBoundingClientRect().top + window.pageYOffset;
  const startPosition = window.pageYOffset;
  let startTime: number | null = null;

  const animation = (currentTime: number): void => {
    if (startTime === null) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const run = ease(timeElapsed, startPosition, targetPosition - startPosition, duration);
    window.scrollTo(0, run);
    if (timeElapsed < duration) requestAnimationFrame(animation);
  };

  // Easing function
  const ease = (t: number, b: number, c: number, d: number): number => {
    t /= d / 2;
    if (t < 1) return c / 2 * t * t + b;
    t--;
    return -c / 2 * (t * (t - 2) - 1) + b;
  };

  requestAnimationFrame(animation);
};


export const getTimeDifference = (timeStartSpin: Dayjs, timeStopSpin: Dayjs) => {
  return timeStopSpin.diff(timeStartSpin, 'seconds')
}
