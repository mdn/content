---
title: 'RTCDataChannel: message event'
slug: Web/API/RTCDataChannel/message_event
tags:
  - API
  - Data Channel
  - Networking
  - RTCDataChannel
  - Reference
  - WebRTC
  - WebRTC API
  - channel
  - data
  - events
  - message
  - messaging
  - Event
  - rtc
browser-compat: api.RTCDataChannel.message_event
---
{{APIRef("WebRTC")}}

The WebRTC **`message`** event is sent to the {{domxref("RTCDataChannel.onmessage", "onmessage")}} event handler on an {{domxref("RTCDataChannel")}} object when a message has been received from the remote peer.

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
      <td>
        {{domxref("RTCDataChannel.onmessage", "onmessage")}}
      </td>
    </tr>
  </tbody>
</table>

> **Note:** The `message` event uses as its event object type the {{domxref("MessageEvent")}} interface defined by the HTML specification.

## Examples

For a given {{domxref("RTCDataChannel")}}, `dc`, created for a peer connection using its {{domxref("RTCPeerConnection.createDataChannel", "createDataChannel()")}} method, this code sets up a handler for incoming messages and acts on them by adding the data contained within the message to the current document as a new {{HTMLElement("p")}} (paragraph) element.

```js
dc.addEventListener("message", ev => {
  let newParagraph = document.createElement("p");
  let textNode = document.createTextNode(event.data);
  newParagraph.appendChild(textNode);

  document.body.appendChild(newParagraph);
}, false);
```

Lines 2-4 create the new paragraph element and add the message data to it as a new text node. Line 6 appends the new paragraph to the end of the document's body.

You can also use an `RTCDataChannel` object's {{domxref("RTCDataChannel.onmessage", "onmessage")}} event handler property to set the event handler:

```js
dc.onmessage = ev => {
  let newParagraph = document.createElement("p");
  let textNode = document.createTextNode(event.data);
  newParagraph.appendChild(textNode);

  document.body.appendChild(newParagraph);
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [WebRTC API](/en-US/docs/Web/API/WebRTC_API)
- [A simple RTCDataChannel example](/en-US/docs/Web/API/WebRTC_API/Simple_RTCDataChannel_sample)
- Related events: {{domxref("RTCDataChannel.open_event", "open")}}, {{domxref("RTCDataChannel.close_event", "close")}}, and {{domxref("RTCDataChannel.error_event", "error")}}
- {{domxref("RTCDataChannel.send()")}}
