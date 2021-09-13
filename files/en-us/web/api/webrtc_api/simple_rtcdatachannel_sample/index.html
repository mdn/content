---
title: A simple RTCDataChannel sample
slug: Web/API/WebRTC_API/Simple_RTCDataChannel_sample
tags:
  - API
  - Communication
  - Example
  - Tutorial
  - WebRTC
---
<p>{{WebRTCSidebar}}</p>

<p>The {{domxref("RTCDataChannel")}} interface is a feature of the <a href="/en-US/docs/Web/API/WebRTC_API">WebRTC API</a> which lets you open a channel between two peers over which you may send and receive arbitrary data. The API is intentionally similar to the <a href="/en-US/docs/Web/API/WebSockets_API">WebSocket API</a>, so that the same programming model can be used for each.</p>

<p>In this example, we will open an {{domxref("RTCDataChannel")}} connection linking two elements on the same page. While that's obviously a contrived scenario, it's useful for demonstrating the flow of connecting two peers. We'll cover the mechanics of accomplishing the connection and transmitting and receiving data, but we will save the bits about locating and linking to a remote computer for another example.</p>

<h2 id="The_HTML">The HTML</h2>

<p>First, let's take a quick look at the <a href="https://github.com/mdn/samples-server/tree/master/s/webrtc-simple-datachannel/index.html" rel="noopener">HTML that's needed</a>. There's nothing incredibly complicated here. First, we have a couple of buttons for establishing and closing the connection:</p>

<pre class="brush: html">&lt;button id="connectButton" name="connectButton" class="buttonleft"&gt;
  Connect
&lt;/button&gt;
&lt;button id="disconnectButton" name="disconnectButton" class="buttonright" disabled&gt;
  Disconnect
&lt;/button&gt;</pre>

<p>Then there's a box which contains the text input box into which the user can type a message to transmit, with a button to send the entered text. This {{HTMLElement("div")}} will be the first peer in the channel.</p>

<pre class="brush: html">  &lt;div class="messagebox"&gt;
    &lt;label for="message"&gt;Enter a message:
      &lt;input type="text" name="message" id="message" placeholder="Message text"
              inputmode="latin" size=60 maxlength=120 disabled&gt;
    &lt;/label&gt;
    &lt;button id="sendButton" name="sendButton" class="buttonright" disabled&gt;
      Send
    &lt;/button&gt;
  &lt;/div&gt;</pre>

<p>Finally, there's the little box into which we'll insert the messages. This {{HTMLElement("div")}} block will be the second peer.</p>

<pre class="brush: html">&lt;div class="messagebox" id="receivebox"&gt;
  &lt;p&gt;Messages received:&lt;/p&gt;
&lt;/div&gt;</pre>

<h2 id="The_JavaScript_code">The JavaScript code</h2>

<p>While you can just <a href="https://github.com/mdn/samples-server/tree/master/s/webrtc-simple-datachannel/main.js" rel="noopener">look at the code itself on GitHub</a>, below we'll review the parts of the code that do the heavy lifting.</p>

<p>The WebRTC API makes heavy use of {{jsxref("Promise")}}s. They make it very easy to chain the steps of the connection process together; if you haven't already read up on this functionality of <a href="/en-US/docs/Archive/Web/JavaScript/New_in_JavaScript/ECMAScript_2015_support_in_Mozilla">ECMAScript 2015</a>, you should read up on them. Similarly, this example uses <a href="/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions">arrow functions</a> to simplify syntax.</p>

<h3 id="Starting_up">Starting up</h3>

<p>When the script is run, we set up a {{event("load")}} event listener, so that once the page is fully loaded, our <code>startup()</code> function is called.</p>

<pre class="brush: js">function startup() {
  connectButton = document.getElementById('connectButton');
  disconnectButton = document.getElementById('disconnectButton');
  sendButton = document.getElementById('sendButton');
  messageInputBox = document.getElementById('message');
  receiveBox = document.getElementById('receivebox');

  // Set event listeners for user interface widgets

  connectButton.addEventListener('click', connectPeers, false);
  disconnectButton.addEventListener('click', disconnectPeers, false);
  sendButton.addEventListener('click', sendMessage, false);
}</pre>

<p>This is quite straightforward. We grab references to all the page elements we'll need to access, then set {{domxref("EventListener", "event listeners")}} on the three buttons.</p>

