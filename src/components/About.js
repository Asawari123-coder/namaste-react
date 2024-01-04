import React from 'react';
import User from "./User";
import UserClass from "./UserClass";
// const About = () => {
//     return (
//         <div>
//             <h1>About US</h1>
//             <h2>This is About us Page</h2>
//             {/* <User name={"Akshay Saini From  FC"}/> */}
//             <UserClass name={"Akshay Saini from CC"} location={"Dehardun from class"} />
//         </div>
//     )
// }


class About extends React.Component {
    constructor(props){
        super(props);
        console.log('Parent constructor');
    }

    componentDidMount(){
        console.log('Parent componentDidMount');
    }

    render(){
        console.log('Parent render');
            return (
        <div>
            <h1>About US</h1>
            <h2>This is About us Page</h2>
            {/* <User name={"Akshay Saini From  FC"}/> */}
            <UserClass name={"Akshay Saini from CC"} location={"Dehardun from class"} />
        </div>
    )
    }
}
export default About;