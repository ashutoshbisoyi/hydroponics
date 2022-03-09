import React from 'react';
import ControlTable from '../../components/control-table/ControlTable';
import TestInputFirebase from '../../components/test-input-firebase/TestInputFirebase';

const Controls = () => {
  return (
    <div className='container controls pt-5'>
      <h2>Welcome Admin</h2>
      <p>A single application to operate your entire farming</p>

      {/* test data  */}
      <TestInputFirebase />

      <ControlTable />
    </div>
  );
};

export default Controls;
