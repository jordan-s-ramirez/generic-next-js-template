export function workflowConfigInitalEdges(data) {
  if (data === undefined) return;

  for (let i = 0; i < data.length; i++) {
    data[i] = {
      ...data[i],
    };
  }
  return data;
}
