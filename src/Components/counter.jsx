import React from 'react'
class Counter extends React.Component {
    state = {
        name : "manik_manchanda",
        value : this.props.value
    };
    styles={
        color : "red"
    };
    manik={
        textAlign : "center"
    }
    handleCount=()=>{
        this.setState({
            value :this.state.value+1
        })
    }
    handleDelete=()=>{
        this.setState({
            value : 0
        })
    }
    handleCountminus=()=>{
        this.setState({
            value :this.state.value-1
        })
    }


    render() { 
        return ( 
            <div style={{ textAlign :"center"}}>
                <span className={this.getBadge()}> {this.functionCount()}</span>
                <button className="btn btn-secondary m-2" onClick={this.handleCount}>Increment</button>
                <button className="btn btn-secondary m-2 " onClick={this.handleCountminus}>Decrement</button>
                <button className="btn btn-danger m-2" onClick={this.handleDelete}>Reset</button>
            </div>
         );
    }
    getBadge(){
        let classes="badge m-2 badge-";
        classes += this.state.value === 0 ? "warning" : "primary" ;
        return classes;
    }
    functionCount(){
        return this.state.value === 0 ?  <h6>Zero</h6> : this.state.value;
    }
}
 
export default Counter;