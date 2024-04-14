import Layout from "@/components/layout/layout";
import Workflow from "@/components/workflow/workflow";
import { workflowConfigInitalEdges } from "@/util/workflow/workflowConfigInitalEdges";
import { workflowConfigInitalNodes } from "@/util/workflow/workflowConfigInitalNodes";
import React from "react";
const initialNodes = [
  {
    id: "1",
    title: "Loading",
    position: { x: 0, y: 0 },
    type: "input",
  },
  {
    id: "2",
    title: "wait!",
    position: { x: 100, y: 100 },
  },
];

const initialEdges = [
  { id: "1-2", source: "1", target: "2", label: "please", type: "step" },
];

const Page = () => {
  const [nodes, setNodes] = React.useState(initialNodes);
  const [edges, setEdges] = React.useState(initialEdges);

  React.useEffect(() => {
    setNodes((e) => workflowConfigInitalNodes(e));
    setEdges((e) => workflowConfigInitalEdges(e));
  }, []);

  return (
    <>
      <Workflow initialNodes={nodes} initialEdges={edges} />
    </>
  );
};

Page.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default Page;
