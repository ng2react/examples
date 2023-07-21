import React, { useEffect, useState } from 'react'


const StateBindingExample = ({
  twoWayBinding,
  onTwoWayBindingChange,
  oneWayBinding: initialOneWayBinding,
  stringBinding: initialStringBinding,
  optionalOneWayBinding: initialOptionalOneWayBinding,
  optionalTwoWayBinding,
  onOptionalTwoWayBindingChange,
  optionalStringBinding: initialOptionalStringBinding,
  readOnlyOneWayBinding,
}: any) => {
  const [oneWayBinding, setOneWayBinding] = useState(initialOneWayBinding)
  const [stringBinding, setStringBinding] = useState(initialStringBinding)
  const [optionalOneWayBinding, setOptionalOneWayBinding] = useState(initialOptionalOneWayBinding)
  const [optionalStringBinding, setOptionalStringBinding] = useState(initialOptionalStringBinding)

  const [changeCounter, setChangeCounter] = useState({
    oneWayBinding: 0,
    stringBinding: 0,
    optionalOneWayBinding: 0,
    optionalStringBinding: 0,
    readOnlyOneWayBinding: 0,
  })

  useEffect(() => {
    setOneWayBinding(initialOneWayBinding)
    setChangeCounter((prev) => ({ ...prev, oneWayBinding: prev.oneWayBinding + 1 }))
  }, [initialOneWayBinding])

  useEffect(() => {
    setStringBinding(initialStringBinding)
    setChangeCounter((prev) => ({ ...prev, stringBinding: prev.stringBinding + 1 }))
  }, [initialStringBinding])

  useEffect(() => {
    setOptionalOneWayBinding(initialOptionalOneWayBinding)
    setChangeCounter((prev) => ({ ...prev, optionalOneWayBinding: prev.optionalOneWayBinding + 1 }))
  }, [initialOptionalOneWayBinding])

  useEffect(() => {
    setOptionalStringBinding(initialOptionalStringBinding)
    setChangeCounter((prev) => ({ ...prev, optionalStringBinding: prev.optionalStringBinding + 1 }))
  }, [initialOptionalStringBinding])

  useEffect(() => {
    setChangeCounter((prev) => ({ ...prev, readOnlyOneWayBinding: prev.readOnlyOneWayBinding + 1 }))
  }, [readOnlyOneWayBinding])

  return (
    <div className="stateBinding">
      <div>
        <label>
          2-Way Binding{' '}
          <input
            name="2-Way"
            type="checkbox"
            checked={twoWayBinding}
            onChange={(e) => onTwoWayBindingChange(e.target.checked)}
          />
        </label>
      </div>
      <div>
        <label>
          1-Way Binding{' '}
          <input
            name="1-Way"
            type="checkbox"
            checked={oneWayBinding}
            onChange={(e) => setOneWayBinding(e.target.checked)}
          />
        </label>
      </div>
      <div>
        <label>
          String Binding <input name="String" value={stringBinding} onChange={(e) => setStringBinding(e.target.value)} />
        </label>
      </div>
      <div>
        <label>
          2-Way Binding (optional){' '}
          <input
            name="Optional 2-Way"
            type="checkbox"
            checked={optionalTwoWayBinding}
            onChange={(e) => onOptionalTwoWayBindingChange(e.target.checked)}
          />
        </label>
      </div>
      <div>
        <label>
          1-Way Binding (optional){' '}
          <input
            name="Optional 1-Way"
            type="checkbox"
            checked={optionalOneWayBinding}
            onChange={(e) => setOptionalOneWayBinding(e.target.checked)}
          />
        </label>
      </div>
      <div>
        <label>
          String Binding (optional){' '}
          <input
            name="Optional String"
            value={optionalStringBinding}
            onChange={(e) => setOptionalStringBinding(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Readonly 1-Way Binding{' '}
          <input name="Readonly 1-Way" type="checkbox" checked={readOnlyOneWayBinding} disabled />
        </label>
      </div>
      <div>
        <label>
          onChanges Counter <pre>{JSON.stringify(changeCounter, null, 2)}</pre>
        </label>
      </div>
    </div>
  )
}

export default StateBindingExample