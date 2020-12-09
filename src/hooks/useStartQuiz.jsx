import { useState } from 'react';

const useStartQuiz = () => {
  const [gameStart, setGameStart] = useState(false);

  const onStart = () => setGameStart(true);

    return [gameStart, onStart];
}

export default useStartQuiz;
