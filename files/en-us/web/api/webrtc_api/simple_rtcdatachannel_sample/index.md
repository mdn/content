---
title: A simple RTCDataChannel sample
slug: Web/API/WebRTC_API/Simple_RTCDataChannel_sample
page-type: guide
---

{{DefaultAPISidebar("WebRTC")}}

The {{domxref("RTCDataChannel")}} interface is a feature of the [WebRTC API](/en-US/docs/Web/API/WebRTC_API) which lets you open a channel between two peers over which you may send and receive arbitrary data. The API is intentionally similar to the [WebSocket API](/en-US/docs/Web/API/WebSockets_API), so that the same programming model can be used for each.

In this example, we will open an {{domxref("RTCDataChannel")}} connection linking two elements on the same page. While that's obviously a contrived scenario, it's useful for demonstrating the flow of connecting two peers. We'll cover the mechanics of accomplishing the connection and transmitting and receiving data, but we will save the bits about locating and linking to a remote computer for another example.

## The HTML

First, let's take a quick look at the HTML that's needed. There's nothing incredibly complicated here. First, we have a couple of buttons for establishing and closing the connection:

```html live-sample___simple-data-channel
<button id="connectButton" name="connectButton" class="buttonleft">
  Connect
</button>
<button
  id="disconnectButton"
  name="disconnectButton"
  class="buttonright"
  disabled>
  Disconnect
</button>
```

Then there's a box which contains the text input box into which the user can type a message to transmit, with a button to send the entered text. This {{HTMLElement("div")}} will be the first peer in the channel.

```html live-sample___simple-data-channel
<div class="messagebox">
  <label for="message"
    >Enter a message:
    <input
      type="text"
      name="message"
      id="message"
      placeholder="Message text"
      inputmode="latin"
      size="60"
      maxlength="120"
      disabled />
  </label>
  <button id="sendButton" name="sendButton" class="buttonright" disabled>
    Send
  </button>
</div>
```

Finally, there's the little box into which we'll insert the messages. This {{HTMLElement("div")}} block will be the second peer.

```html live-sample___simple-data-channel
<div class="messagebox" id="receive-box">
  <p>Messages received:</p>
</div>
```

```css hidden live-sample___simple-data-channel
body {
  font-family: sans-serif;
}

.messagebox {
  margin-block: 1rem;
}

input {
  box-sizing: border-box;
  max-width: 100%;
}

#receive-box {
  border: 1px solid gray;
  padding: 0.5rem;
  height: 8rem;
  overflow: auto;
  overflow-wrap: anywhere;
}
```

## The JavaScript code

Below we'll review the parts of the code that do the heavy lifting.

### Starting up

When the script is run, we set up a {{domxref("Window/load_event", "load")}} event listener, so that once the page is fully loaded, our `startup()` function is called.

```js live-sample___simple-data-channel
let connectButton = null;
let disconnectButton = null;
let sendButton = null;
let messageInputBox = null;
let receiveBox = null;

let localConnection = null; // RTCPeerConnection for our "local" connection
let remoteConnection = null; // RTCPeerConnection for the "remote"

let sendChannel = null; // RTCDataChannel for the local (sender)
let receiveChannel = null; // RTCDataChannel for the remote (receiver)
let disconnecting = false;

window.addEventListener("load", startup);

function startup() {
  connectButton = document.getElementById("connectButton");
  disconnectButton = document.getElementById("disconnectButton");
  sendButton = document.getElementById("sendButton");
  messageInputBox = document.getElementById("message");
  receiveBox = document.getElementById("receive-box");

  // Set event listeners for user interface widgets

  connectButton.addEventListener("click", connectPeers);
  disconnectButton.addEventListener("click", disconnectPeers);
  sendButton.addEventListener("click", sendMessage);
}
```

This is quite straightforward. We declare variables and grab references to all the page elements we'll need to access, then set [event listeners](/en-US/docs/Web/API/EventTarget/addEventListener) on the three buttons.

### Establishing a connection

When the user clicks the "Connect" button, the `connectPeers()` function is called. It disables the button while connecting to prevent another connection attempt. We're going to break this up and look at it a bit at a time, for clarity.

