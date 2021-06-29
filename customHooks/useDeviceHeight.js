import { useState, useEffect } from 'react';

function useDeviceHeight(initalHeight) {
  if (typeof window !== 'undefined') {
    const [heightCheck, setHeightCheck] = useState(window.innerHeight > initalHeight);

    const updateMedia = () => {
      setHeightCheck(window.innerHeight > initalHeight);
    };

    useEffect(() => {
      window.addEventListener('resize', updateMedia);

      return () => window.removeEventListener('resize', updateMedia);
    });

    return heightCheck;
  }
}

export default useDeviceHeight;
