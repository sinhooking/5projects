import { useState } from 'react';
import { random } from 'lodash'

const useQuestionData = (originalData) => {
    const [rows, setrows] = useState([]);
    const swapRow = () => {
        const temp = {};
    
        originalData.map(ob => {
          const tempBody = {
            a_correct: ob.a_correct,
            a_name: ob.a_name,
            a_seq: ob.a_seq,
          };
    
          if (!temp[ob.q_seq]) {
            temp[ob.q_seq] = ({
              q_name: ob.q_name,
              a_list: [tempBody]
            })
          } else {
            temp[ob.q_seq].a_list.push(tempBody)
          }
    
          return false;
        })
    
        const dataTemp = []
        for (let i = 0; i < 20; i++) {
          dataTemp.push({ ...temp[random(1, 820)] });
        }
    
        setrows(dataTemp);
      }

    return [rows, swapRow];
}

export default useQuestionData;
