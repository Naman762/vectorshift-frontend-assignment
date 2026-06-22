import { PipelineToolbar } from './toolbar';
import { PipelineUI } from './ui';
import { SubmitButton } from './submit';

function App() {
  return (
    <main className="app-shell">
      <PipelineToolbar />
      <section className="canvas-section">
        <PipelineUI />
        <SubmitButton />
      </section>
    </main>
  );
}

export default App;
