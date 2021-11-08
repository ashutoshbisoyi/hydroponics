import React from 'react';
import ControlTable from '../../components/control-table/ControlTable';

const Controls = () => {
  return (
    <div className='container controls pt-5'>
      <h2>Welcome Admin</h2>
      <p>A single application to operate your entire farming</p>
      <ControlTable />
    </div>
  );
};

export default Controls;
