from typing import Any

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel


app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


class PipelinePayload(BaseModel):
    nodes: list[dict[str, Any]] = []
    edges: list[dict[str, Any]] = []


def is_directed_acyclic_graph(nodes: list[dict[str, Any]], edges: list[dict[str, Any]]) -> bool:
    node_ids = {node.get("id") for node in nodes}
    adjacency = {node_id: [] for node_id in node_ids}

    for edge in edges:
        source = edge.get("source")
        target = edge.get("target")

        if source in adjacency and target in node_ids:
            adjacency[source].append(target)

    visited = set()
    visiting = set()

    def has_cycle(node_id: str) -> bool:
        if node_id in visiting:
            return True
        if node_id in visited:
            return False

        visiting.add(node_id)
        for neighbor in adjacency.get(node_id, []):
            if has_cycle(neighbor):
                return True
        visiting.remove(node_id)
        visited.add(node_id)
        return False

    return not any(has_cycle(node_id) for node_id in node_ids)


@app.get("/")
def read_root():
    return {"Ping": "Pong"}


@app.post("/pipelines/parse")
def parse_pipeline(payload: PipelinePayload):
    return {
        "num_nodes": len(payload.nodes),
        "num_edges": len(payload.edges),
        "is_dag": is_directed_acyclic_graph(payload.nodes, payload.edges),
    }
