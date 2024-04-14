const xPx = 200;
const yPx = 100;

export function workflowConfigInitalNodes(data) {
  if (data === undefined) return;

  let rowLength = Math.ceil(Math.sqrt(data.length));
  for (let i = 0; i < data.length; i++) {
    data[i] = {
      ...data[i],
      data: { label: data[i].title },
      position: {
        x: xPx * (i % rowLength),
        y: yPx * Math.floor(i / rowLength),
      },
    };
  }

  data[data.length - 1] = {
    ...data[data.length - 1],
    type: "output",
  };
  data[0] = {
    ...data[0],
    type: "input",
  };

  console.log(data);

  return data;
}
