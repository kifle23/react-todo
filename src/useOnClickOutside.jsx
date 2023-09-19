import { useEffect } from 'react';
export const useOnClickOutside = (ref, currentState, updater) => {
  useEffect(() => {
    const handler = (event) => {
      if (currentState && ref.current && !ref.current.contains(event.target)) {
        updater();
      }
    };
    document.addEventListener('mousedown', handler);
    return () => {
      // Cleanup the event listener
      document.removeEventListener('mousedown', handler);
    };
  }, [ref, currentState, updater]);
};
