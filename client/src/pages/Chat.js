import React from "react";
import ChatNavLayout from "../layouts/ChatNavLayout";
import UserLayout from "../layouts/UserLayout";
import ChatLayout from "../layouts/ChatLayout";
import { Row, Col } from 'react-bootstrap';

const ChatRoom = (props) => {
    const [newMessage, setNewMessage] = React.useState(""); // Message to be sent

    const handleNewMessageChange = (event) => {
        setNewMessage(event.target.value);
    };

    const handleSendMessage = () => {
        sendMessage(newMessage);
        setNewMessage("");
    };

    return (
        <>
            <ChatNavLayout />
            <div className="p-4">
                <Row>
                    <Col md={3}>
                        <UserLayout />
                    </Col>
                    <Col md={9}>
                        <ChatLayout />
                    </Col>
                </Row>
            </div>
        </>
    );
};

export default ChatRoom;