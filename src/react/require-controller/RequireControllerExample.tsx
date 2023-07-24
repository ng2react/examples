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
    const [name, setName] = useState(parent.name)
    const [status, setStatus] = useState(parent.getStatus())
    const [initialStatus, setInitialStatus] = useState(parent.getStatus())

    useEffect(() => {
        const interval = setInterval(() => {
            if (parent.name !== name || parent.getStatus() !== initialStatus) {
                setStatus(parent.getStatus())
                setInitialStatus(parent.getStatus())
                setName(parent.name)
            }
        }, 1000)

        return () => clearInterval(interval)
    }, [parent.getStatus(), parent.name])

    const handleStatusChange = (e: any) => {
        setStatus(e.target.value)
    }

    const handleStatusUpdate = () => {
        parent.updateStatus(status)
    }

    const handleNameChange = (e: any) => {
        parent.name = e.target.value
        setName(e.target.value)
    }
    return (
        <div>
            <div>
                <label>
                    Name{' '}
                    <input
                        type="text"
                        value={parent.name}
                        onChange={handleNameChange}
                        name="name"
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
                        name="status"
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
