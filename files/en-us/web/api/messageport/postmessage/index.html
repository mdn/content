---
title: MessagePort.postMessage()
slug: Web/API/MessagePort/postMessage
tags:
- API
- Channel messaging
- MessagePort
- Method
- Reference
- postMessage
browser-compat: api.MessagePort.postMessage
---
<p>{{APIRef("HTML DOM")}}</p>

<p>The <code><strong>postMessage()</strong></code> method of the
  {{domxref("MessagePort")}} interface sends a message from the port, and optionally,
  transfers ownership of objects to other browsing contexts.</p>

<p>{{AvailableInWorkers}}</p>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js">port.postMessage(message, transferList);</pre>

<h3 id="Returns">Returns</h3>

<p>Void.</p>

<h3 id="Parameters">Parameters</h3>

<dl>
  <dt>message</dt>
  <dd>The message you want to send through the channel. This can be of any basic data
    type. Multiple data items can be sent as an array.</dd>
  <dt>transferList {{optional_inline}}</dt>
  <dd>{{domxref("Transferable")}} objects to be transferred — these objects have their
    ownership transferred to the receiving browsing context, so are no longer usable by
    the sending browsing context.</dd>
</dl>

<h2 id="Example">Example</h2>

<p>In the following code block, you can see a new channel being created using the
  {{domxref("MessageChannel()", "MessageChannel.MessageChannel")}} constructor. When the
  IFrame has loaded, we pass {{domxref("MessageChannel.port2")}} to the IFrame using
  {{domxref("window.postMessage")}} along with a message. The <code>handleMessage</code>
  handler then responds to a message being sent back from the IFrame using
  <code>onmessage</code>, putting it into a paragraph —
  {{domxref("MessageChannel.port1")}} is listened to, to check when the message arrives.
</p>

<pre class="brush: js">var channel = new MessageChannel();
var para = document.querySelector('p');

var ifr = document.querySelector('iframe');
var otherWindow = ifr.contentWindow;

ifr.addEventListener("load", iframeLoaded, false);

function iframeLoaded() {
  otherWindow.postMessage('Hello from the main page!', '*', [channel.port2]);
}

channel.port1.onmessage = handleMessage;
function handleMessage(e) {
  para.innerHTML = e.data;
}   </pre>

<p>For a full working example, see our <a class="external external-icon"
    href="https://github.com/mdn/dom-examples/tree/master/channel-messaging-basic">channel
    messaging basic demo</a> on Github (<a class="external external-icon"
    href="https://mdn.github.io/dom-examples/channel-messaging-basic/">run it live
    too</a>).</p>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
  <li><a href="/en-US/docs/Web/API/Channel_Messaging_API/Using_channel_messaging">Using
      channel messaging</a></li>
</ul>
