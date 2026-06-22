# VectorShift Visual Pipeline Builder

> A drag-and-drop visual workflow builder that enables users to create AI-powered pipelines using customizable nodes, dynamic connections, and real-time pipeline validation.
 Link : https://vectorshift-frontend-assignment-1wsrdbrny-naman762s-projects.vercel.app/
---

## 🚀 Overview

The VectorShift Visual Pipeline Builder is a full-stack workflow automation platform inspired by modern no-code/low-code orchestration tools.

Users can visually create pipelines by dragging nodes onto a canvas, connecting them, and validating execution flows. The application supports dynamic node creation, graph-based dependency management, and backend validation for Directed Acyclic Graphs (DAGs).

This project was developed as a technical assessment demonstrating frontend architecture, React Flow integration, backend API development, graph algorithms, and scalable component design.

---

## ✨ Features

### Frontend

* Drag-and-drop workflow canvas
* Dynamic node creation
* React Flow integration
* Reusable BaseNode architecture
* Auto-generated input/output handles
* Real-time node connections
* Responsive UI design
* Zustand state management

### Backend

* FastAPI REST API
* Pipeline graph processing
* DAG validation
* Node and edge analysis
* JSON pipeline parsing
* API integration support

### Workflow Components

Supported node types:

* Input Node
* Text Node
* LLM Node
* API Node
* Email Node
* Database Node
* Condition Node
* Delay Node

---

# 🏗️ System Architecture

```text
┌────────────────────────────────────┐
│           React Frontend           │
│                                    │
│  React Flow Canvas                 │
│  Custom Nodes                      │
│  Zustand Store                     │
│  Dynamic Connections               │
└──────────────┬─────────────────────┘
               │
               │ JSON Pipeline
               ▼
┌────────────────────────────────────┐
│          FastAPI Backend           │
│                                    │
│  Pipeline Parser                   │
│  Graph Builder                     │
│  DAG Validator                     │
│  Dependency Analyzer               │
└──────────────┬─────────────────────┘
               │
               ▼
┌────────────────────────────────────┐
│         Validation Engine          │
│                                    │
│  Node Count                        │
│  Edge Count                        │
│  DAG Detection                     │
│  Pipeline Integrity Check          │
└────────────────────────────────────┘
```

---

# 📂 Project Structure

```bash
frontend/
│
├── src/
│   ├── nodes/
│   │   ├── BaseNode.js
│   │   ├── InputNode.js
│   │   ├── TextNode.js
│   │   ├── LLMNode.js
│   │   ├── APINode.js
│   │   ├── EmailNode.js
│   │   ├── DatabaseNode.js
│   │   ├── ConditionNode.js
│   │   └── DelayNode.js
│   │
│   ├── store/
│   │   └── store.js
│   │
│   ├── components/
│   │   ├── Toolbar.js
│   │   └── SubmitButton.js
│   │
│   └── App.js
│
backend/
│
├── main.py
├── utils.py
├── graph.py
└── requirements.txt
```

---

# ⚙️ Technology Stack

## Frontend

* React.js
* React Flow
* Zustand
* JavaScript
* CSS

## Backend

* FastAPI
* Python
* Uvicorn

## Development Tools

* Git
* GitHub
* VS Code

---

# 🔄 Workflow Lifecycle

### Step 1

User drags a node from the toolbar.

```text
Toolbar → Canvas
```

### Step 2

Node is created using BaseNode abstraction.

```text
BaseNode
    ├── InputNode
    ├── TextNode
    ├── LLMNode
    └── APINode
```

### Step 3

User creates connections.

```text
Input → LLM → API → Email
```

### Step 4

Pipeline JSON is generated.

```json
{
  "nodes": [],
  "edges": []
}
```

### Step 5

Pipeline submitted to backend.

```http
POST /pipelines/parse
```

### Step 6

Backend validates graph.

```text
Node Count
Edge Count
DAG Status
```

### Step 7

Results returned to frontend.

---

# 🧠 DAG Validation Logic

The backend ensures the workflow contains no circular dependencies.

Example:

```text
A → B → C
```

Valid ✅

---

Example:

```text
A → B → C
↑       ↓
└───────┘
```

Invalid ❌

---

# API Endpoint

### Parse Pipeline

```http
POST /pipelines/parse
```

Request:

```json
{
  "nodes": [...],
  "edges": [...]
}
```

Response:

```json
{
  "num_nodes": 8,
  "num_edges": 10,
  "is_dag": true
}
```

---

# Installation

## Frontend

```bash
cd frontend

npm install

npm start
```

Application:

```text
http://localhost:3000
```

---

## Backend

```bash
cd backend

pip install -r requirements.txt

uvicorn main:app --reload
```

API:

```text
http://localhost:8000
```

---

## Pipeline Builder

```text
Drag → Connect → Validate
```

---

# Future Enhancements

* OpenAI Integration
* Gemini Integration
* Workflow Execution Engine
* Database Persistence
* User Authentication
* Pipeline Templates
* Export / Import Pipelines
* Real-Time Collaboration
* Version Control for Workflows
* AI Agent Orchestration

# Author

**Naman Saxena**

* MCA | Full Stack & AI Engineer
* GitHub: `https://github.com/Naman762`
* LinkedIn: Add your LinkedIn profile here

---

## License

MIT License

This project is intended for educational, assessment, and portfolio purposes.
