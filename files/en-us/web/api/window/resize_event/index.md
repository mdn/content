---
title: 'Window: resize event'
slug: Web/API/Window/resize_event
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
      <td>{{domxref("UIEvent")}}</td>
    </tr>
    <tr>
      <th scope="row">Event handler property</th>
      <td>
        {{domxref("GlobalEventHandlers.onresize", "onresize")}}
      </td>
    </tr>
  </tbody>
</table>

In some earlier browsers it was possible to register `resize` event handlers on any HTML element. It is still possible to set `onresize` attributes or use {{domxref("EventTarget.addEventListener", "addEventListener()")}} to set a handler on any element. However, `resize` events are only fired on the {{domxref("Window", "window")}} object (i.e. returned by {{domxref("document.defaultView")}}). Only handlers registered on the `window` object will receive `resize` events.

There is a proposal to allow all elements to be notified of resize changes. See [Resize Observer](https://wicg.github.io/ResizeObserver/) to read the draft document, and [GitHub issues](https://github.com/WICG/ResizeObserver/issues) to read the on-going discussions.

If the resize event is triggered too many times for your application, see [Optimizing window.onresize](https://bencentra.com/code/2015/02/27/optimizing-window-resize.html) to control the time after which the event fires.

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

## See also

- {{domxref("GlobalEventHandlers.onresize")}}
