---
title: 'HTMLMediaElement: abort event'
slug: Web/API/HTMLMediaElement/abort_event
page-type: web-api-event
tags:
  - API
  - Event
  - HTMLMediaElement
  - Reference
  - Web
  - abort
browser-compat: api.HTMLMediaElement.abort_event
---
{{APIRef}}

The **`abort`** event is fired when the resource was not fully loaded, but not as the result of an error.

This event is not cancelable and does not bubble.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js
addEventListener('abort', (event) => {});

onabort = (event) => { };
```

## Event type

A generic {{domxref("Event")}}.

## Examples

```js
const video = document.querySelector('video');
const videoSrc = 'https://example.org/path/to/video.webm';

video.addEventListener('abort', () => {
  console.log(`Abort loading: ${videoSrc}`);
});

const source = document.createElement('source');
source.setAttribute('src', videoSrc);
source.setAttribute('type', 'video/webm');

video.appendChild(source);
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
