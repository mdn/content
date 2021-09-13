---
title: 'MessagePort: messageerror event'
slug: Web/API/MessagePort/messageerror_event
tags:
  - Event
browser-compat: api.MessagePort.messageerror_event
---
<div>{{APIRef}}</div>

<p>The <code>messageerror</code> event is fired on a {{domxref('MessagePort')}} object when it receives a message that can't be deserialized.</p>

<table class="properties">
 <tbody>
  <tr>
   <th scope="row">Bubbles</th>
   <td>No</td>
  </tr>
  <tr>
   <th scope="row">Cancelable</th>
   <td>No</td>
  </tr>
  <tr>
   <th scope="row">Interface</th>
   <td>{{domxref("MessageEvent")}}</td>
  </tr>
  <tr>
   <th scope="row">Event handler property</th>
   <td><code><a href="/en-US/docs/Web/API/MessagePort/onmessageerror">onmessageerror</a></code></td>
  </tr>
 </tbody>
</table>

<h2 id="Examples">Examples</h2>

<p>Suppose a script creates a <code><a href="/en-US/docs/Web/API/MessageChannel">MessageChannel</a></code> and sends one of the ports to a different browsing context, such as another <code><a href="/en-US/docs/Web/HTML/Element/iframe">&lt;iframe&gt;</a></code>, using code like this:</p>

<pre class="brush: js">const channel = new MessageChannel();
const myPort = channel.port1;
const targetFrame = window.top.frames[1];
const targetOrigin = 'https://example.org';

const messageControl = document.querySelector('#message');
const channelMessageButton = document.querySelector('#channel-message');

channelMessageButton.addEventListener('click', () =&gt; {
    myPort.postMessage(messageControl.value);
})

targetFrame.postMessage('init', targetOrigin, [channel.port2]);</pre>

<p>The target can receive the port and start listening for messages and message errors on it using code like this:</p>

<pre class="brush: js">window.addEventListener('message', (event) =&gt; {
    const myPort = event.ports[0];

    myPort.addEventListener('message', (event) =&gt; {
        received.textContent = event.data;
    });

    myPort.addEventListener('messageerror', (event) =&gt; {
        console.error(event.data);
    });

    myPort.start();
});</pre>

<p>Note that the listener must call <code><a href="/en-US/docs/Web/API/MessagePort/start">MessagePort.start()</a></code> before any messages will be delivered to this port. This is only needed when using the <code><a href="/en-US/docs/Web/API/EventTarget/addEventListener">addEventListener()</a></code> method: if the receiver uses <code><a href="/en-US/docs/Web/API/MessagePort/onmessage">onmessage</a></code> instead, <code>start()</code> is called implicitly:</p>

<pre class="brush: js">window.addEventListener('message', (event) =&gt; {
    const myPort = event.ports[0];

    myPort.onmessage = (event) =&gt; {
        received.textContent = event.data;
    };

    myPort.onmessageerror = (event) =&gt; {
        console.error(event.data);
    };

});</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
 <li>Related events: <code><a href="/en-US/docs/Web/API/MessagePort/message_event">message</a></code>.</li>
 <li><a href="/en-US/docs/Web/API/Channel_Messaging_API/Using_channel_messaging">Using channel messaging</a></li>
</ul>
