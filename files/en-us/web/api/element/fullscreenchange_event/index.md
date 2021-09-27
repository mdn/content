---
title: 'Element: fullscreenchange event'
slug: Web/API/Element/fullscreenchange_event
tags:
  - API
  - Element
  - Event
  - Fullscreen API
  - Fullscreen events
  - fullscreen
  - fullscreenchange
browser-compat: api.Element.fullscreenchange_event
---
{{APIRef}}

The `fullscreenchange` event is fired immediately after an {{domxref("Element")}} switches into or out of full-screen mode.

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
        {{domxref("Element.onfullscreenchange", "onfullscreenchange")}}
      </td>
    </tr>
  </tbody>
</table>

This event is sent to the `Element` which is transitioning into or out of full-screen mode.

## Examples

In this example, a handler for the `fullscreenchange` event is added to the element whose ID is `fullscreen-div`.

If the user clicks on the "Toggle Fullscreen Mode" button, the `click` handler will toggle full-screen mode for the `div`. If `document.fullscreenElement` has a value it will exit full-screen mode. If not, the div will be placed into full-screen mode.

Remember that by the time the `fullscreenchange` event is handled, the status of the element has already changed. So if the change is to full-screen mode, `document.fullscreenElement` will point to the element that is now in full-screen mode. On the other hand, if `document.fullscreenElement` is null, full-screen mode has been canceled.

What that means to the example code is that, if an element is currently in full-screen mode, the `fullscreenchange` handler logs the `id` of the full-screen element to the console. If `document.fullscreenElement` is null, the code logs a message that the change is to leave full-screen mode.

### HTML

```html
 <h1>fullscreenchange event example</h1>
 <div id="fullscreen-div">
   <button id="toggle-fullscreen">Toggle Fullscreen Mode</button>
 </div>
```

### JavaScript

```js
document.getElementById('fullscreen-div').addEventListener('fullscreenchange', (event) => {
  // document.fullscreenElement will point to the element that
  // is in fullscreen mode if there is one. If not, the value
  // of the property is null.
  if (document.fullscreenElement) {
    console.log(`Element: ${document.fullscreenElement.id} entered fullscreen mode.`);
  } else {
    console.log('Leaving full-screen mode.');
  }
});

document.getElementById('toggle-fullscreen').addEventListener('click', (event) => {
  if (document.fullscreenElement) {
    // exitFullscreen is only available on the Document object.
    document.exitFullscreen();
  } else {
    document.getElementById('fullscreen-div').requestFullscreen();
  }
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Document: fullscreenchange event](/en-US/docs/Web/API/Document/fullscreenchange_event)
- [Element: fullscreenerror event](/en-US/docs/Web/API/Element/fullscreenerror_event)
- [Fullscreen API](/en-US/docs/Web/API/Fullscreen_API)
- [Guide to the Fullscreen API](/en-US/docs/Web/API/Fullscreen_API/Guide)
