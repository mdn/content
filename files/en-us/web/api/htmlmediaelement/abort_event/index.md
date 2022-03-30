---
title: 'HTMLMediaElement: abort event'
slug: Web/API/HTMLMediaElement/abort_event
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
      <td>{{domxref("Event")}}</td>
    </tr>
    <tr>
      <th scope="row">Event handler property</th>
      <td>
        {{domxref("GlobalEventHandlers/onabort", "onabort")}}
      </td>
    </tr>
  </tbody>
</table>

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
