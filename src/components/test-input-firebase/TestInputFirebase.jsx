import React, { useState } from 'react';
import { uid } from 'uid';
//firebase
import { set, ref } from 'firebase/database';
import { db } from '../../firebase';

const TestInputFirebase = () => {
  const [moisture, setMoisture] = useState(0);
  const sendDataToFirebase = () => {
    const uuid = uid();
    console.log('sending', { moisture, uuid });
    set(ref(db, `/moistureData`), {
      moisture,
      uuid,
    });
    setMoisture(0);
  };
  return (
    <div className='my-5'>
      <input
        type='number'
        className='me-3 p-2'
        value={moisture}
        onChange={(e) => setMoisture(e.target.value)}
      />
      <button className='filled' onClick={sendDataToFirebase}>
        Update
      </button>
    </div>
  );
};

export default TestInputFirebase;
