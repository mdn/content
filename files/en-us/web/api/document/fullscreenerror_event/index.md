---
title: 'Document: fullscreenerror event'
slug: Web/API/Document/fullscreenerror_event
tags:
  - API
  - Error
  - Event
  - Fullscreen API
  - Reference
  - fullscreen
  - fullscreenerror
browser-compat: api.Document.fullscreenerror_event
---
{{APIRef}}

The `fullscreenerror` event is fired when the browser cannot switch to full-screen mode.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Bubbles</th>
      <td>Yes</td>
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
        {{domxref("Document.onfullscreenerror", "onfullscreenerror")}}
      </td>
    </tr>
  </tbody>
</table>

As with the [`fullscreenchange` event](/en-US/docs/Web/API/Document/fullscreenchange_event), two `fullscreenerror` events are fired; the first is sent to the {{domxref("Element")}} which failed to change modes, and the second is sent to the {{domxref("Document")}} which owns that element.

For some reasons that switching into full-screen mode might fail, see [the guide to the Fullscreen API](/en-US/docs/Web/API/Fullscreen_API/Guide).

## Examples

```js
const requestor = document.querySelector('div');

document.addEventListener('fullscreenerror', (event) => {
  console.error('an error occurred changing into fullscreen');
  console.log(event);
});

requestor.requestFullscreen();
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`fullscreenchange`](/en-US/docs/Web/API/Document/fullscreenchange_event)
- [Fullscreen API](/en-US/docs/Web/API/Fullscreen_API)
- [Guide to the Fullscreen API](/en-US/docs/Web/API/Fullscreen_API/Guide)
