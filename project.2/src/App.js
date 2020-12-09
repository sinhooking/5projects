import { Button, Input, List } from 'antd';
import { useState } from 'react';
import './App.less';

const data = [
  'Racing car sprays burning fuel into crowd.',
  'Japanese princess to wed commoner.',
  'Australian walks 100km after outback crash.',
  'Man charged over missing wedding girl.',
  'Los Angeles battles huge wildfires.',
];

function App() {
  const [state, setstate] = useState(data);

  const [inputStr, setinputStr] = useState('');
  const onChange = (e) => setinputStr(e.target.value);

  const onSubmit = () => {
    setstate([
      ...state,
      inputStr
    ])
    setinputStr('');
  }

  const onKeyDown = (e) => {
    if (e.keyCode !== 13) return;
    onSubmit();
  }

  const onRemove = (item) => {
    state.splice(state.indexOf(state.find(ob => ob === item)), 1)
    setstate([...state])
  }

  return (
    <div className="App">
      <List
        header={<div>Simple Todo App</div>}
        footer={
          <div className="flex-container">
            <Input value={inputStr} onChange={onChange} onKeyDown={onKeyDown} />
            <Button onClick={onSubmit}>Submit</Button>
          </div>
        }
        bordered
        dataSource={state}
        renderItem={item => (
          <List.Item actions={[<a key="list-remove" onClick={() => onRemove(item)}>remove</a>]}>{item}</List.Item>
        )}
      />
    </div>
  );
}

export default App;
