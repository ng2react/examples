import React, { useEffect, useState } from 'react'

type ParentCtrl = {
  name: string
  getStatus: () => string
  updateStatus: (status: string) => void
}

type Props = {
  parent: ParentCtrl
}

const RequireControllerExample = ({ parent }: Props) => {
  const [status, setStatus] = useState(parent.getStatus())
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

  const handleUpdateClick = () => {
    parent.updateStatus(status)
  }

  return (
    <div>
      <div>
        <label>
          Name <input type="text" value={name} onChange={handleNameChange} name="name" />
        </label>
      </div>
      <div>
        <label>
          Status <input type="text" value={status} onChange={handleStatusChange} />
        </label>
        <button onClick={handleUpdateClick} name="status">
          Update
        </button>
      </div>
    </div>
  )
}

export default RequireControllerExample
