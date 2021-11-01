---
title: 'BroadcastChannel: message event'
slug: Web/API/BroadcastChannel/message_event
tags:
  - Communication
  - Event
  - EventSource
  - Reference
  - message
  - messaging
browser-compat: api.BroadcastChannel.message_event
---
{{APIRef}}

The `message` event is fired on a {{domxref('BroadcastChannel')}} object when a message arrives on that channel.

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
        <code
          ><a href="/en-US/docs/Web/API/BroadcastChannel/onmessage"
            >onmessage</a
          ></code
        >
      </td>
    </tr>
  </tbody>
</table>

## Examples

### Live example

In this example there's a "sender" [`<iframe>`](/en-US/docs/Web/HTML/Element/iframe) that broadcasts the contents of a [`<textarea>`](/en-US/docs/Web/HTML/Element/textarea) when the user clicks a button. There are two "receiver" iframes that listen to the broadcast message and write the result into a [`<div>`](/en-US/docs/Web/HTML/Element/div) element.

#### Sender

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

#### Receiver 1

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

#### Receiver 2

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

{{ EmbedLiveSample('Sender', '100%', '170px','' ,'' , 'dummy') }}

{{ EmbedLiveSample('Receiver_1', '100%', '150px','' ,'' , 'dummy') }}

{{ EmbedLiveSample('Receiver_2', '100%', '150px','' ,'' , 'dummy') }}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- Related events: [`messageerror`](/en-US/docs/Web/API/BroadcastChannel/messageerror_event).
