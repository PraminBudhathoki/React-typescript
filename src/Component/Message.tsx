import React from "react";

interface MessageProps {
  onMessage: (event: React.MouseEvent<HTMLButtonElement>, id: number) => void;
}

const Message = (props: MessageProps) => {
  return (
    <div>
      <h2>Event props in React with typescript</h2>
      <button onClick={(event) => props.onMessage(event, 20)}>
        Show Message from message
      </button>
    </div>
  );
};

export default Message;
