import React, {Component} from 'react'

export default class LoginForm extends Component {
    constructor(props){
        super(props)
        this.state = {
            nickname:"", 
            error:""

        }
    }
    render(){
        const{ nickname, error } = this.state 
        return(
            <div className="login">
                <form onSubmit = {this.handleSubmit} className ="login-form" >
                    <label htmlFor="nickname">
                        <h2>Enter your nickname?</h2>
                    </label>
                    <input 
                        ref={(input)=>{this.textInput = input}}
                        type="text"
                        id="nickname"
                        value={nickname}
                        onChange={this.handleChange}
                        placholder={'UserName'}
                    />
                    <div className="error">{error ? error:null}</div>
                    
                </form>

            </div>
        )
    }
}

