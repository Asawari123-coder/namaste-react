import React from "react";
import ReactDOM  from "react";

const parent = React.createElement("div", {id : "parent"}, [
    React.createElement("div", {id: "child"},[
        React.createElement("h1", {}, "This is Namaste React"),
        React.createElement("h2",{}, "by Akshay Saini"), 
    ]),
    React.createElement("div", {id: "child2"},[
        React.createElement("h1", {}, "I am in h1 tag"),
        React.createElement("h2",{}, "I am in h2 tag"), 
    ])
])

console.log(parent);

const root= ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);