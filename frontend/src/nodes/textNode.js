import { useMemo, useState } from 'react';
import { BaseNode, sourceHandle, targetHandle } from './BaseNode';

const VARIABLE_REGEX = /\{\{\s*([a-zA-Z_$][a-zA-Z0-9_$]*)\s*\}\}/g;

const getVariables = (text) => {
  const variables = new Set();
  let match;

  while ((match = VARIABLE_REGEX.exec(text)) !== null) {
    variables.add(match[1]);
  }

  return Array.from(variables);
};

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || '{{input}}');
  const variables = useMemo(() => getVariables(currText), [currText]);

  const dynamicWidth = Math.min(520, Math.max(260, currText.length * 7));
  const dynamicHeight = Math.min(260, Math.max(110, currText.split('\n').length * 24 + Math.ceil(currText.length / 35) * 18));

  const variableHandles = variables.map((variable, index) =>
    targetHandle(id, variable, {
      top: `${Math.min(85, 28 + index * 18)}%`,
    })
  );

  return (
    <BaseNode
      id={id}
      title="Text"
      subtitle="Supports {{variables}}"
      width={dynamicWidth}
      minHeight={dynamicHeight}
      handles={[...variableHandles, sourceHandle(id, 'output')]}
    >
      <label className="node-field">
        <span>Text</span>
        <textarea
          value={currText}
          onChange={(e) => setCurrText(e.target.value)}
          rows={3}
          style={{ minHeight: dynamicHeight - 78 }}
          placeholder="Write text with {{variable}} placeholders"
        />
      </label>
      {variables.length > 0 && (
        <div className="variable-list">
          {variables.map((variable) => (
            <span key={variable}>{variable}</span>
          ))}
        </div>
      )}
    </BaseNode>
  );
};
