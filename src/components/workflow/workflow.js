import React from "react";
import ReactFlow, {
  Controls,
  Background,
  applyNodeChanges,
  applyEdgeChanges,
} from "reactflow";
import "reactflow/dist/style.css";
import { Card } from "@mui/material";

export default function Workflow({ initialNodes, initialEdges }) {
  const [nodes, setNodes] = React.useState(initialNodes);
  const [edges, setEdges] = React.useState(initialEdges);
  const [selectedNode, setSelectedNode] = React.useState(null);

  const onNodesChange = React.useCallback(
    (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
    [],
  );
  const onEdgesChange = React.useCallback(
    (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
    [],
  );

  const onSelectionChange = (e) => {
    if (e !== undefined && e.hasOwnProperty("nodes") && e.nodes.length !== 0) {
      setSelectedNode(e.nodes[0]);
    }
  };

  return (
    <>
      {selectedNode !== null ? (
        <div
          style={{
            position: "fixed",
            right: "1vw",
            top: "1vh",
            zIndex: 1,
            margin: "1%",
          }}
        >
          <Card
            sx={{
              padding: "3%",
              minWidth: 300,
              backgroundColor: "white",
            }}
            elevation={5}
          >
            <h3 style={{ textAlign: "center", margin: 0 }}>
              {selectedNode.title}
            </h3>
            <p>{selectedNode.description}</p>
          </Card>
        </div>
      ) : null}
      <div style={{ height: "100%" }}>
        <ReactFlow
          nodes={nodes}
          onNodesChange={onNodesChange}
          edges={edges}
          onEdgesChange={onEdgesChange}
          fitView
          onSelectionChange={onSelectionChange}
        >
          <Background />
          <Controls />
        </ReactFlow>
      </div>
    </>
  );
}
