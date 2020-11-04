import { useEffect, useState } from 'react';

const usePositionZ = () => {
  let [position, setPosition] = useState(-200);

  useEffect(() => {
    const listener = (event: any) => {
      setPosition(position + event.deltaY * 0.02);
    };

    window.addEventListener('wheel', listener);

    return () => {
      window.removeEventListener('wheel', listener);
    };
  }, [position]);

  return position;
};

export default usePositionZ;