> [!NOTE]
> Even though both ends of our connection will be on the same page, we're going to refer to the one that starts the connection as the "local" one, and to the other as the "remote" end.

```js live-sample___simple-data-channel
async function connectPeers() {
  connectButton.disabled = true;
```

#### Set up the local peer

```js live-sample___simple-data-channel
localConnection = new RTCPeerConnection();

sendChannel = localConnection.createDataChannel("sendChannel");
sendChannel.onopen = handleSendChannelStatusChange;
sendChannel.onclose = handleSendChannelStatusChange;
```

The first step is to create the "local" end of the connection. This is the peer that will send out the connection request. The next step is to create the {{domxref("RTCDataChannel")}} by calling {{domxref("RTCPeerConnection.createDataChannel()")}} and set up event listeners to monitor the channel so that we know when it's opened and closed (that is, when the channel is connected or disconnected within that peer connection).

It's important to keep in mind that each end of the channel has its own {{domxref("RTCDataChannel")}} object.

#### Set up the remote peer

```js live-sample___simple-data-channel
remoteConnection = new RTCPeerConnection();
remoteConnection.ondatachannel = receiveChannelCallback;
```

The remote end is set up similarly, except that we don't need to explicitly create an {{domxref("RTCDataChannel")}} ourselves, since we're going to be connected through the channel established above. Instead, we set up a {{domxref("RTCPeerConnection.datachannel_event", "datachannel")}} event handler; this will be called when the data channel is opened; this handler will receive an `RTCDataChannel` object; you'll see this below.

#### Set up the ICE candidates

The next step is to set up each connection with ICE candidate listeners; these will be called when there's a new ICE candidate to tell the other side about.

> [!NOTE]
> In a real-world scenario in which the two peers aren't running in the same context, the process is a bit more involved; each side provides, one at a time, a suggested way to connect (for example, UDP, UDP with a relay, TCP, etc.) by calling {{domxref("RTCPeerConnection.addIceCandidate()")}}, and they go back and forth until agreement is reached. But here, we just accept the first offer on each side, since there's no actual networking involved.

```js live-sample___simple-data-channel
localConnection.onicecandidate = (e) =>
  !e.candidate ||
  remoteConnection.addIceCandidate(e.candidate).catch(handleAddCandidateError);

remoteConnection.onicecandidate = (e) =>
  !e.candidate ||
  localConnection.addIceCandidate(e.candidate).catch(handleAddCandidateError);
```

We configure each {{domxref("RTCPeerConnection")}} to have an event handler for the {{domxref("RTCPeerConnection.icecandidate_event", "icecandidate")}} event.

#### Start the connection attempt

The last thing we need to do in order to begin connecting our peers is to create a connection offer.

```js live-sample___simple-data-channel
try {
  const offer = await localConnection.createOffer();
  await localConnection.setLocalDescription(offer);
  await remoteConnection.setRemoteDescription(localConnection.localDescription);
  const answer = await remoteConnection.createAnswer();
  await remoteConnection.setLocalDescription(answer);
  await localConnection.setRemoteDescription(remoteConnection.localDescription);
} catch (error) {
  handleCreateDescriptionError(error);
}
```

```js hidden live-sample___simple-data-channel
}
```

Each `await` waits for the operation to complete before proceeding to the next step. Let's go through this line by line and decipher what it means.

1. First, we call {{domxref("RTCPeerConnection.createOffer()")}} method to create an {{Glossary("SDP")}} (Session Description Protocol) blob describing the connection we want to make. This method accepts, optionally, an object with constraints to be met for the connection to meet your needs, such as whether the connection should support audio, video, or both. In our simple example, we don't have any constraints.
2. If the offer is created successfully, we pass the blob along to the local connection's {{domxref("RTCPeerConnection.setLocalDescription()")}} method. This configures the local end of the connection.
3. The next step is to connect the local peer to the remote by telling the remote peer about it. This is done by calling {{domxref("RTCPeerConnection.setRemoteDescription()", "remoteConnection.setRemoteDescription()")}}. Now the `remoteConnection` knows about the connection that's being built. In a real application, this would require a signaling server to exchange the description object.
4. That means it's time for the remote peer to reply. It does so by calling its {{domxref("RTCPeerConnection.createAnswer", "createAnswer()")}} method. This generates a blob of SDP which describes the connection the remote peer is willing and able to establish. This configuration lies somewhere in the union of options that both peers can support.
5. Once the answer has been created, it's passed into the remoteConnection by calling {{domxref("RTCPeerConnection.setLocalDescription()")}}. That establishes the remote's end of the connection (which, to the remote peer, is its local end. This stuff can be confusing, but you get used to it). Again, this would normally be exchanged through a signaling server.
6. Finally, the local connection's remote description is set to refer to the remote peer by calling localConnection's {{domxref("RTCPeerConnection.setRemoteDescription()")}}.
7. The `catch` block calls a routine that handles any errors that occur in the `try` block.

