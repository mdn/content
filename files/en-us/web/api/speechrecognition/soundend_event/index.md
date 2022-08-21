---
title: 'SpeechRecognition: soundend event'
slug: Web/API/SpeechRecognition/soundend_event
page-type: web-api-event
tags:
  - Event
  - Reference
  - Web Speech API
browser-compat: api.SpeechRecognition.soundend_event
---
{{APIRef("Web Speech API")}}

The **`soundend`** event of the [Web Speech API](/en-US/docs/Web/API/Web_Speech_API) is fired when any sound — recognizable speech or not — has stopped being detected.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js
addEventListener('soundend', (event) => { })

onsoundend = (event) => { }
```

## Event type

A generic {{DOMxRef("Event")}} with no added properties.

## Examples

You can use the `soundend` event in an [`addEventListener`](/en-US/docs/Web/API/EventTarget/addEventListener) method:

```js
const recognition = new webkitSpeechRecognition() || new SpeechRecognition();

recognition.addEventListener('soundend', (event) => {
  console.log('Sound has stopped being received');
});
```

Or use the `onsoundend` event handler property:

```js
recognition.onsoundend = (event) => {
  console.log('Sound has stopped being received');
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Web Speech API](/en-US/docs/Web/API/Web_Speech_API)
