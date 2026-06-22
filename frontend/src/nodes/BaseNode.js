import { Handle, Position } from 'reactflow';

const defaultDimensions = { width: 240, minHeight: 120 };

export const BaseNode = ({
  id,
  title,
  subtitle,
  children,
  handles = [],
  width = defaultDimensions.width,
  minHeight = defaultDimensions.minHeight,
}) => {
  return (
    <div className="node-card" style={{ width, minHeight }}>
      {handles.map((handle) => (
        <Handle
          key={`${handle.id}-${handle.type}`}
          type={handle.type}
          position={handle.position}
          id={handle.id || `${id}-${handle.type}`}
          style={handle.style}
        />
      ))}

      <div className="node-header">
        <div>
          <div className="node-title">{title}</div>
          {subtitle && <div className="node-subtitle">{subtitle}</div>}
        </div>
      </div>

      <div className="node-content">{children}</div>
    </div>
  );
};

export const sourceHandle = (id, name = 'output', style = {}) => ({
  type: 'source',
  position: Position.Right,
  id: `${id}-${name}`,
  style,
});

export const targetHandle = (id, name = 'input', style = {}) => ({
  type: 'target',
  position: Position.Left,
  id: `${id}-${name}`,
  style,
});
