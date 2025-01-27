import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';
import './chat.css';

let socket;

const Chat = () => {
    const [user, setUser] = useState('');
    const [room, setRoom] = useState('');
    const [users, setUsers] = useState([]);
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);
    const socketUrl = 'http://localhost:8000';

    useEffect(() => {
        // Get search parameters only once when the component mounts
        const search = window.location.search;
        const params = new URLSearchParams(search);
        const user = params.get('name');
        const room = params.get('room');

        setUser(user);
        setRoom(room);

        // Initialize socket connection
        socket = io(socketUrl);

        // Emit the 'join' event when the component mounts
        socket.emit('join', { user, room }, (err) => {
            if (err) {
                // Handle error (if necessary)
            }
        });

        return () => {
            // Cleanup when the component unmounts
            socket.disconnect();
            socket.off();
        };
    }, []); // Empty dependency array ensures this runs only once

    useEffect(() => {
        // Listen for messages from the server
        socket.on('message', (msg) => {
            setMessages((prevMsg) => [...prevMsg, msg]);

            setTimeout(() => {
                const div = document.getElementById('chat_body');
                div.scrollTop = div.scrollHeight - div.clientWidth;
            }, 10);
        });

        // Listen for room members updates
        socket.on('roomMembers', (usrs) => {
            setUsers(usrs);
        });
    }, []); // Empty dependency array ensures this runs once

    const sendMessage = (e) => {
        e.preventDefault();

        socket.emit('sendMessage', message, () => setMessage(''));
        setTimeout(() => {
            const div = document.getElementById('chat_body');
            div.scrollTop = div.scrollHeight;
        }, 100);
    };

    return (
        <div className="container mt-4">
            <div className="row chat-window" id="chat_window_1">
                <div className="col-xs-4 col-md-4">
                    <div className="panel-heading top-bar">
                        <h5>ACTIVE USERS</h5>
                    </div>
                    <ul>
                        {users.map((e, i) => (
                            <li key={i}>{e.user}</li>
                        ))}
                    </ul>
                </div>
                <div className="col-xs-8 col-md-8">
                    <div className="panel panel-default">
                        <div className="panel-heading top-bar">
                            <div className="col-md-12 col-xs-8">
                                <h3 className="panel-title">
                                    <span className="glyphicon glyphicon-comment"></span>{room}
                                </h3>
                            </div>
                        </div>
                        <div className="panel-body msg_container_base" id="chat_body">
                            {messages.map((e, i) =>
                                e.user === user?.toLowerCase() ? (
                                    <div key={i} className="row msg_container base_receive">
                                        <div className="col-xs-10 col-md-10">
                                            <div className="messages msg_receive">
                                                <p>{e.text}</p>
                                                <time>{e.user}</time>
                                            </div>
                                        </div>
                                    </div>
                                ) : (
                                    <div key={i} className="row msg_container base_sent">
                                        <div className="col-xs-10 col-md-10">
                                            <div className="messages msg_sent">
                                                <p>{e.text}</p>
                                                <time>{e.user}</time>
                                            </div>
                                        </div>
                                    </div>
                                )
                            )}
                        </div>
                        <div className="panel-footer">
                            <div className="input-group">
                                <input
                                    id="btn-input"
                                    type="text"
                                    value={message}
                                    onKeyPress={(event) =>
                                        event.key === 'Enter' ? sendMessage(event) : null
                                    }
                                    onChange={(event) => setMessage(event.target.value)}
                                    className="form-control input-sm chat_input"
                                    placeholder="Write your message here..."
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Chat;
