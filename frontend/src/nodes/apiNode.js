import { useState } from 'react';
import { BaseNode, sourceHandle, targetHandle } from './BaseNode';

export const ApiNode = ({ id }) => {
  const [method, setMethod] = useState('GET');

  return (
    <BaseNode id={id} title="API" subtitle="Call an external endpoint" handles={[targetHandle(id, 'payload'), sourceHandle(id, 'response')]}>
      <label className="node-field">
        <span>Method</span>
        <select value={method} onChange={(e) => setMethod(e.target.value)}>
          <option>GET</option>
          <option>POST</option>
          <option>PUT</option>
          <option>DELETE</option>
        </select>
      </label>
      <label className="node-field">
        <span>URL</span>
        <input placeholder="https://api.example.com" />
      </label>
    </BaseNode>
  );
};
