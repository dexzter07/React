import React, { component, Component } from 'react'
class Difference extends Component{
    constructor(props) {
        super(props)
    
        this.state = {
             num: 10
        }
    }

    decrement(){
        this.setState(
            {
            num: this.state.num - 1
            },
        () => {
        console.log('Callback value :',this.state.num)
        }
        )
    }

    render(){
        return(
            <div>
    <h1>Number - { this.state.num }</h1>
    <button onClick = {()=>this.decrement()}>Decrement</button>
            </div>
        )
    }
    
}

export default Difference