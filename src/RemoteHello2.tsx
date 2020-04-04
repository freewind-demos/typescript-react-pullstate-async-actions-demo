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
  const [finished, result] = asyncFetch.useBeckon('RemoteHello2');

  if (!finished) {
    return <div>Loading...</div>;
  }

  return <div>
    // FIXME how to do this like "RemoteHello1"?
    {/*<button onClick={fetch}>Fetch remote message</button>*/}
    {
      result.error
        ? <div className='error'>Error: {result.message}</div>
        : <div className='success'>Hello, {result.payload}</div>
    }
  </div>
};
