import { BaseNode, sourceHandle, targetHandle } from './BaseNode';

export const LLMNode = ({ id }) => {
  return (
    <BaseNode
      id={id}
      title="LLM"
      subtitle="Generate a model response"
      handles={[
        targetHandle(id, 'system', { top: '35%' }),
        targetHandle(id, 'prompt', { top: '70%' }),
        sourceHandle(id, 'response'),
      ]}
    >
      <p className="node-description">Accepts system and prompt inputs, then returns a generated response.</p>
    </BaseNode>
  );
};
