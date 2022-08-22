---
title: 'Window: resize event'
slug: Web/API/Window/resize_event
page-type: web-api-event
tags:
  - API
  - Reference
  - Web
  - Window
  - events
  - resize
browser-compat: api.Window.resize_event
---
{{APIRef}}

The **`resize`** event fires when the document view (window) has been resized.

This event is not cancelable and does not bubble.

In some earlier browsers it was possible to register `resize` event handlers on any HTML element. It is still possible to set `onresize` attributes or use {{domxref("EventTarget.addEventListener", "addEventListener()")}} to set a handler on any element. However, `resize` events are only fired on the {{domxref("Window", "window")}} object (i.e. returned by {{domxref("document.defaultView")}}). Only handlers registered on the `window` object will receive `resize` events.

While the `resize` event fires only for the window nowadays, you can get resize notifications for other elements using the [ResizeObserver](/en-US/docs/Web/API/ResizeObserver) API.

If the resize event is triggered too many times for your application, see [Optimizing window.onresize](https://web.archive.org/web/20220714020647/https://bencentra.com/code/2015/02/27/optimizing-window-resize.html) to control the time after which the event fires.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js
addEventListener('resize', (event) => {});

onresize = (event) => {};
```

## Event type

A {{domxref("UIEvent")}}. Inherits from {{domxref("Event")}}.

{{InheritanceDiagram("UIEvent")}}

## Event properties

_This interface also inherits properties of its parent, {{domxref("Event")}}._

- {{domxref("UIEvent.detail")}} {{ReadOnlyInline}}
  - : Returns a `long` with details about the event, depending on the event type.
- {{domxref("UIEvent.sourceCapabilities")}} {{experimental_inline}} {{ReadOnlyInline}}
  - : Returns an instance of the `InputDeviceCapabilities` interface, which provides information about the physical device responsible for generating a touch event.
- {{domxref("UIEvent.view")}} {{ReadOnlyInline}}
  - : Returns a {{domxref("WindowProxy")}} that contains the view that generated the event.
- {{domxref("UIEvent.which")}} {{deprecated_inline}} {{Non-standard_inline}} {{ReadOnlyInline}}
  - : Returns the numeric `keyCode` of the key pressed, or the character code (`charCode`) for an alphanumeric key pressed.

## Examples

### Window size logger

The following example reports the window size each time it is resized. Bear in mind that since the example is running in an `<iframe>`, you'll need to actually get the `<iframe>` to resize before you see an effect.

```html
<p>Resize the browser window to fire the <code>resize</code> event.</p>
<p>Window height: <span id="height"></span></p>
<p>Window width: <span id="width"></span></p>
```

```js
const heightOutput = document.querySelector('#height');
const widthOutput = document.querySelector('#width');

function reportWindowSize() {
  heightOutput.textContent = window.innerHeight;
  widthOutput.textContent = window.innerWidth;
}

window.onresize = reportWindowSize;
```

{{EmbedLiveSample("Window_size_logger")}}

### addEventListener equivalent

You could set up the event handler using the [`addEventListener()`](/en-US/docs/Web/API/EventTarget/addEventListener) method:

```js
window.addEventListener('resize', reportWindowSize);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
