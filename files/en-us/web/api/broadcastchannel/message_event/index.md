---
title: 'BroadcastChannel: message event'
slug: Web/API/BroadcastChannel/message_event
page-type: web-api-event
tags:
  - Event
  - Reference
browser-compat: api.BroadcastChannel.message_event
---
{{APIRef}}

The `message` event is fired on a {{domxref('BroadcastChannel')}} object when a message arrives on that channel.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js
addEventListener('message', (event) => { })
onmessage = (event) => { }
```

## Event type

A {{domxref("MessageEvent")}}. Inherits from {{domxref("Event")}}.

{{InheritanceDiagram("MessageEvent")}}

## Event properties

_In addition to the properties listed below, properties from the parent interface, {{domxref("Event")}}, are available._

- {{domxref("MessageEvent.data", "data")}} {{ReadOnlyInline}}
  - : The data sent by the message emitter.
- {{domxref("MessageEvent.origin", "origin")}} {{ReadOnlyInline}}
  - : A string representing the origin of the message emitter.
- {{domxref("MessageEvent.lastEventId", "lastEventId")}} {{ReadOnlyInline}}
  - : A string representing a unique ID for the event.
- {{domxref("MessageEvent.source", "source")}} {{ReadOnlyInline}}
  - : A _message event source_, which is either a {{glossary("WindowProxy")}}, a {{domxref("MessagePort")}}, or a {{domxref("ServiceWorker")}} object representing the message emitter.
- {{domxref("MessageEvent.ports", "ports")}} {{ReadOnlyInline}}
  - : An array of {{domxref("MessagePort")}} objects representing the ports associated with the channel the message is being sent through (where appropriate, e.g. in channel messaging or when sending a message to a shared worker).

## Examples

In this example there's a "sender" [`<iframe>`](/en-US/docs/Web/HTML/Element/iframe) that broadcasts the contents of a [`<textarea>`](/en-US/docs/Web/HTML/Element/textarea) when the user clicks a button. There are two "receiver" iframes that listen to the broadcast message and write the result into a [`<div>`](/en-US/docs/Web/HTML/Element/div) element.

### Sender

```html hidden
<h1>Sender</h1>
<label for="message">Type a message to broadcast:</label><br/>
<textarea id="message" name="message" rows="1" cols="40">Hello</textarea>
<button id="broadcast-message" type="button">Broadcast message</button>
```

```css hidden
body {
     border: 1px solid black;
     padding: .5rem;
     height: 150px;
     font-family: "Fira Sans", sans-serif;
}

h1 {
    font: 1.6em "Fira Sans", sans-serif;
    margin-bottom: 1rem;
}

textarea {
    padding: .2rem;
}

label, br {
    margin: .5rem 0;
}

button {
    vertical-align: top;
    height: 1.5rem;
}
```

```js
const channel = new BroadcastChannel('example-channel');
const messageControl = document.querySelector('#message');
const broadcastMessageButton = document.querySelector('#broadcast-message');

broadcastMessageButton.addEventListener('click', () => {
    channel.postMessage(messageControl.value);
})
```

### Receiver 1

```html hidden
<h1>Receiver 1</h1>
<div id="received"></div>
```

```css hidden
body {
    border: 1px solid black;
    padding: .5rem;
    height: 100px;
    font-family: "Fira Sans", sans-serif;
}

h1 {
    font: 1.6em "Fira Sans",
    sans-serif; margin-bottom: 1rem;
}
```

```js
const channel = new BroadcastChannel('example-channel');
channel.addEventListener('message', (event) => {
  received.textContent = event.data;
});
```

### Receiver 2

```html hidden
<h1>Receiver 2</h1>
<div id="received"></div>
```

```css hidden
body {
    border: 1px solid black;
    padding: .5rem;
    height: 100px;
    font-family: "Fira Sans", sans-serif;
}

h1 {
    font: 1.6em "Fira Sans", sans-serif;
    margin-bottom: 1rem;
}
```

```js
const channel = new BroadcastChannel('example-channel');
channel.addEventListener('message', (event) => {
  received.textContent = event.data;
});
```

### Result

{{ EmbedLiveSample('Sender', '100%', 220) }}

{{ EmbedLiveSample('Receiver_1', '100%', 160) }}

{{ EmbedLiveSample('Receiver_2', '100%', 160) }}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- Related events: [`messageerror`](/en-US/docs/Web/API/BroadcastChannel/messageerror_event).
