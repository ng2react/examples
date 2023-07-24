import React, { useEffect, useState } from 'react'

type ParentCtrl = {
  getStatus: () => string
  updateStatus: (status: string) => void
  name: string
}

type Props = {
  parent: ParentCtrl
}

const RequireControllerExample = ({ parent }: Props) => {
  const [status, setStatus] = useState('')
  const [name, setName] = useState(parent.name)

  useEffect(() => {
    setStatus(parent.getStatus())
  }, [parent])

  const handleStatusChange = (e) => {
    setStatus(e.target.value)
  }

  const handleNameChange = (e) => {
    setName(e.target.value)
  }

  const handleUpdateStatus = () => {
    parent.updateStatus(status)
  }

  return (
    <div>
      <label>
        Name <input value={name} onChange={handleNameChange} name="name" />
      </label>
      <div>
        <label>
          Status <input value={status} onChange={handleStatusChange} name="status" />
        </label>
        <button onClick={handleUpdateStatus}>Update</button>
      </div>
    </div>
  )
}

export default RequireControllerExample
