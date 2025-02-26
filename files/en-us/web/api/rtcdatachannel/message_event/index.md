---
title: "RTCDataChannel: message event"
short-title: message
slug: Web/API/RTCDataChannel/message_event
page-type: web-api-event
browser-compat: api.RTCDataChannel.message_event
---

{{APIRef("WebRTC")}}

The WebRTC **`message`** event is sent to the `onmessage` event handler on an {{domxref("RTCDataChannel")}} object when a message has been received from the remote peer.

> [!NOTE]
> The `message` event uses as its event object type the {{domxref("MessageEvent")}} interface defined by the HTML specification.

This event is not cancelable and does not bubble.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js
addEventListener("message", (event) => {});

onmessage = (event) => {};
```

## Event type

A {{domxref("MessageEvent")}}. Inherits from {{domxref("Event")}}.

{{InheritanceDiagram("MessageEvent")}}

## Event properties

_Also inherits properties from its parent interface, {{domxref("Event")}}._

- {{domxref("MessageEvent.data")}} {{ReadOnlyInline}}
  - : The data sent by the message emitter.
- {{domxref("MessageEvent.origin")}} {{ReadOnlyInline}}
  - : A string representing the origin of the message emitter.
- {{domxref("MessageEvent.lastEventId")}} {{ReadOnlyInline}}
  - : A string representing a unique ID for the event.
- {{domxref("MessageEvent.source")}} {{ReadOnlyInline}}
  - : A reference to the message emitter, one of {{glossary("WindowProxy")}}, {{domxref("MessagePort")}}, or {{domxref("ServiceWorker")}}.
- {{domxref("MessageEvent.ports")}} {{ReadOnlyInline}}
  - : An array of {{domxref("MessagePort")}} objects representing the ports associated with the channel the message is being sent through (where appropriate, e.g. in channel messaging or when sending a message to a shared worker).

## Examples

For a given {{domxref("RTCDataChannel")}}, `dc`, created for a peer connection using its {{domxref("RTCPeerConnection.createDataChannel", "createDataChannel()")}} method, this code sets up a handler for incoming messages and acts on them by adding the data contained within the message to the current document as a new {{HTMLElement("p")}} (paragraph) element.

```js
dc.addEventListener(
  "message",
  (event) => {
    let newParagraph = document.createElement("p");
    let textNode = document.createTextNode(event.data);
    newParagraph.appendChild(textNode);

    document.body.appendChild(newParagraph);
  },
  false,
);
```

We first create the new paragraph element and add the message data to it as a new text node. Then we append the new paragraph to the end of the document's body.

You can also use an `RTCDataChannel` object's `onmessage` event handler property to set the event handler:

```js
dc.onmessage = (event) => {
  let newParagraph = document.createElement("p");
  let textNode = document.createTextNode(event.data);
  newParagraph.appendChild(textNode);

  document.body.appendChild(newParagraph);
};
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
