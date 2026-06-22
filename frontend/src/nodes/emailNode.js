import { BaseNode, sourceHandle, targetHandle } from './BaseNode';

export const EmailNode = ({ id }) => {
  return (
    <BaseNode id={id} title="Email" subtitle="Prepare an email message" handles={[targetHandle(id, 'body'), sourceHandle(id, 'email')]}>
      <label className="node-field">
        <span>To</span>
        <input placeholder="user@example.com" />
      </label>
      <label className="node-field">
        <span>Subject</span>
        <input placeholder="Subject line" />
      </label>
    </BaseNode>
  );
};
