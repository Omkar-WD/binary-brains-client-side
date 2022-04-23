import React, { useState } from "react";
import { MdCheckCircle } from "react-icons/md";
// import "./ChatRoom.css";
import useChat from "../../../useChat";
import { Container, Box, List, ListItem, ListIcon } from "@chakra-ui/react";

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
      <Box w="70%" m="auto">
        <div className="chat-room-container">
          <h1 className="room-name">Room: {roomName}</h1>
          <div className="messages-container">
            {/*<List spacing={3} listStyleType="none" padding="0">
               {messages.map((message, i) => (
                <ListItem
                  key={i}
                  width={"55%"}
                  margin="8px"
                  padding="12px 8px"
                  wordBreak="break-word"
                  borderRadius="4px"
                  color="white"
                  className={`message-item ${
                    message.ownedByCurrentUser
                      ? "my-message"
                      : "received-message"
                  }`}
                >
                  <ListIcon as={MdCheckCircle} color="green.500" />
                  {message.body}
                </ListItem>
              ))}
            </List> */}
            <ol className="messages-list">
              {messages.map((message, i) => (
                <li
                  key={i}
                  className={`message-item ${
                    message.ownedByCurrentUser
                      ? "my-message"
                      : "received-message"
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
          <button onClick={handleSendMessage} className="send-message-button">
            Send
          </button>
        </div>
      </Box>
    </Container>
  );
};

export default ChatRoom;
