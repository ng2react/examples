import React, { useEffect, useState } from 'react'
import { useService } from '@ng2react/support'

const ServiceInjectionExample = () => {
  const myService = useService('myService') as any
  const [message, setMessage] = useState('')

  useEffect(() => {
    const fetchMessage = async () => {
      try {
        const msg = await myService.getMessage()
        setMessage(msg)
      } catch (e) {
        const err = e as Error;
        setMessage('Error: ' + err.message)
      }
    }

    fetchMessage()
  }, [myService])

  const updateMessage = async () => {
    try {
      await myService.setMessage(message)
      const msg = await myService.getMessage()
      setMessage(msg)
    } catch (e) {
      const err = e as Error;
      setMessage('Error: ' + err.message)
    }
  }

  return (
    <div>
      <label>
        Message <input value={message} onChange={(e) => setMessage(e.target.value)} />
      </label>
      <button onClick={updateMessage}>Send</button>
    </div>
  )
}

export default ServiceInjectionExample
