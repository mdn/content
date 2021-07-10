---
title: Creating a Call
slug: Web/API/WebRTC_API/Build_a_phone_with_peerjs/Connect_peers/Creating_a_call
---
<p>{{WebRTCSidebar}}</p>

<p>{{PreviousMenuNext("Web/API/WebRTC_API/Build_a_phone_with_peerjs/Connect_peers/Create_a_peer_connection", "Web/API/WebRTC_API/Build_a_phone_with_peerjs/Connect_peers/Answer_a_call")}}</p>

<p>Exciting times — now you’re going to give your users the ability to create calls.</p>

<ol>
  <li>
    <p>First of all,  get a reference to the "Call" button that's defined in the HTML, by adding the following to the bottom of <code>script.js</code>:</p>

<pre class="brush: js">const callBtn = document.querySelector('.call-btn');</pre>
  </li>
  <li>
    <p>When a caller clicks "Call" you'll want to ask them for the peer ID of the peer they want to call (which we will store in the <code>code</code> variable in <code>getStreamCode()</code>) and then you'll want to create a connection with that code. Add the following below your previous code:</p>

<pre class="brush: js">callBtn.addEventListener('click', function(){
    getStreamCode();
    connectPeers();
    const call = peer.call(code, window.localStream); // A

    call.on('stream', function(stream) { // B
        window.remoteAudio.srcObject = stream; // C
        window.remoteAudio.autoplay = true; // D
        window.peerStream = stream; //E
        showConnectedContent(); //F    });
    })
})</pre>

    <p>Let's walk through this code:</p>
    <ul>
      <li>
        <p><code>const call = peer.call(code, window.localStream)</code>: This will create a call with the <code>code</code> and <code>window.localStream</code> we've previously assigned. Note that the <code>localStream</code> will be the user's <code>localStream</code>. So for caller A it'll be their stream &amp; for B, their own stream.</p>
      </li>
      <li>
        <p><code>call.on('stream', function(stream) {</code> : peerJS gives us a <code>stream</code> event which you can use on the <code>call</code> that you've created. When a call starts streaming, you need to ensure that the remote stream coming from the call is assigned to the correct HTML elements and window, this is where you'll do that.</p>
      </li>
      <li>
        <p>The anonymous function takes a <code>MediaStream</code> object as an argument, which you then have to set to your window's HTML like you've done before. Here we get your remote <code>&lt;audio&gt;</code> element and assign the stream passed to the function to the <code>srcObject</code> property.</p>
      </li>
      <li>
        <p>Ensure the element's <code>autoplay</code> attribute is also set to <code>true</code>.</p>
      </li>
      <li>
        <p>Ensure that the window's <code>peerStream</code> is set to the stream passed to the function.</p>
      </li>
      <li>
      <p>Finally you want to show the correct content, so call the <code>showConnectedContent()</code> function you created earlier.</p>
      </li>
    </ul>
  <li>
    <p>To test this out, open <code>localhost:8000</code> in two browser windows and click Call inside one of them. You should see this:</p>

    <p><img alt="Two screens side by side both A cream background with the words 'phone a friend' in bold, dark green font as the heading. The first screen has 'Your device ID is: 3b77.' and the second 'Your device ID is: 2doa', is immediately below the title and 'please use headphones!' below that. Following on, a big dark green button with 'Call' written in the same cream color of the background. The second screen has a browser dialogue that asks for a peer id." src="1pubiml_pj-jjavpjjeouow.png"></p>

    <p>If you submit the other peer's ID, the call will be connected!</p>
  </li>
</ol>

<p>This is all working so far, but we need to give the other browser the chance to answer or decline the call We'll do that next.</p>

<p>{{PreviousMenuNext("Web/API/WebRTC_API/Build_a_phone_with_peerjs/Connect_peers/Create_a_peer_connection", "Web/API/WebRTC_API/Build_a_phone_with_peerjs/Connect_peers/Answer_a_call")}}</p>
