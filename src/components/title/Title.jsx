import React, { Component } from 'react';

class TitleComponent extends Component {
    constructor(props){
        super(props)
        this.state = {
            title: 'Hola'
        }
    }
    render() { 
        return <div>
            <h1>{this.state.title} {this.props.name}</h1>
            </div>;
    }
}
 
export default TitleComponent;