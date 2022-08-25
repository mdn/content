---
title: 'SpeechRecognition: end event'
slug: Web/API/SpeechRecognition/end_event
page-type: web-api-event
tags:
  - Event
  - Reference
  - Web Speech API
browser-compat: api.SpeechRecognition.end_event
---
{{APIRef("Web Speech API")}}

The **`end`** event of the [Web Speech API](/en-US/docs/Web/API/Web_Speech_API) {{domxref("SpeechRecognition")}} object is fired when the speech recognition service has disconnected.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js
addEventListener('end', (event) => { })

onend = (event) => { }
```

## Event type

A generic {{DOMxRef("Event")}} with no added properties.

## Examples

You can use the `end` event in an [`addEventListener`](/en-US/docs/Web/API/EventTarget/addEventListener) method:

```js
const recognition = new webkitSpeechRecognition() || new SpeechRecognition();

recognition.addEventListener('end', () => {
  console.log('Speech recognition service disconnected');
});
```

Or use the `onend` event handler property:

```js
recognition.onend = () => {
  console.log('Speech recognition service disconnected');
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Web Speech API](/en-US/docs/Web/API/Web_Speech_API)
