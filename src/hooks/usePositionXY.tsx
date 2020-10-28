import { useEffect, useState } from 'react';

const usePositionXY = () => {
  let [perspectiveOrigin, setPerspectiveOrigin] = useState({ x: 50, y: 50 });
  let maxGap = 0.1;
  const min = 45;
  const max = 55;

  useEffect(() => {
    const listener = (event: any) => {
      const xGap = (((event.clientX - window.innerWidth / 2) * 100) / (window.innerWidth / 2)) * -1;
      const yGap =
        (((event.clientY - window.innerHeight / 2) * 100) / (window.innerHeight / 2)) * -1;
      let newPerspectiveOriginX = perspectiveOrigin.x + (xGap * maxGap) / 100;
      let newPerspectiveOriginY = perspectiveOrigin.y + (yGap * maxGap) / 100;

      newPerspectiveOriginX = newPerspectiveOriginX < min ? min : newPerspectiveOriginX;
      newPerspectiveOriginX = newPerspectiveOriginX > max ? max : newPerspectiveOriginX;

      newPerspectiveOriginY = newPerspectiveOriginY < min ? min : newPerspectiveOriginY;
      newPerspectiveOriginY = newPerspectiveOriginY > max ? max : newPerspectiveOriginY;

      setPerspectiveOrigin({ x: newPerspectiveOriginX, y: newPerspectiveOriginY });
    };

    window.addEventListener('mousemove', listener);

    return () => {
      window.removeEventListener('mousemove', listener);
    };
  }, [perspectiveOrigin]);

  return perspectiveOrigin;
};

export default usePositionXY;
