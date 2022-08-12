---
title: 'HTMLMediaElement: error event'
slug: Web/API/HTMLMediaElement/error_event
page-type: web-api-event
tags:
  - API
  - Error
  - Event
  - HTMLMediaElement
  - Reference
  - Web
browser-compat: api.HTMLMediaElement.error_event
---
{{APIRef}}

The **`error`** event is fired when the resource could not be loaded due to an error (for example, a network connectivity problem).

This event is not cancelable and does not bubble.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js
addEventListener('error', (event) => {});

onerror = (event) => { };
```

## Event type

A generic {{domxref("Event")}}.

## Examples

```js
const video = document.querySelector('video');
const videoSrc = 'https://path/to/video.webm';

video.addEventListener('error', () => {
  console.error(`Error loading: ${videoSrc}`);
});

video.setAttribute('src', videoSrc);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("HTMLAudioElement")}}
- {{domxref("HTMLVideoElement")}}
- {{HTMLElement("audio")}}
- {{HTMLElement("video")}}
