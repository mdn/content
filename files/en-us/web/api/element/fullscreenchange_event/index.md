---
title: 'Element: fullscreenchange event'
slug: Web/API/Element/fullscreenchange_event
page-type: web-api-event
tags:
  - API
  - Event
  - Fullscreen API
  - Reference
  - fullscreen
  - fullscreenchange
browser-compat: api.Element.fullscreenchange_event
---
{{APIRef}}

The `fullscreenchange` event is fired immediately after an {{domxref("Element")}} switches into or out of fullscreen mode.

This event is sent to the `Element` which is transitioning into or out of fullscreen mode.

To find out whether the `Element` is entering or exiting fullscreen mode, check the value of {{domxref("Document.fullscreenElement")}}: if this value is `null` then the element is exiting fullscreen mode, otherwise it is entering fullscreen mode.

This event is not cancelable.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js
addEventListener('fullscreenchange', (event) => { });

onfullscreenchange = (event) => { };
```

## Event type

A generic {{domxref("Event")}}.

## Examples

In this example, a handler for the `fullscreenchange` event is added to the element whose ID is `fullscreen-div`.

If the user clicks on the "Toggle Fullscreen Mode" button, the `click` handler will toggle fullscreen mode for the `div`. If `document.fullscreenElement` has a value it will exit fullscreen mode. If not, the div will be placed into fullscreen mode.

Remember that by the time the `fullscreenchange` event is handled, the status of the element has already changed. So if the change is to fullscreen mode, `document.fullscreenElement` will point to the element that is now in fullscreen mode. On the other hand, if `document.fullscreenElement` is null, fullscreen mode has been canceled.

What that means to the example code is that, if an element is currently in fullscreen mode, the `fullscreenchange` handler logs the `id` of the fullscreen element to the console. If `document.fullscreenElement` is null, the code logs a message that the change is to leave fullscreen mode.

### HTML

```html
 <h1>fullscreenchange event example</h1>
 <div id="fullscreen-div">
   <button id="toggle-fullscreen">Toggle Fullscreen Mode</button>
 </div>
```

### JavaScript

```js
function fullscreenchanged(event) {
  // document.fullscreenElement will point to the element that
  // is in fullscreen mode if there is one. If not, the value
  // of the property is null.
  if (document.fullscreenElement) {
    console.log(`Element: ${document.fullscreenElement.id} entered fullscreen mode.`);
  } else {
    console.log('Leaving fullscreen mode.');
  }
};

const el = document.getElementById('fullscreen-div');

el.addEventListener('fullscreenchange', fullscreenchanged);
// or
el.onfullscreenchange = fullscreenchanged;

// When the toggle button is clicked, enter/exit fullscreen
document.getElementById('toggle-fullscreen').addEventListener('click', (event) => {
  if (document.fullscreenElement) {
    // exitFullscreen is only available on the Document object.
    document.exitFullscreen();
  } else {
    el.requestFullscreen();
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
