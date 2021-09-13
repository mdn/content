---
title: 'Element: fullscreenerror event'
slug: Web/API/Element/fullscreenerror_event
tags:
  - API
  - Element
  - Event
  - Reference
  - fullscreenerror
browser-compat: api.Element.fullscreenerror_event
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
        {{domxref("Element.onfullscreenerror", "onfullscreenerror")}}
      </td>
    </tr>
  </tbody>
</table>

As with the {{domxref("Element/fullscreenchange_event", "fullscreenchange")}} event, two `fullscreenerror` events are fired; the first is sent to the {{domxref("Element")}} which failed to change modes, and the second is sent to the {{domxref("Document")}} which contains that element.

For some reasons that switching into full-screen mode might fail, see [the guide to the Fullscreen API](/en-US/docs/Web/API/Fullscreen_API/Guide).

## Examples

```js
const requestor = document.querySelector('div');

requestor.addEventListener('fullscreenerror', (event) => {
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

- [`fullscreenchange`](/en-US/docs/Web/API/Element/fullscreenchange_event)
- [Fullscreen API](/en-US/docs/Web/API/Fullscreen_API)
- [Guide to the Fullscreen API](/en-US/docs/Web/API/Fullscreen_API/Guide)
