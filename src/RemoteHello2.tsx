import { createAsyncActionDirect } from "pullstate";
import React from 'react';
import fetchRemoteMessage from './fetchRemoteMessage';

const asyncFetch = createAsyncActionDirect(fetchRemoteMessage);

export default function RemoteHello2() {
  const remoteFetch = asyncFetch.use('RemoteHello2', { initiate: false });

  if (remoteFetch.isLoading) {
    return <div>Loading...</div>;
  }

  return <div>
    <button onClick={() => remoteFetch.execute()}>Fetch remote message</button>
    {remoteFetch.isFinished && remoteFetch.error && (<div className='error'>Error: {remoteFetch.message}</div>)}
    {remoteFetch.renderPayload((payload) => <div className='success'>Hello, {payload}</div>)}
  </div>
};
