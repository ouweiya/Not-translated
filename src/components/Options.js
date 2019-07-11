import React, { useState, useEffect } from 'react';

export default _ => {
  const [Data, setData] = useState(null);

  useEffect(() => {
    chrome.storage.sync.get(null, d => {
      console.log('option:', d);
      setData(d);
    });
  }, []);

  chrome.storage.onChanged.addListener((changes, areaName) => {
    chrome.storage.sync.get(null, d => {
      console.log('option222:', d);
      setData(d);
    });
  });

  const arr = [];

  for (let i in Data) {
    arr.push(
      <div key={i}>
        <h4>
          {i} : {Data[i]}
        </h4>
      </div>
    );
  }

  return <>{arr}</>;
};
