import React, { useState } from "react";
import { MdCheckCircle } from "react-icons/md";
import "./ChatRoom.css";
import useChat from "../../../useChat";
import {
  Container,
  Box,
  List,
  ListItem,
  ListIcon,
  Button,
  Heading,
} from "@chakra-ui/react";

import { useParams } from "react-router-dom";
const ChatRoom = () => {
  const { roomName } = useParams();
  const { messages, sendMessage } = useChat(roomName);
  const [newMessage, setNewMessage] = useState("");

  const handleNewMessageChange = (e) => {
    setNewMessage(e.target.value);
  };

  const handleSendMessage = () => {
    sendMessage(newMessage);
    setNewMessage("");
  };

  return (
    <Container
      maxW="container.xl"
      align="center"
      bgColor="white"
      borderRadius="10px"
      mt={"10"}
      boxShadow="rgba(0, 0, 0, 0.1) 0px 4px 12px"
    >
      <div className="chat-room-container">
        <Heading as="h4" mb="5" size="md">
          Room: {roomName}
        </Heading>
        <div className="messages-container">
          <ol className="messages-list">
            {messages.map((message, i) => (
              <li
                key={i}
                className={`message-item ${
                  message.ownedByCurrentUser ? "my-message" : "received-message"
                }`}
              >
                {message.body}
              </li>
            ))}
          </ol>
        </div>
        <textarea
          value={newMessage}
          onChange={handleNewMessageChange}
          placeholder="Write message..."
          className="new-message-input-field"
        />
        <Button w="30%" m="auto" onClick={handleSendMessage} colorScheme="blue">
          Send
        </Button>
      </div>
    </Container>
  );
};

export default ChatRoom;
