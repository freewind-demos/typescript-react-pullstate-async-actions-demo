import React from 'react'
import RemoteHello1 from './RemoteHello1';
import RemoteHello2 from './RemoteHello2';

export default function Hello() {
  return <div>
    <h2>Normal remote hello</h2>
    <RemoteHello1/>
    <hr/>
    <h2>Pullstate async remote hello</h2>
    <RemoteHello2/>
  </div>
};
