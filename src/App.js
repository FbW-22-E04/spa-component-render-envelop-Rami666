import Envelope from "./components/Envelope";
import React from "react";

export default function App() {
  const senderName = "Mr Sender";
  const receiverName = "Mr Receiver";

  const senderAddress = (
    <>
      <p>Some Street</p>
      <p>Berlin, Germany 2213</p>
    </>
  );

  const receiverAddress = (
    <>
      <p>Some Street</p>
      <p>Berlin, Germany 2213</p>
    </>
  );

  return (
    <div>
      <Envelope
        sender={senderName}
        receiver={receiverName}
        sendAdd={senderAddress}
        recAdd={receiverAddress}
      />
    </div>
  );
}
