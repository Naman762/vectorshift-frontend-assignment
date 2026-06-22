import { BaseNode, sourceHandle, targetHandle } from './BaseNode';

export const ConditionNode = ({ id }) => {
  return (
    <BaseNode
      id={id}
      title="Condition"
      subtitle="Branch on true or false"
      handles={[
        targetHandle(id, 'input'),
        sourceHandle(id, 'true', { top: '38%' }),
        sourceHandle(id, 'false', { top: '72%' }),
      ]}
    >
      <label className="node-field">
        <span>Rule</span>
        <input placeholder="score > 80" />
      </label>
      <p className="node-description">Routes the flow based on a logical expression.</p>
    </BaseNode>
  );
};
