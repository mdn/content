---
title: 'Document: fullscreenchange event'
slug: Web/API/Document/fullscreenchange_event
tags:
  - API
  - Event
  - Fullscreen API
  - Reference
  - fullscreen
  - fullscreenchange
browser-compat: api.Document.fullscreenchange_event
---
{{APIRef}}

The `fullscreenchange` event is fired immediately after the browser switches into or out of full-screen mode.

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
        {{domxref("Document.onfullscreenchange", "onfullscreenchange")}}
      </td>
    </tr>
  </tbody>
</table>

The event is sent to the `Element` that is transitioning into or out of full-screen mode, and this event then bubbles up to the `Document`.

To find out whether the `Element` is entering or exiting full-screen mode, check the value of {{domxref("Document.fullscreenElement")}}: if this value is `null` then the element is exiting full-screen mode, otherwise it is entering full-screen mode.

## Examples

In this example, a handler for the `fullscreenchange` event is added to the {{domxref("Document")}}.

```js
document.addEventListener('fullscreenchange', (event) => {
  // document.fullscreenElement will point to the element that
  // is in fullscreen mode if there is one. If there isn't one,
  // the value of the property is null.
  if (document.fullscreenElement) {
    console.log(`Element: ${document.fullscreenElement.id} entered full-screen mode.`);
  } else {
    console.log('Leaving full-screen mode.');
  }
});
```

See [Element: fullscreenchange event](/en-US/docs/Web/API/Element/fullscreenchange_event) for another example.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Document/fullscreenerror_event", "fullscreenerror")}}
- {{domxref("Element")}}: {{domxref("Element/fullscreenchange_event", "fullscreenchange")}} event
- [Fullscreen API](/en-US/docs/Web/API/Fullscreen_API)
- [Guide to the Fullscreen API](/en-US/docs/Web/API/Fullscreen_API/Guide)
