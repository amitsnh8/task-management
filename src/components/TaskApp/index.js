import React, { useState, useEffect } from 'react';
//import './style.css';

 const TaskApp=()=> {
  const [edata, setEdata] = useState('');
  const [list, setList] = useState(null);
  const [removedlist, setRemovedlist] = useState(null);

  const changeEdata = (e) => {
    if (e.target.value !== '') {
      setEdata(e.target.value);
    }
  };
  const handleSubmit = () => {
    let nlist;
    if (list !== null) {
      nlist = list;
    } else {
      nlist = [];
    }
    if (edata !== '') {
      nlist.push(edata);
      setList(nlist);
      setEdata('');
    }
  };
  const handleOncheck = (index) => {
    console.log('index', index);
    let rlist;
    rlist = list;
    rlist.splice(index, 1);
    setRemovedlist(rlist);
  };
  useEffect(() => {
    if (removedlist !== null) {
      if (removedlist.length > 0) {
        setList(removedlist);
        setRemovedlist(null);
      } else {
        setList(null);
        setRemovedlist(null);
      }
    }
  }, [removedlist]);
  console.log('list', list);
  return (
    <>
      <div>
        <input type="text" name="todata" value={edata} onChange={changeEdata} />
        <button onClick={handleSubmit}>Add</button>
      </div>
      {list !== null && list.length > 0 ? (
        <>
          <ul>
            {list.map((todo, index) => {
              return (
                <>
                  <input
                    type="checkbox"
                    name="l"
                    onChange={() => handleOncheck(index)}
                  />
                  <li key={index}>{todo}</li>
                </>
              );
            })}
          </ul>
        </>
      ) : null}
    </>
  );
}
export default TaskApp;