import React, { useEffect, useState } from 'react'

type Props = {
  name: string
  setName: (name: string) => void
  status: string
  updateStatus: (status: string) => void
}

const RequireControllerExample = ({ name, setName, status, updateStatus }: Props) => {
  const [localStatus, setLocalStatus] = useState(status)

  useEffect(() => {
    setLocalStatus(status)
  }, [status])

  const handleNameChange = (e) => {
    setName(e.target.value)
  }

  const handleStatusChange = (e) => {
    setLocalStatus(e.target.value)
  }

  const handleUpdateClick = () => {
    updateStatus(localStatus)
  }

  return (
    <div>
      <label>
        Name <input value={name} onChange={handleNameChange} name="name" />
      </label>
      <div>
        <label>
          Status <input value={localStatus} onChange={handleStatusChange} name="status" />
          <button onClick={handleUpdateClick}>Update</button>
        </label>
      </div>
    </div>
  )
}

export default RequireControllerExample
