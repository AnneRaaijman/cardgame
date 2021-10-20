import React, { useEffect, useState } from 'react'
import io from 'socket.io-client'
import queryString from 'query-string'

let socket
const ENDPOINT = 'http://localhost:5000'
// const ENDPOINT = 'https://uno-online-multiplayer.herokuapp.com/'

const Game = (props) => {
    console.log("props", props) 
    const data = queryString.parse(props.location.search)

    //initialize socket state
    const [room, setRoom] = useState(data.roomCode)
    const [roomFull, setRoomFull] = useState(false)

    console.log("data", data) //just the roomCode

    useEffect(() => {
        const connectionOptions =  {
            "forceNew" : true,
            "reconnectionAttempts": "Infinity", 
            "timeout" : 10000,                  
            "transports" : ["websocket"]
        }
        socket = io.connect(ENDPOINT, connectionOptions)

        //this room is sent to the backend
        socket.emit('join', {room: room}, (error) => {
            if(error)
                setRoomFull(true)
        })

        //cleanup on component unmount
        return function cleanup() {
            socket.emit('disconnect')
            //shut down connnection instance
            socket.off()
        }
    }, [])

    //initialize game state
    const [currentColor, setCurrentColor] = useState('')

    //runs once on component mount

    
    return (
        <div className={`Game backgroundColorR backgroundColor${currentColor}`}>
            {(!roomFull) ? <h1>You joined {room}</h1> : <h1>Room full</h1> }

            <br />
            <a href='/'><button className="game-button red">QUIT</button></a>
        </div>
    )
}

export default Game