> [!NOTE]
> Once again, this process is not a real-world implementation; in normal usage, there's two chunks of code running on two machines, interacting and negotiating the connection. A side channel, commonly called a "signaling server," is usually used to exchange the description (which is in **application/sdp** form) between the two peers.

#### Handling connection errors

If creating or applying a description fails, we log the error, close the peer connections, and enable the "Connect" button so the user can try again. Errors when adding ICE candidates are also logged:

```js live-sample___simple-data-channel
function handleCreateDescriptionError(error) {
  console.log(`Unable to establish a connection: ${error.toString()}`);
  localConnection?.close();
  remoteConnection?.close();
  sendChannel = null;
  receiveChannel = null;
  localConnection = null;
  remoteConnection = null;
  connectButton.disabled = false;
}

function handleAddCandidateError() {
  console.log("Oh noes! addICECandidate failed!");
}
```

The channel's `open` event enables the "Send" and "Disconnect" buttons, as described below in [Handling channel status changes](#handling_channel_status_changes).

#### Connecting the data channel

Once the {{domxref("RTCPeerConnection")}} is open, the {{domxref("RTCPeerConnection.datachannel_event", "datachannel")}} event is sent to the remote to complete the process of opening the data channel; this invokes our `receiveChannelCallback()` method, which looks like this:

```js live-sample___simple-data-channel
function receiveChannelCallback(event) {
  receiveChannel = event.channel;
  receiveChannel.onmessage = handleReceiveMessage;
  receiveChannel.onopen = handleReceiveChannelStatusChange;
  receiveChannel.onclose = handleReceiveChannelStatusChange;
}
```

The {{domxref("RTCPeerConnection.datachannel_event", "datachannel")}} event includes, in its channel property, a reference to a {{domxref("RTCDataChannel")}} representing the remote peer's end of the channel. This is saved, and we set up, on the channel, event listeners for the events we want to handle. Once this is done, our `handleReceiveMessage()` method will be called each time data is received by the remote peer, and the `handleReceiveChannelStatusChange()` method will be called any time the channel's connection state changes, so we can react when the channel is fully opened and when it's closed.

### Handling channel status changes

Both our local and remote peers use a single method to handle events indicating a change in the status of the channel's connection.

When the local peer experiences an open or close event, the `handleSendChannelStatusChange()` method is called:

