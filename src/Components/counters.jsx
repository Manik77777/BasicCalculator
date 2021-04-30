import React from 'react'
import Counter from "./counter"

class Counters extends React.Component {
    state = { 
        counters :[
            { id : 1,value : 0 },
            { id : 2,value : 0 },
            { id : 3,value : 0 },
            { id : 4,value : 0 },
        ]
     }
    render() { 
        return (
            <div style={{textAlign :"center"}}>
                <h1>Basic Calculator</h1>
              {this.state.counters.map(counter => <Counter key ={counter.id} value={counter.value}  />)}
              <br/>
            </div>
          );
    }
}
 
export default Counters;