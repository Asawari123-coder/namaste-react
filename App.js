import React from "react";
import ReactDOM  from "react-dom/client";


// React element
const heading =  React.createElement("h1", { id: "heading" }, "Namaste React!" );

const root = ReactDOM.createRoot(document.getElementById("root"));

// JSX Element
const jsxHeading = (
<h1 id="heading">
    Namaste React using JSX!!!!
    </h1>
    );

// React Functional Component

const HeadingComponent = () =>{
    return <h1 id="heading">Namaste React from Functional component </h1>
}

const HeadingComponent2 = () => (
<div id="container">
    {heading}
    <h1 className="heading"> Namaste React Using Functional Component</h1>
    <HeadingComponent/>
    <HeadingComponent></HeadingComponent>
    {HeadingComponent()}
</div>
)


root.render(<HeadingComponent2 />);