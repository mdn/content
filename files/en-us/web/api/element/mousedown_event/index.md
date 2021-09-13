---
title: 'Element: mousedown event'
slug: Web/API/Element/mousedown_event
tags:
  - API
  - DOM
  - Down
  - Element
  - Event
  - Interface
  - MouseEvent
  - Press
  - Reference
  - UI
  - button
  - mouse
  - mousedown
browser-compat: api.Element.mousedown_event
---
{{APIRef}}

The **`mousedown`** event is fired at an {{domxref("Element")}} when a pointing device button is pressed while the pointer is inside the element.

> **Note:** This differs from the {{domxref("Element/click_event", "click")}} event in that `click` is fired after a full click action occurs; that is, the mouse button is pressed and released while the pointer remains inside the same element. `mousedown` is fired the moment the button is initially pressed.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Bubbles</th>
      <td>Yes</td>
    </tr>
    <tr>
      <th scope="row">Cancelable</th>
      <td>Yes</td>
    </tr>
    <tr>
      <th scope="row">Interface</th>
      <td>{{domxref("MouseEvent")}}</td>
    </tr>
    <tr>
      <th scope="row">Event handler property</th>
      <td>
        {{domxref("GlobalEventHandlers.onmousedown", "onmousedown")}}
      </td>
    </tr>
  </tbody>
</table>

## Examples

See [`mousemove_event`](/en-US/docs/Web/API/Element/mousemove_event#examples) for example code.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Introduction to events](/en-US/docs/Learn/JavaScript/Building_blocks/Events)
- {{domxref("Element/mouseup_event", "mouseup")}}
- {{domxref("Element/mousemove_event", "mousemove")}}
- {{domxref("Element/click_event", "click")}}
- {{domxref("Element/dblclick_event", "dblclick")}}
- {{domxref("Element/mouseover_event", "mouseover")}}
- {{domxref("Element/mouseout_event", "mouseout")}}
- {{domxref("Element/mouseenter_event", "mouseenter")}}
- {{domxref("Element/mouseleave_event", "mouseleave")}}
- {{domxref("Element/contextmenu_event", "contextmenu")}}
