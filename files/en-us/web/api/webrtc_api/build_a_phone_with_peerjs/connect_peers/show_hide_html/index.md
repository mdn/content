---
title: Showing and hiding HTML
slug: Web/API/WebRTC_API/Build_a_phone_with_peerjs/Connect_peers/Show_hide_html
---
<p>{{WebRTCSidebar}}</p>

{{PreviousMenuNext("Web/API/WebRTC_API/Build_a_phone_with_peerjs/Connect_peers/Get_microphone_permission", "Web/API/WebRTC_API/Build_a_phone_with_peerjs/Connect_peers/Create_a_peer_connection")}}

<p>Alright, so you've got the microphone permissions set up. The next step is to make sure each user knows what their peer ID is so that they can make connections. The peerJS framework gives us a bunch of event listeners we can call on the peer we created earlier on.</p>

<ol>
  <li>
    <p>Let's use the <code>open</code> event to create a listener that displays the peer's ID when it is open. Add the following code to the bottom of <code>script.js</code>:</p>

<pre class="brush: js">peer.on('open', function () {
    window.caststatus.textContent = `Your device ID is: ${peer.id}`;
});</pre>

    <p>Here you’re replacing the text in the HTML element with the ID <code>caststatus</code>.</p>
  </li>
  <li>
    <p>Try reloading the app in your browser. Instead of <code>connecting...</code>, you should see <code>Your device ID is: &lt;peer ID&gt;</code>.</p>

    <p><img alt="A cream background with the words 'phone a friend' in bold, dark green font as the heading. 'Your device ID is: 3b77' is immediately below that and 'please use headphones!' below that. Following on, a big dark green button with 'Call' written in the same cream color of the background." src="158clu6q0bcaxyhqrt9lvra.png"></p>
  </li>
  <li>
    <p>While you're here, you may as well create some functions to display and hide various content, which you'll use later. There are two functions you should create, <code>showCallContent()</code> and <code>showConnectedContent()</code>. These functions will be responsible for showing the call button and showing the hang up button and audio elements when appropriate.</p>

<pre class="brush: js">const audioContainer = document.querySelector('.call-container');/**
 * Displays the call button and peer ID
 * @returns{void}
 */

function showCallContent() {
    window.caststatus.textContent = `Your device ID is: ${peer.id}`;
    callBtn.hidden = false;
    audioContainer.hidden = true;
}

/**
 * Displays the audio controls and correct copy
 * @returns{void}
 */

function showConnectedContent() {
    window.caststatus.textContent = `You're connected`;
    callBtn.hidden = true;
    audioContainer.hidden = false;
}</pre>
  </li>
</ol>

{{PreviousMenuNext("Web/API/WebRTC_API/Build_a_phone_with_peerjs/Connect_peers/Get_microphone_permission", "Web/API/WebRTC_API/Build_a_phone_with_peerjs/Connect_peers/Create_a_peer_connection")}}
