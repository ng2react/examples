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
    }, [parent])

    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        parent.name = e.target.value
    }

    const handleStatusChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setStatus(e.target.value)
    }

    const handleUpdateClick = () => {
        parent.updateStatus(status)
    }

    return (
        <div>
            <div>
                <label>
                    Name{' '}
                    <input
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
                        value={status}
                        onChange={handleStatusChange}
                    />
                </label>
                <button onClick={handleUpdateClick} name="status">
                    Update
                </button>
            </div>
        </div>
    )
}

export default RequireControllerExample
