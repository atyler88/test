import React, { Component } from 'react';

class Ninjas extends Component{
    render(){
        //the next line is an example of destructuring the props we passed along from the parent component app.js
        const {name, age, belt} = this.props;
        return(
            <div className="ninja">

                {/* Instead of writing props like this we can simplify them
                 <div>Name: {this.props.name}</div>
                <div>Age: {this.props.age}</div>
                <div>Belt: {this.props.belt}</div> */}

                <div>Name: {name}</div>
                <div>Age: {age}</div>
                <div>Belt: {belt}</div>
            </div>
        )
    }
}

export default Ninjas