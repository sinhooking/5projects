import { useState } from "react";

const useVisible = ({
    setcurrentId,
    setvalue,
    setnotes,
    notes,
    currentId,
    value
  }) => {
  const [visible, setvisible] = useState(false);

  const onActive = () => setvisible(true);
  
  const onIdActive = (id) => {
    setcurrentId(id);
    onActive();
  };

  const onCancle = () => {
    if (currentId === false) {
      setnotes([
        ...notes,
        {
          id: notes.length,
          content: value,
        }
      ])
    } else {
      notes.find(note => note.id === currentId).content = value;
      setnotes([...notes]);
    }

    setvalue('');
    setvisible(false);
    setcurrentId(false);
  }

  return [visible, onActive, onIdActive, onCancle];
};

export default useVisible;
