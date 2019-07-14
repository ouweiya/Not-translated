import React, { useState, useEffect } from 'react';

export default _ => {
  const [Data, setData] = useState(null);
  const Change = () => {
    chrome.storage.sync.get(null, d => {
      console.log('option:', d);
      setData(d);
    });
  };

  useEffect(() => {
    Change();
  }, []);

  chrome.storage.onChanged.addListener((changes, areaName) => {
    Change();
  });

  const List = () => {
    const arr = [];
    for (let i in Data) {
      arr.push(
        <div key={i}>
          <h3>
            <span style={{ color: 'green', margin: '0 16px' }}>{i}</span>
            <span style={{ background: '#87ff79', padding: '0 10px' }}>{Data[i].join()}</span>
          </h3>
        </div>
      );
    }

    return arr;
  };

  return (
    <>
      <List />
    </>
  );
};