<h3 id="Establishing_a_connection">Establishing a connection</h3>

<p>When the user clicks the "Connect" button, the <code>connectPeers()</code> method is called. We're going to break this up and look at it a bit at a time, for clarity.</p>

<div class="note">
<p><strong>Note:</strong> Even though both ends of our connection will be on the same page, we're going to refer to the one that starts the connection as the "local" one, and to the other as the "remote" end.</p>
</div>

<h4 id="Set_up_the_local_peer">Set up the local peer</h4>

<pre class="brush: js">localConnection = new RTCPeerConnection();

sendChannel = localConnection.createDataChannel("sendChannel");
sendChannel.onopen = handleSendChannelStatusChange;
sendChannel.onclose = handleSendChannelStatusChange;
</pre>

<p>The first step is to create the "local" end of the connection. This is the peer that will send out the connection request.  The next step is to create the {{domxref("RTCDataChannel")}} by calling {{domxref("RTCPeerConnection.createDataChannel()")}} and set up event listeners to monitor the channel so that we know when it's opened and closed (that is, when the channel is connected or disconnected within that peer connection).</p>

<p>It's important to keep in mind that each end of the channel has its own {{domxref("RTCDataChannel")}} object.</p>

<h4 id="Set_up_the_remote_peer">Set up the remote peer</h4>

<pre class="brush: js">remoteConnection = new RTCPeerConnection();
remoteConnection.ondatachannel = receiveChannelCallback;</pre>

<p>The remote end is set up similarly, except that we don't need to explicitly create an {{domxref("RTCDataChannel")}} ourselves, since we're going to be connected through the channel established above. Instead, we set up a {{event("datachannel")}} event handler; this will be called when the data channel is opened; this handler will receive an <code>RTCDataChannel</code> object; you'll see this below.</p>

<h4 id="Set_up_the_ICE_candidates">Set up the ICE candidates</h4>

<p>The next step is to set up each connection with ICE candidate listeners; these will be called when there's a new ICE candidate to tell the other side about.</p>

<div class="note">
<p><strong>Note:</strong> In a real-world scenario in which the two peers aren't running in the same context, the process is a bit more involved; each side provides, one at a time, a suggested way to connect (for example, UDP, UDP with a relay, TCP, etc.) by calling {{domxref("RTCPeerConnection.addIceCandidate()")}}, and they go back and forth until agreement is reached. But here, we just accept the first offer on each side, since there's no actual networking involved.</p>
</div>

<pre class="brush: js">    localConnection.onicecandidate = e =&gt; !e.candidate
        || remoteConnection.addIceCandidate(e.candidate)
        .catch(handleAddCandidateError);

    remoteConnection.onicecandidate = e =&gt; !e.candidate
        || localConnection.addIceCandidate(e.candidate)
        .catch(handleAddCandidateError);</pre>

<p>We configure each {{domxref("RTCPeerConnection")}} to have an event handler for the {{event("icecandidate")}} event.</p>

<h4 id="Start_the_connection_attempt">Start the connection attempt</h4>

<p>The last thing we need to do in order to begin connecting our peers is to create a connection offer.</p>

<pre class="brush: js">    localConnection.createOffer()
    .then(offer =&gt; localConnection.setLocalDescription(offer))
    .then(() =&gt; remoteConnection.setRemoteDescription(localConnection.localDescription))
    .then(() =&gt; remoteConnection.createAnswer())
    .then(answer =&gt; remoteConnection.setLocalDescription(answer))
    .then(() =&gt; localConnection.setRemoteDescription(remoteConnection.localDescription))
    .catch(handleCreateDescriptionError);</pre>

<p>Let's go through this line by line and decipher what it means.</p>

