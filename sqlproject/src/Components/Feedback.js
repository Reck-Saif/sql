import React from 'react'
import Statics from './Statics'
import Statistics from './Statistics'
import Button from './Button'


class Feedback extends React.Component{    
    constructor(){
        super()
        this.state = {
            greatCounter: 0,
            natureCounter: 0,
            huonoCounter: 0,
            value: 0
        }
    }
            
    avg
    =() =>{
        const avg
        = ((this.state.greatCounter - this.state.huonoCounter)/(this.state.greatCounter + this.state.natureCounter + this.state.huonoCounter))
        .toFixed(1) 
        return avg
        ;
    }

    post
     = () =>{
        const post = ((this.state.greatCounter / (this.state.greatCounter + this.state.natureCounter + this.state.huonoCounter))*100)
        .toFixed(1)
        return post
    }
    
    render(){

        return(
            <div>
               <p>Lähettää Tulokset</p>
                <Button handleClick={() => 
                    this.setState({greatCounter : this.state.greatCounter +1, value:this.state.value+1})} 
                    text={"Great"}/>

                <Button handleClick={() => 
                    this.setState({natureCounter : this.state.natureCounter +1, value:this.state.value+1})} 
                    text={"Nature"}/>

                <Button handleClick={() => 
                    this.setState({huonoCounter : this.state.huonoCounter +1, value:this.state.value+1})} 
                    text={"Huono"}/>

                <p>Statistics</p>
                {
                    this.state.value > 0 ? (
            <div>
              <table>
                 <tbody>
                    <Statics 
                    name={"Great"} stats={this.state.greatCounter}
                    />

                    <Statics 
                    name={"Nature"} stats={this.state.natureCounter}
                    />

                    <Statics 
                    name={"Huono"} stats={this.state.huonoCounter}
                    />
                        <Statistics 
                        name={"Avg"} stat={this.avg()}
                        />
                        <Statistics
                         name={"Post"} stat={this.post()}
                         />
                </tbody>
             </table>
            </div>
                    ) : (
                      <h4>Ei Tulokset Saatu</h4>
                    )
                }   
            </div>
        )
    }

      
}
export default Feedback