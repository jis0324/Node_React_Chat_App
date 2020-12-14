import React from 'react'
import { Navbar, Nav } from 'react-bootstrap';

export default function ChatNavLayout() {
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#">SimpleChatApp</Navbar.Brand>
                <Nav className="mr-auto">
                <Nav.Link href="/chat">Chat</Nav.Link>
                <Nav.Link href="/signin">Signin</Nav.Link>
                <Nav.Link href="/signup">Signup</Nav.Link>
                </Nav>
            </Navbar>
        </>
    )
}
