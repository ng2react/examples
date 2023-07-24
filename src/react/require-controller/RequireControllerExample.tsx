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
    const [status, setStatus] = useState('')

    useEffect(() => {
        setStatus(parent.getStatus())
    }, [])

    useEffect(() => {
        const unwatch = parent.getStatus()
        setStatus(unwatch)
    }, [parent])

    const handleStatusChange = (e) => {
        setStatus(e.target.value)
    }

    const handleUpdateStatus = () => {
        parent.updateStatus(status)
    }

    return (
        <div>
            <label>
                Name{' '}
                <input
                    value={parent.name}
                    onChange={(e) => (parent.name = e.target.value)}
                    name="name"
                />
            </label>
            <div>
                <label>
                    Status{' '}
                    <input value={status} onChange={handleStatusChange} name="status" />
                </label>
                <button onClick={handleUpdateStatus}>Update</button>
            </div>
        </div>
    )
}

export default RequireControllerExample
