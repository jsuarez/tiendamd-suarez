import React, { Component } from 'react';
import TitleComponent from '../title/Title';

class Catalogo extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: 'Juan'
        }
    }
    render() { 
        return <div>
            <TitleComponent name={this.state.name}/>
        </div>;
    }
}
 
export default Catalogo;