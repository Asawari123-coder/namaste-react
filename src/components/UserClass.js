import React, { Component } from 'react';

class UserClass extends Component {
    constructor(props){
        super(props);
        this.state = {
            count:0,
        }
        console.log('Child constructor');
    }
    componentDidMount(){
        console.log('Child componentDidMount');
    }
    render(){
        console.log('Child render');
        const {count} = this.state
        const {name, location} = this.props
        return (
            <div className="user-card">
            <h1>Count : {count} </h1>
            <button onClick={() => this.setState({count: count+1})}>Counter</button>
            <h2>Name : {name}</h2>
            <h3>Location : {location}</h3>
            <h3>Contact : akshay@Saini</h3>
        </div>
        )
    }
}

export default UserClass;