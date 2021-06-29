import { useState, useEffect } from 'react';

function useDeviceWidth(initalWidth) {
  if (typeof window !== 'undefined') {
    const [widthCheck, setWidthCheck] = useState(window.innerWidth > initalWidth);

    const updateMedia = () => {
      setWidthCheck(window.innerWidth > initalWidth);
    };

    useEffect(() => {
      window.addEventListener('resize', updateMedia);

      return () => window.removeEventListener('resize', updateMedia);
    });

    return widthCheck;
  }
}

export default useDeviceWidth;
