import React from 'react';
import { useSelector } from 'react-redux';

function MyComponent() {
    const count = useSelector((state) => state.count.value);
  return (
    <div>{count}</div>
  )
}

export default MyComponent