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
  const [status, setStatus] = useState(parent.getStatus())

  useEffect(() => {
    setStatus(parent.getStatus())
  }, [parent])

  const handleStatusChange = (e) => {
    setStatus(e.target.value)
  }

  const handleUpdateClick = () => {
    parent.updateStatus(status)
  }

  return (
    <div>
      <label>
        Name <input value={parent.name} name="name" readOnly />
      </label>
      <div>
        <label>
          Status <input value={status} name="status" onChange={handleStatusChange} />
        </label>
        <button onClick={handleUpdateClick}>Update</button>
      </div>
    </div>
  )
}

export default RequireControllerExample
