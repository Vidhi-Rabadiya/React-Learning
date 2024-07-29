
const heading = React.createElement("h1", { id: "heading" }, "Hellow World from React");

const child = React.createElement("div", { id: "child" }, heading);

const parent = React.createElement("div", { id: "parent" }, child);

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(parent);