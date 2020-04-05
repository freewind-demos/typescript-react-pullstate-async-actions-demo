import {createAsyncAction, errorResult, successResult} from "pullstate";
import React from 'react';
import fetchRemoteMessage from './fetchRemoteMessage';

const asyncFetch = createAsyncAction<string>(async (from) => {
  try {
    const result = await fetchRemoteMessage(from);
    return successResult(result);
  } catch (error) {
    return errorResult(undefined, error.message);
  }
});

export default function RemoteHello2() {
  const remoteFetch = asyncFetch.use('RemoteHello2', { initiate: false });

  if (remoteFetch.isLoading) {
    return <div>Loading...</div>;
  }

  return <div>
    <button onClick={() => asyncFetch.run("RemoteHello2")}>Fetch remote message</button>
    {remoteFetch.isFinished && remoteFetch.error && (<div className='error'>Error: {remoteFetch.message}</div>)}
    {remoteFetch.renderPayload(payload => <div className='success'>Hello, {payload}</div>)}
  </div>
};
