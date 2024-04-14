import Layout from "@/components/layout/layout";
import Workflow from "@/components/workflow/workflow";
import { workflowConfigInitalEdges } from "@/util/workflow/workflowConfigInitalEdges";
import { workflowConfigInitalNodes } from "@/util/workflow/workflowConfigInitalNodes";
import React from "react";

const initialNodes = [
  {
    id: "1",
    title: "Loading please",
  },
  {
    id: "2",
    title: "wait!",
    description: "SOMETHING HERE",
  },
  {
    id: "3",
    title: "wait!",
    description: "SOMETHING HERE",
  },
  {
    id: "4",
    title: "wait!",
    description: "SOMETHING HERE",
  },
  {
    id: "5",
    title: "wait!",
    description: "SOMETHING HERE",
  },
  {
    id: "6",
    title: "wait!",
    description: "SOMETHING HERE",
  },
];

const Page = () => {
  const [nodes, setNodes] = React.useState(initialNodes);
  const [edges, setEdges] = React.useState([]);

  React.useMemo(() => {
    setNodes((e) => workflowConfigInitalNodes(e));
    setEdges((_) => workflowConfigInitalEdges(nodes));
  }, [nodes]);

  return (
    <>
      <div style={{ width: "100%", height: "100%" }}>
        <Workflow initialNodes={nodes} initialEdges={edges} />
      </div>
    </>
  );
};

Page.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default Page;
