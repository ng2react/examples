import React, { useState } from 'react'
import Leaf from './Leaf'

const NonLeaf = () => {
  const [name, setName] = useState('John Doe')

  return (
    <div>
      <label>
        Name <input value={name} onChange={(e) => setName(e.target.value)} name="name" />
      </label>
      <Leaf name={name} />
    </div>
  )
}

export default NonLeaf
