import { DraggableNode } from './draggableNode';

const nodes = [
  { type: 'customInput', label: 'Input' },
  { type: 'llm', label: 'LLM' },
  { type: 'customOutput', label: 'Output' },
  { type: 'text', label: 'Text' },
  { type: 'api', label: 'API' },
  { type: 'email', label: 'Email' },
  { type: 'database', label: 'Database' },
  { type: 'condition', label: 'Condition' },
  { type: 'delay', label: 'Delay' },
];

export const PipelineToolbar = () => {
  return (
    <aside className="toolbar">
      <div>
        <p className="eyebrow">VectorShift Assessment</p>
        <h1>Pipeline Builder</h1>
        <p className="toolbar-copy">Drag nodes onto the canvas, connect them, and submit for backend validation.</p>
      </div>

      <div className="node-palette">
        {nodes.map((node) => (
          <DraggableNode key={node.type} type={node.type} label={node.label} />
        ))}
      </div>
    </aside>
  );
};
