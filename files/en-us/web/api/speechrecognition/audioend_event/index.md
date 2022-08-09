---
title: 'SpeechRecognition: audioend event'
slug: Web/API/SpeechRecognition/audioend_event
page-type: web-api-event
tags:
  - Event
  - Reference
  - Web Speech API
browser-compat: api.SpeechRecognition.audioend_event
---
{{APIRef("Web Speech API")}}

The **`audioend`** event of the [Web Speech API](/en-US/docs/Web/API/Web_Speech_API) is fired when the user agent has finished capturing audio for speech recognition.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js
addEventListener('audioend', (event) => { })

onaudioend = (event) => { }
```

## Event type

A generic {{DOMxRef("Event")}} with no added properties.

## Examples

You can use the `audioend` event in an [`addEventListener`](/en-US/docs/Web/API/EventTarget/addEventListener) method:

```js
const recognition = new webkitSpeechRecognition() || new SpeechRecognition();

recognition.addEventListener('audioend', () => {
  console.log('Audio capturing ended');
});
```

Or use the `onaudioend` event handler property:

```js
recognition.onaudioend = () => {
  console.log('Audio capturing ended');
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Web Speech API](/en-US/docs/Web/API/Web_Speech_API)
