---
title: 'Element: auxclick event'
slug: Web/API/Element/auxclick_event
tags:
  - Element
  - Event
  - MouseEvent
  - Reference
  - UI
  - auxclick
  - mouse
browser-compat: api.Element.auxclick_event
---
{{APIRef}}

The **`auxclick`** event is fired at an {{domxref("Element")}} when a non-primary pointing device button (any mouse button other than the primary—usually leftmost—button) has been pressed and released both within the same element.

`auxclick` is fired after the {{domxref("Element/mousedown_event", "mousedown")}} and {{domxref("Element/mouseup_event", "mouseup")}} events have been fired, in that order.

<table class="properties">
  <tbody>
    <tr>
      <th>Bubbles</th>
      <td>Yes</td>
    </tr>
    <tr>
      <th>Cancelable</th>
      <td>Yes</td>
    </tr>
    <tr>
      <th>Interface</th>
      <td>{{domxref("MouseEvent")}}</td>
    </tr>
    <tr>
      <th>Event handler property</th>
      <td>
        {{domxref("GlobalEventHandlers.onauxclick", "onauxclick")}}
      </td>
    </tr>
  </tbody>
</table>

## Preventing default actions

For the vast majority of browsers that map middle click to opening a link in a new tab, including Firefox, it is possible to cancel this behavior by calling {{domxref("Event.preventDefault()", "preventDefault()")}} from within an `auxclick` event handler.

When listening for `auxclick` events originating on elements that do not support input or navigation, you will often want to explicitly prevent other default actions mapped to the down action of the middle mouse button. On Windows this is usually autoscroll, and on macOS and Linux this is usually clipboard paste. This can be done by preventing the default behavior of the {{domxref("Element/mousedown_event", "mousedown")}} or {{domxref("HTMLElement/pointerdown_event", "pointerdown")}} event.

Additionally, you may need to avoid opening a system context menu after a right click. Due to timing differences between operating systems, this too is not a preventable default behavior of `auxclick`. Instead, this can be done by preventing the default behavior of the {{domxref("Element/contextmenu_event", "contextmenu")}} event.

## Examples

In this example we define functions for two event handlers — {{domxref("GlobalEventHandlers.onclick", "onclick")}} and {{domxref("GlobalEventHandlers.onauxclick", "onauxclick")}}. The former changes the color of the button background, while the latter changes the button foreground (text) color. You also can see the two functions in action by trying the demo out with a multi-button mouse ([see it live on GitHub](https://mdn.github.io/dom-examples/auxclick/); also [see the source code](https://github.com/mdn/dom-examples/blob/master/auxclick/index.html)).

### JavaScript

```js
let button = document.querySelector('button');
let html = document.querySelector('html');

function random(number) {
  return Math.floor(Math.random() * number);
}

function randomColor() {
    return `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
}

button.onclick = function() {
  button.style.backgroundColor = randomColor();
};

button.onauxclick = function(e) {
  e.preventDefault();
  button.style.color = randomColor();
}

button.oncontextmenu = function(e) {
  e.preventDefault();
}
```

Notice that in addition to capturing the `auxclick` event using {{domxref("GlobalEventHandlers.onauxclick", "onauxclick")}}, the {{domxref("Element.contextmenu_event", "contextmenu")}} event is also captured, and {{domxref("Event.preventDefault", "preventDefault()")}} called on that event, in order to prevent the context menu from popping up after the color change is applied.

### HTML

```html
<button><h1>Click me!</h1></button>
```

```css hidden
html {
  height: 100%;
  overflow: hidden;
}

body {
  height: inherit;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
}

button {
  border: 0;
  background-color: white;
  font-size: 8vw;
  display: block;
  width: 100%;
  height: 100%;
}

h1 {
  letter-spacing: 0.5rem;
}
```

{{EmbedLiveSample("Examples", 640, 300)}}

> **Note:** If you are using a three-button mouse, you'll notice that the `onauxclick` handler is run when any of the non-left mouse buttons are clicked (usually including any "special" buttons on gaming mice).

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Introduction to events](/en-US/docs/Learn/JavaScript/Building_blocks/Events)
- {{domxref("Element/click_event", "click")}}
- {{domxref("Element/contextmenu_event", "contextmenu")}}
- {{domxref("Element/dblclick_event", "dblclick")}}
- {{domxref("Element/mousedown_event", "mousedown")}}
- {{domxref("Element/mouseup_event", "mouseup")}}
- {{domxref("HTMLElement/pointerdown_event", "pointerdown")}}
- {{domxref("HTMLElement/pointerup_event", "pointerup")}}
