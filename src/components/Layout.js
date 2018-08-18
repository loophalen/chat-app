import React, { Component } from 'react'
import io from 'socket.io-client'
import { USER_CONNECTED, LOGOUT } from '../Events'
import LoginForm from './LoginForm'
import ChatContainer from './chats/ChatContainer'
// import { LOGOUT } from '../Events'
import { isNull } from 'util';


const socketUrl = "http://192.168.1.7:3231"

export default class Layout extends Component {
    constructor(props){
        super(props)
        this.state = {
            socket:isNull,
            user:null
        }
    }

    componentWillMount(){
        this.initSocket()
    }

    initSocket = () => {
        const socket = io(socketUrl)
        socket.on('connect', ()=>{
            console.log("connected")
        })
        this.setState({socket})
    }

    // set user login
    setUser = (user) => {
        const { socket } = this.state
        socket.emit(USER_CONNECTED, user)
        this.setState({user})
    }

    //user logout
    logout = () => {
        const { socket } = this.state
        socket.emit(LOGOUT)
        this.setState({user:null})
    }

    render(){
        // const { title } = this.props 
        const { socket, user } = this.state 
        return (
            <div className="container">
                {
                    !user ?
                  <LoginForm socket={socket} setUser={this.setUser} />  
                  :
                  <ChatContainer socket={socket} user={user} logout={this.logout} />
            
                }
            </div>
            
        )
    }
}