---
title: 'Element: mouseout event'
slug: Web/API/Element/mouseout_event
tags:
  - API
  - DOM
  - Event
  - Interface
  - MouseEvent
  - Reference
  - mouse
  - mouseout
  - move
browser-compat: api.Element.mouseout_event
---
{{APIRef}}

The **`mouseout`** event is fired at an {{domxref("Element")}} when a pointing device (usually a mouse) is used to move the cursor so that it is no longer contained within the element or one of its children.

`mouseout` is also delivered to an element if the cursor enters a child element, because the child element obscures the visible area of the element.

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
        {{domxref("GlobalEventHandlers.onmouseout", "onmouseout")}}
      </td>
    </tr>
  </tbody>
</table>

## Examples

The following examples show the use of the `mouseout` event.

### mouseout and mouseleave

The following example illustrates the difference between `mouseout` and {{domxref("Element/mouseleave_event", "mouseleave")}} events. The `mouseleave` event is added to the {{HTMLElement("ul")}} to color the list purple whenever the mouse exits the `<ul>`. `mouseout` is added to the list to color the targeted element orange when the mouse exits it.

When you try this out, you'll find that `mouseout` is delivered to the individual list items, while `mouseleave` goes to the overall list, courtesy of the hierarchy of the items and the fact that list items obscure the underlying `<ul>`.

#### HTML

```html
<ul id="test">
  <li>item 1</li>
  <li>item 2</li>
  <li>item 3</li>
</ul>
```

#### JavaScript

```js
let test = document.getElementById("test");

// Briefly make the list purple when the mouse moves off the
// <ul> element
test.addEventListener("mouseleave", function( event ) {
  // highlight the mouseleave target
  event.target.style.color = "purple";

  // reset the color after a short delay
  setTimeout(function() {
    event.target.style.color = "";
  }, 1000);
}, false);

// Briefly make an <li> orange when the mouse moves off of it
test.addEventListener("mouseout", function( event ) {
  // highlight the mouseout target
  event.target.style.color = "orange";

  // reset the color after a short delay
  setTimeout(function() {
    event.target.style.color = "";
  }, 500);
}, false);
```

#### Result

{{EmbedLiveSample("mouseout_and_mouseleave", 640, 200)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Introduction to events](/en-US/docs/Learn/JavaScript/Building_blocks/Events)
- {{domxref("Element/mousedown_event", "mousedown")}}
- {{domxref("Element/mouseup_event", "mouseup")}}
- {{domxref("Element/mousemove_event", "mousemove")}}
- {{domxref("Element/click_event", "click")}}
- {{domxref("Element/dblclick_event", "dblclick")}}
- {{domxref("Element/mouseover_event", "mouseover")}}
- {{domxref("Element/mouseenter_event", "mouseenter")}}
- {{domxref("Element/mouseleave_event", "mouseleave")}}
- {{domxref("Element/contextmenu_event", "contextmenu")}}
