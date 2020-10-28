import { useEffect, useState } from 'react';

const usePositionZ = () => {
  let [position, setPosition] = useState(-100);

  useEffect(() => {
    const listener = (event: any) => {
      setPosition(position + event.deltaY * 0.1);
    };

    window.addEventListener('wheel', listener);

    return () => {
      window.removeEventListener('wheel', listener);
    };
  }, [position]);

  return position;
};

export default usePositionZ;
