---
title: 'SpeechRecognition: speechend event'
slug: Web/API/SpeechRecognition/speechend_event
page-type: web-api-event
tags:
  - Event
  - Reference
  - Web Speech API
browser-compat: api.SpeechRecognition.speechend_event
---
{{APIRef("Web Speech API")}}

The **`speechend`** event of the [Web Speech API](/en-US/docs/Web/API/Web_Speech_API) is fired when speech recognized by the speech recognition service has stopped being detected.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js
addEventListener('speechend', (event) => { })

onspeechend = (event) => { }
```

## Event type

A generic {{DOMxRef("Event")}} with no added properties.

## Examples

You can use the `speechend` event in an [`addEventListener`](/en-US/docs/Web/API/EventTarget/addEventListener) method:

```js
const recognition = new webkitSpeechRecognition() || new SpeechRecognition();

recognition.addEventListener('speechend', () => {
  console.log('Speech has stopped being detected');
});
```

Or use the `onspeechend` event handler property:

```js
recognition.onspeechend = () => {
  console.log('Speech has stopped being detected');
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Web Speech API](/en-US/docs/Web/API/Web_Speech_API)
