import React, {useState} from 'react';
import fetchRemoteMessage from './fetchRemoteMessage';

export default function RemoteHello1() {
  const [remoteMessage, setRemoteMessage] = useState<string>();
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string>();

  async function fetch() {
    setRemoteMessage(undefined);
    setErrorMessage(undefined);
    setLoading(true);

    try {
      const message = await fetchRemoteMessage('RemoteHello1')
      setRemoteMessage(message);
    } catch (error) {
      setErrorMessage(error.message);
    } finally {
      setLoading(false);
    }
  }

  return <div>
    {
      loading
        ? <div>Loading...</div>
        : <button onClick={fetch}>Fetch remote message</button>
    }
    {errorMessage !== undefined && <div className='error'>Error: {errorMessage}</div>}
    {remoteMessage !== undefined && <div className='success'>Hello, {remoteMessage}</div>}
  </div>;
};
