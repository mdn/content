---
title: "AudioWorkletNode: processorerror event"
short-title: processorerror
slug: Web/API/AudioWorkletNode/processorerror_event
page-type: web-api-event
browser-compat: api.AudioWorkletNode.processorerror_event
---

{{ APIRef("Web Audio API") }}{{SecureContext_Header}}

The `processorerror` event fires when the underlying {{domxref("AudioWorkletProcessor")}} behind the node throws an exception in its constructor, the {{domxref("AudioWorkletProcessor.process", "process")}} method, or any user-defined class method.

Once an exception is thrown, the processor (and thus the node) will output silence throughout its lifetime.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js-nolint
addEventListener("processorerror", (event) => { })

onprocessorerror = (event) => { }
```

## Event type

A generic {{domxref("Event")}}.

## Examples

To be informed when the processor throws an exception, you can add a handler to your {{domxref("AudioWorkletNode")}} instance using {{domxref("EventTarget.addEventListener", "addEventListener()")}}, like this:

```js
whiteNoiseNode.addEventListener("processorerror", (event) => {
  console.error("There was an error!");
});
```

Alternatively, you can use the `onprocessorerror` event handler property to establish a handler for the `processorerror` event:

```js
whiteNoiseNode.onprocessorerror = (event) => {
  console.error("There was an error!");
};
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using the Web Audio API](/en-US/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
