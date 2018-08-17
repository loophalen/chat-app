import React, { Component } from 'react'
import io from 'socket.io-client'
import { isNull } from 'util';


const socketUrl = "http://192.168.1.7:3231"

export default class Layout extends Component {
    constructor(props){
        super(props)
        this.state = {
            socket:isNull
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

    render(){
        const { title } = this.props 
        return (
            <div className="container">
                {title}
            </div>
        )
    }
}