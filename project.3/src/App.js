import React, { useState } from 'react';

import './App.less';
import { Button, Input, List, Tooltip, Modal } from 'antd';
import useCurrentId from './hooks/useCurrentId';
import useTextArea from './hooks/useTextArea';
import useVisible from './hooks/useVisible';
import useSearch from './hooks/useSearch';

const { Search } = Input;

function App() {
  const [notes, setnotes] = useState([]);
  const [value, setvalue, onText] = useTextArea();
  const [currentId, setcurrentId] = useCurrentId(notes, setvalue);

  const [visible, onActive, onIdActive, onCancle] = useVisible({
    setcurrentId,
    setvalue,
    setnotes,
    notes,
    currentId,
    value
  });

  const [search, onSearch, hasSearch] = useSearch();

  return (
    <div className="App">
      <List
        header={<div>
          <p>
            <Tooltip placement="topLeft" title={'새 메모'}>
              <Button onClick={onActive}>+</Button>
            </Tooltip>
          </p>
          <h2>Simple Note</h2>
          <Search value={search} onChange={onSearch} />
        </div>}
        footer={<></>}
        bordered
        dataSource={notes}
        renderItem={item => (
          hasSearch(item) &&
          <List.Item onClick={() => onIdActive(item.id)}>
            {item.content}
          </List.Item>
        )}
      />
      <Modal
        title=""
        wrapClassName="memo-wrapper"
        visible={visible}
        footer={[]}
        onOk={onCancle}
        onCancel={onCancle}
      >
        <textarea value={value} onChange={onText} />
      </Modal>
    </div>
  );
}

export default App;
