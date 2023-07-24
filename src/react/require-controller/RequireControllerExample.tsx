import React, { useEffect, useState } from 'react'

type ParentCtrl = {
    name: string
    getStatus: () => string
    updateStatus: (status: string) => void
}

type Props = {
    parent: ParentCtrl
}

const RequireControllerExample = ({parent}: Props) => {
    const [status, setStatus] = useState(parent.getStatus())

    useEffect(() => {
        const interval = setInterval(() => {
            setStatus(parent.getStatus())
        }, 1000)

        return () => clearInterval(interval)
    }, [parent])

    const handleStatusChange = (e) => {
        setStatus(e.target.value)
    }

    const handleStatusUpdate = () => {
        parent.updateStatus(status)
    }

    return (
        <div>
            <div>
                <label>
                    Name{' '}
                    <input
                        type="text"
                        value={parent.name}
                        readOnly
                    />
                </label>
            </div>
            <div>
                <label>
                    Status{' '}
                    <input
                        type="text"
                        value={status}
                        onChange={handleStatusChange}
                    />
                </label>
                <button onClick={handleStatusUpdate}>
                    Update
                </button>
            </div>
        </div>
    )
}

export default RequireControllerExample
