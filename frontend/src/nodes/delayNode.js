import { useState } from 'react';
import { BaseNode, sourceHandle, targetHandle } from './BaseNode';

export const DelayNode = ({ id }) => {
  const [seconds, setSeconds] = useState(5);

  return (
    <BaseNode id={id} title="Delay" subtitle="Pause execution" handles={[targetHandle(id, 'input'), sourceHandle(id, 'output')]}>
      <label className="node-field">
        <span>Seconds</span>
        <input type="number" min="1" value={seconds} onChange={(e) => setSeconds(e.target.value)} />
      </label>
      <p className="node-description">Waits before passing data to the next node.</p>
    </BaseNode>
  );
};
