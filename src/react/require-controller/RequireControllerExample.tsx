import React, { useState, useEffect } from 'react'

type ParentCtrl = {
  name: string
  getStatus: () => string
  updateStatus: (status: string) => void
}

type Props = {
  parent: ParentCtrl
}

const RequireControllerExample = ({ parent }: Props) => {
  const [status, setStatus] = useState('')

  useEffect(() => {
    setStatus(parent.getStatus())
  }, [])

  useEffect(() => {
    const status = parent.getStatus()
    setStatus(status)
  }, [parent])

  const handleNameChange = (e) => {
    parent.name = e.target.value
  }

  const handleStatusChange = (e) => {
    setStatus(e.target.value)
  }

  const handleUpdateClick = () => {
    parent.updateStatus(status)
  }

  return (
    <div>
      <div>
        <label>
          Name <input value={parent.name} onChange={handleNameChange} name="name" />
        </label>
      </div>
      <div>
        <label>
          Status <input value={status} onChange={handleStatusChange} name="status" />
        </label>
        <button onClick={handleUpdateClick}>Update</button>
      </div>
    </div>
  )
}

export default RequireControllerExample
