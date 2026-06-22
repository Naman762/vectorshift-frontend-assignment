import { useState } from 'react';
import { BaseNode, sourceHandle } from './BaseNode';

export const InputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(data?.inputName || id.replace('customInput-', 'input_'));
  const [inputType, setInputType] = useState(data?.inputType || 'Text');

  return (
    <BaseNode
      id={id}
      title="Input"
      subtitle="Pipeline starting value"
      handles={[sourceHandle(id, 'value')]}
    >
      <label className="node-field">
        <span>Name</span>
        <input value={currName} onChange={(e) => setCurrName(e.target.value)} />
      </label>
      <label className="node-field">
        <span>Type</span>
        <select value={inputType} onChange={(e) => setInputType(e.target.value)}>
          <option value="Text">Text</option>
          <option value="File">File</option>
        </select>
      </label>
    </BaseNode>
  );
};
