**Approach:**
- I have renamed the component to NonLeaf
- I have converted the controller into a functional component
- I have replaced the ng-model directive with a controlled component in React
- I have assumed that the Leaf component has been converted to React and is available for import

**Assumptions:**
- I am assuming that the Leaf component has been converted to React and is available for import
- I am assuming that the name state is managed by the NonLeaf component and passed down to the Leaf component

**Potential Issues:**
- If the Leaf component has not been converted to React, this code will not work

```tsx

import React, { useState } from 'react'
import Leaf from './Leaf'

const NonLeaf = () => {
    const [name, setName] = useState('John Doe')

    return (
        <div>
            <label>
                Name{' '}
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    name="name"
                />
            </label>
            <Leaf name={name} />
        </div>
    )
}

```