<ol>
	<li>First, we call {{domxref("RTCPeerConnection.createOffer()")}} method to create an {{Glossary("SDP")}} (Session Description Protocol) blob describing the connection we want to make. This method accepts, optionally, an object with constraints to be met for the connection to meet your needs, such as whether the connection should support audio, video, or both. In our simple example, we don't have any constraints.</li>
	<li>If the offer is created successfully, we pass the blob along to the local connection's {{domxref("RTCPeerConnection.setLocalDescription()")}} method. This configures the local end of the connection.</li>
	<li>The next step is to connect the local peer to the remote by telling the remote peer about it. This is done by calling <code>remoteConnection.</code>{{domxref("RTCPeerConnection.setRemoteDescription()")}}. Now the <code>remoteConnection</code> knows about the connection that's being built. In a real application, this would require a signaling server to exchange the description object.</li>
	<li>That means it's time for the remote peer to reply. It does so by calling its {{domxref("RTCPeerConnection.createAnswer", "createAnswer()")}} method. This generates a blob of SDP which describes the connection the remote peer is willing and able to establish. This configuration lies somewhere in the union of options that both peers can support.</li>
	<li>Once the answer has been created, it's passed into the remoteConnection by calling {{domxref("RTCPeerConnection.setLocalDescription()")}}. That establishes the remote's end of the connection (which, to the remote peer, is its local end. This stuff can be confusing, but you get used to it). Again, this would normally be exchanged through a signalling server.</li>
	<li>Finally, the local connection's remote description is set to refer to the remote peer by calling localConnection's {{domxref("RTCPeerConnection.setRemoteDescription()")}}.</li>
	<li>The <code>catch()</code> calls a routine that handles any errors that occur.</li>
</ol>

<div class="note">
<p><strong>Note:</strong> Once again, this process is not a real-world implementation; in normal usage, there's two chunks of code running on two machines, interacting and negotiating the connection. A side channel, commonly called a “signalling server,” is usually used to exchange the description (which is in <strong>application/sdp</strong> form) between the two peers.</p>
</div>

<h4 id="Handling_successful_peer_connection">Handling successful peer connection</h4>

<p>As each side of the peer-to-peer connection is successfully linked up, the corresponding {{domxref("RTCPeerConnection")}}'s {{event("icecandidate")}} event is fired. These handlers can do whatever's needed, but in this example, all we need to do is update the user interface:</p>

<pre class="brush: js">  function handleLocalAddCandidateSuccess() {
    connectButton.disabled = true;
  }

  function handleRemoteAddCandidateSuccess() {
    disconnectButton.disabled = false;
  }</pre>

<p>The only thing we do here is disable the "Connect" button when the local peer is connected and enable the "Disconnect" button when the remote peer connects.</p>

<h4 id="Connecting_the_data_channel">Connecting the data channel</h4>

<p>Once the {{domxref("RTCPeerConnection")}} is open, the {{event("datachannel")}} event is sent to the remote to complete the process of opening the data channel; this invokes our <code>receiveChannelCallback()</code> method, which looks like this:</p>

<pre class="brush: js">  function receiveChannelCallback(event) {
    receiveChannel = event.channel;
    receiveChannel.onmessage = handleReceiveMessage;
    receiveChannel.onopen = handleReceiveChannelStatusChange;
    receiveChannel.onclose = handleReceiveChannelStatusChange;
  }</pre>

<p>The {{event("datachannel")}} event includes, in its channel property, a reference to a {{domxref("RTCDataChannel")}} representing the remote peer's end of the channel. This is saved, and we set up, on the channel, event listeners for the events we want to handle. Once this is done, our <code>handleReceiveMessage()</code> method will be called each time data is received by the remote peer, and the <code>handleReceiveChannelStatusChange()</code> method will be called any time the channel's connection state changes, so we can react when the channel is fully opened and when it's closed.</p>

<h3 id="Handling_channel_status_changes">Handling channel status changes</h3>

<p>Both our local and remote peers use a single method to handle events indicating a change in the status of the channel's connection.</p>

<p>When the local peer experiences an open or close event, the <code>handleSendChannelStatusChange()</code> method is called:</p>

<pre class="brush: js">  function handleSendChannelStatusChange(event) {
    if (sendChannel) {
      var state = sendChannel.readyState;

      if (state === "open") {
        messageInputBox.disabled = false;
        messageInputBox.focus();
        sendButton.disabled = false;
        disconnectButton.disabled = false;
        connectButton.disabled = true;
      } else {
        messageInputBox.disabled = true;
        sendButton.disabled = true;
        connectButton.disabled = false;
        disconnectButton.disabled = true;
      }
    }
  }</pre>

