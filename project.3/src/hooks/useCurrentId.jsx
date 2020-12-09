import { useEffect, useState } from 'react';

const useCurrentId = (notes, setvalue) => {
    const [currentId, setcurrentId] = useState(false);
    useEffect(() => {
        if (notes.find(note => note.id === currentId)) {
          setvalue(notes.find(note => note.id === currentId).content);
        }
      }, [currentId]);

    return [currentId, setcurrentId];
}

export default useCurrentId;
