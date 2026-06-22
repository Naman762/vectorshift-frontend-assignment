import { useState } from 'react';
import { BaseNode, sourceHandle, targetHandle } from './BaseNode';

export const DatabaseNode = ({ id }) => {
  const [operation, setOperation] = useState('Select');

  return (
    <BaseNode id={id} title="Database" subtitle="Read or write records" handles={[targetHandle(id, 'query'), sourceHandle(id, 'records')]}>
      <label className="node-field">
        <span>Operation</span>
        <select value={operation} onChange={(e) => setOperation(e.target.value)}>
          <option>Select</option>
          <option>Insert</option>
          <option>Update</option>
          <option>Delete</option>
        </select>
      </label>
      <label className="node-field">
        <span>Table</span>
        <input placeholder="customers" />
      </label>
    </BaseNode>
  );
};
