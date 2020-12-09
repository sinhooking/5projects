import { useEffect, useState } from 'react';

const useQuizData = () => {
    const [originalData, setOriginalData] = useState([]);
    
    useEffect(() => {
        (async () => {
          const res = await fetch('/items.json');
          const items = await res.json();
         
          setOriginalData(items.DATA)
        })();
      }, []);
      
    return [originalData];
}

export default useQuizData;