```js live-sample___simple-data-channel
function handleSendChannelStatusChange(event) {
  const state = event.currentTarget.readyState;
  console.log(`Send channel's status has changed to ${state}`);

  const open = state === "open" && !disconnecting;
  messageInputBox.disabled = !open;
  sendButton.disabled = !open;
  disconnectButton.disabled = !open;
  connectButton.disabled = open || disconnecting;
  if (open) {
    messageInputBox.focus();
  }
}
```

If the channel's state has changed to "open", that indicates that we have finished establishing the link between the two peers. If `disconnecting` is `true`, we keep everything disabled. Otherwise, the user interface is updated correspondingly by enabling the text input box for the message to send, focusing the input box so that the user can immediately begin to type, enabling the "Send" and "Disconnect" buttons, now that they're usable, and disabling the "Connect" button, since it is not needed when the connection is open.

If the state has changed to "closed", the opposite set of actions occurs: the input box and "Send" button are disabled, the "Connect" button is enabled so that the user can open a new connection if they wish to do so, and the "Disconnect" button is disabled, since it's not useful when no connection exists. Again, the `disconnecting` flag overrides this and keeps everything disabled. During an explicit disconnect, `disconnectPeers()` enables the "Connect" button after both channels have closed and cleanup is complete.

Our example's remote peer, on the other hand, ignores the status change events, except for logging the event to the console:

```js live-sample___simple-data-channel
function handleReceiveChannelStatusChange(event) {
  console.log(
    `Receive channel's status has changed to ${event.currentTarget.readyState}`,
  );
}
```

The `handleReceiveChannelStatusChange()` method receives as an input parameter the event which occurred; this is an {{domxref("Event")}}, whose `currentTarget` is the channel.

### Sending messages

When the user presses the "Send" button, the sendMessage() method we've established as the handler for the button's {{domxref("Element/click_event", "click")}} event is called. That method is simple enough:

```js live-sample___simple-data-channel
function sendMessage() {
  const message = messageInputBox.value;
  sendChannel.send(message);

  messageInputBox.value = "";
  messageInputBox.focus();
}
```

First, the text of the message is fetched from the input box's [`value`](/en-US/docs/Web/HTML/Reference/Elements/input#value) attribute. This is then sent to the remote peer by calling {{domxref("RTCDataChannel.send", "sendChannel.send()")}}. That's all there is to it! The rest of this method is just some user experience sugar — the input box is emptied and re-focused so the user can immediately begin typing another message.

### Receiving messages

When a "message" event occurs on the remote channel, our `handleReceiveMessage()` method is called as the event handler.

```js live-sample___simple-data-channel
function handleReceiveMessage(event) {
  const el = document.createElement("p");
  const textNode = document.createTextNode(event.data);

  el.appendChild(textNode);
  receiveBox.appendChild(el);
}
```

This method performs some basic {{Glossary("DOM")}} injection; it creates a new {{HTMLElement("p")}} (paragraph) element, then creates a new {{domxref("Text")}} node containing the message text, which is received in the event's `data` property. This text node is appended as a child of the new element, which is then inserted into the `receiveBox` block, thereby causing it to draw in the browser window.

### Disconnecting the peers

When the user clicks the "Disconnect" button, the `disconnectPeers()` method previously set as that button's handler is called.

```js live-sample___simple-data-channel
async function disconnectPeers() {
  if (disconnecting) {
    return;
  }
  disconnecting = true;
  connectButton.disabled = true;
  disconnectButton.disabled = true;
  sendButton.disabled = true;
  messageInputBox.disabled = true;

  function waitForClose(channel) {
    if (!channel || channel.readyState === "closed") {
      return Promise.resolve();
    }
    return new Promise((resolve) => {
      channel.addEventListener("close", resolve, { once: true });
    });
  }

  const closed = Promise.all([
    waitForClose(sendChannel),
    waitForClose(receiveChannel),
  ]);
  sendChannel?.close();
  receiveChannel?.close();
  // This sample has no timeout: if a close event never arrives,
  // cleanup remains pending and the controls stay disabled.
  // This shouldn't happen in practice.
  await closed;

  // Keep the peer connections alive until both channel close events have fired.
  localConnection?.close();
  remoteConnection?.close();
  sendChannel = null;
  receiveChannel = null;
  localConnection = null;
  remoteConnection = null;

  // Update user interface elements

  disconnecting = false;
  connectButton.disabled = false;
  messageInputBox.value = "";
}
```

Calling {{domxref("RTCDataChannel.close", "close()")}} starts an asynchronous shutdown. The `disconnectPeers()` function waits for both channels' `close` events before closing the underlying peer connections and clearing the references. Closing the peer connections immediately can interrupt this process and prevent the channel status handlers from running. Controls remain disabled during shutdown, so the user can't start a new connection that would overwrite these variables before cleanup finishes.

## Result

Click "Connect", enter a message, and click "Send" to display it in the receiving box. Click "Disconnect" to close the connection. You can then connect again to send more messages.

{{EmbedLiveSample("simple-data-channel", "100%", 360)}}

## See also

- [Signaling and Video Calling](/en-US/docs/Web/API/WebRTC_API/Signaling_and_video_calling).
- The [Perfect Negotiation](/en-US/docs/Web/API/WebRTC_API/Perfect_negotiation) pattern.
