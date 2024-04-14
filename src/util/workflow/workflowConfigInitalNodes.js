export function workflowConfigInitalNodes(data) {
  if (data === undefined) return;

  let rowLength = Math.floor(Math.sqrt(data.length));
  for (let i = 0; i < data.length; i++) {
    data[i] = {
      ...data[i],
      data: { label: data[i].title },
      position: {
        x: 100 * (i % rowLength),
        y: 100 * (data.length / rowLength),
      },
    };
  }
  console.log(data);
  return data;
}
