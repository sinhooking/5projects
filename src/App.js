import React, { useEffect, useState } from 'react';
import { Button, Card } from 'antd';
import './App.less';
import Anser from './components/Anser';
import useQuizData from './hooks/useQuizData';
import useQuestionData from './hooks/useQuestionData';
import useStartQuiz from './hooks/useStartQuiz';

function App() {
  const [count, setcount] = useState(0);
  const [originalData] = useQuizData();
  const [rows, swapRow] = useQuestionData(originalData);
  
  useEffect(() => {
    if (originalData.length) {
      swapRow();
    }
  }, [originalData]);

  const [gameStart, onStart] = useStartQuiz();
  const [userRows, setuserRows] = useState([]);
  
  const onSubmit = (a_key) => {
    userRows[count] = a_key;
    setuserRows([...userRows])
    setcount(count + 1);
  }

  const onInit = () => {
    swapRow();
    setcount(0);
  };

  return (
    <div className="App">
      {!gameStart && (<Button type="primary" onClick={onStart}>Start</Button>)}
      {gameStart && <>
        {rows.map((question, index) => (
          <React.Fragment key={index}>
            {(index === count) &&
              <Card className="list-wrapper" title={`${count + 1}. ${question.q_name}`}>
                <ul>
                  {question.a_list.map(item => (
                    <li key={item.a_seq} onClick={() => onSubmit(item.a_seq)}>
                      {item.a_name}
                    </li>
                  ))}
                </ul>
              </Card >
            }
          </React.Fragment>
        ))}
      </>}
      {
        (count === rows.length) && <>
          <Anser rows={rows} userRows={userRows} />
          <Button type="primary" onClick={onInit}>reStart</Button>
        </>
      }
    </div>
  );
}

export default App;