<p>If the channel's state has changed to "open", that indicates that we have finished establishing the link between the two peers. The user interface is updated correspondingly by enabling the text input box for the message to send, focusing the input box so that the user can immediately begin to type, enabling the "Send" and "Disconnect" buttons, now that they're usable, and disabling the "Connect" button, since it is not needed when the conneciton is open.</p>

<p>If the state has changed to "closed", the opposite set of actions occurs: the input box and "Send" button are disabled, the "Connect" button is enabled so that the user can open a new connection if they wish to do so, and the "Disconnect" button is disabled, since it's not useful when no connection exists.</p>

<p>Our example's remote peer, on the other hand, ignores the status change events, except for logging the event to the console:</p>

<pre class="brush: js">  function handleReceiveChannelStatusChange(event) {
    if (receiveChannel) {
      console.log("Receive channel's status has changed to " +
                  receiveChannel.readyState);
    }
  }</pre>

<p>The <code>handleReceiveChannelStatusChange()</code> method receives as an input parameter the event which occurred; this will be an {{domxref("RTCDataChannelEvent")}}.</p>

<h3 id="Sending_messages">Sending messages</h3>

<p>When the user presses the "Send" button, the sendMessage() method we've established as the handler for the button's {{event("click")}} event is called. That method is simple enough:</p>

<pre class="brush: js">  function sendMessage() {
    var message = messageInputBox.value;
    sendChannel.send(message);

    messageInputBox.value = "";
    messageInputBox.focus();
  }</pre>

<p>First, the text of the message is fetched from the input box's {{htmlattrxref("value", "input")}} attribute. This is then sent to the remote peer by calling {{domxref("RTCDataChannel.send", "sendChannel.send()")}}. That's all there is to it! The rest of this method is just some user experience sugar -- the input box is emptied and re-focused so the user can immediately begin typing another message.</p>

<h3 id="Receiving_messages">Receiving messages</h3>

<p>When a "message" event occurs on the remote channel, our <code>handleReceiveMessage()</code> method is called as the event handler.</p>

<pre class="brush: js">  function handleReceiveMessage(event) {
    var el = document.createElement("p");
    var txtNode = document.createTextNode(event.data);

    el.appendChild(txtNode);
    receiveBox.appendChild(el);
  }</pre>

<p>This method performs some basic {{Glossary("DOM")}} injection; it creates a new {{HTMLElement("p")}} (paragraph) element, then creates a new {{domxref("Text")}} node containing the message text, which is received in the event's <code>data</code> property. This text node is appended as a child of the new element, which is then inserted into the <code>receiveBox</code> block, thereby causing it to draw in the browser window.</p>

<h3 id="Disconnecting_the_peers">Disconnecting the peers</h3>

<p>When the user clicks the "Disconnect" button, the <code>disconnectPeers()</code> method previously set as that button's handler is called.</p>

<pre class="brush: js">  function disconnectPeers() {

    // Close the RTCDataChannels if they're open.

    sendChannel.close();
    receiveChannel.close();

    // Close the RTCPeerConnections

    localConnection.close();
    remoteConnection.close();

    sendChannel = null;
    receiveChannel = null;
    localConnection = null;
    remoteConnection = null;

    // Update user interface elements

    connectButton.disabled = false;
    disconnectButton.disabled = true;
    sendButton.disabled = true;

    messageInputBox.value = "";
    messageInputBox.disabled = true;
  }
</pre>

<p>This starts by closing each peer's {{domxref("RTCDataChannel")}}, then, similarly, each {{domxref("RTCPeerConnection")}}. Then all the saved references to these objects are set to <code>null</code> to avoid accidental reuse, and the user interface is updated to reflect the fact that the connection has been closed.</p>

<h2 id="Next_steps">Next steps</h2>

<p>You should <a href="https://mdn-samples.mozilla.org/s/webrtc-simple-datachannel">try out this example</a> and take a look at the <a href="https://github.com/mdn/samples-server/tree/master/s/webrtc-simple-datachannel">webrtc-simple-datachannel</a> source code, available on GitHub.</p>

<h2 id="See_also">See also</h2>

<ul>
	<li><a href="/en-US/docs/Web/API/WebRTC_API/Signaling_and_video_calling">Signaling and Video Calling</a>.</li>
	<li>The <a href="/en-US/docs/Web/API/WebRTC_API/Perfect_negotiation">Perfect Negotiation</a> pattern.</li>
</ul>
