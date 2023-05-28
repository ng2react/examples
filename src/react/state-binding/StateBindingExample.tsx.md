```jsx
import React, { useState, useEffect } from 'react';

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
}) => {
  const [oneWayBinding, setOneWayBinding] = useState(initialOneWayBinding);
  const [stringBinding, setStringBinding] = useState(initialStringBinding);
  const [optionalOneWayBinding, setOptionalOneWayBinding] = useState(
    initialOptionalOneWayBinding
  );
  const [optionalStringBinding, setOptionalStringBinding] = useState(
    initialOptionalStringBinding
  );

  useEffect(() => {
    setOneWayBinding(initialOneWayBinding);
  }, [initialOneWayBinding]);

  useEffect(() => {
    setStringBinding(initialStringBinding);
  }, [initialStringBinding]);

  useEffect(() => {
    setOptionalOneWayBinding(initialOptionalOneWayBinding);
  }, [initialOptionalOneWayBinding]);

  useEffect(() => {
    setOptionalStringBinding(initialOptionalStringBinding);
  }, [initialOptionalStringBinding]);

  const handleTwoWayBindingChange = (e) => {
    onTwoWayBindingChange(e.target.checked);
  };

  const handleOptionalTwoWayBindingChange = (e) => {
    onOptionalTwoWayBindingChange(e.target.checked);
  };

  return (
    <div className="stateBinding">
      <div>
        <label>
          2-Way Binding{' '}
          <input
            type="checkbox"
            checked={twoWayBinding}
            onChange={handleTwoWayBindingChange}
          />
        </label>
      </div>
      <div>
        <label>
          1-Way Binding{' '}
          <input
            type="checkbox"
            checked={oneWayBinding}
            onChange={(e) => setOneWayBinding(e.target.checked)}
          />
        </label>
      </div>
      <div>
        <label>
          String Binding{' '}
          <input
            value={stringBinding}
            onChange={(e) => setStringBinding(e.target.value)}
          />
        </label>
      </div>

      <div>
        <label>
          2-Way Binding (optional){' '}
          <input
            type="checkbox"
            checked={optionalTwoWayBinding}
            onChange={handleOptionalTwoWayBindingChange}
          />
        </label>
      </div>
      <div>
        <label>
          1-Way Binding (optional){' '}
          <input
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
            value={optionalStringBinding}
            onChange={(e) => setOptionalStringBinding(e.target.value)}
          />
        </label>
      </div>

      <div>
        <label>
          Readonly 1-Way Binding{' '}
          <input type="checkbox" checked={readOnlyOneWayBinding} readOnly />
        </label>
      </div>
    </div>
  );
};
```
