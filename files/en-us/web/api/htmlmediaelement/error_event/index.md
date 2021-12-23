---
title: 'HTMLMediaElement: error event'
slug: Web/API/HTMLMediaElement/error_event
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
        {{domxref("GlobalEventHandlers/onerror", "onerror")}}
      </td>
    </tr>
  </tbody>
</table>

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
