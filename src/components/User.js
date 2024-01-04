import { useState } from "react";

const User = (props) => {
    const [count] = useState(0);
    const [count2] = useState(1);
    return (
        <div className="user-card">
            <h1>Count : {count} </h1>
            <h2>Count2 : {count2} </h2>
            <h2>Name : {props.name}</h2>
            <h3>Location : Deharadun</h3>
            <h3>Contact : akshay@Saini</h3>
        </div>
    )
}

export default User;