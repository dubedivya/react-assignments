const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1", className: "child" }, [
    React.createElement("div", { id: "heading" }, "Hello World! ❤"),
    React.createElement("div", { className: "heading" }, "Let's Learn React"),
  ]),
  React.createElement("div", { id: "child2", className: "child" }, [
    React.createElement("div", { className: "heading" }, "Hello World! ❤"),
    React.createElement("div", { className: "heading" }, "Let's Learn Parcel"),
  ]),
  React.createElement("div", { id: "child3", className: "child" }, [
    React.createElement("div", { className: "heading" }, "Hello World! ❤"),
    React.createElement("div", { className: "heading" }, "Let's Learn npm"),
  ]),
]);

console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
