---
title: "Element: mouseleave event"
short-title: mouseleave
slug: Web/API/Element/mouseleave_event
page-type: web-api-event
browser-compat: api.Element.mouseleave_event
---

{{APIRef("UI Events")}}

The **`mouseleave`** event is fired at an {{domxref("Element")}} when the cursor of a pointing device (usually a mouse) is moved out of it.

`mouseleave` and {{domxref("Element/mouseout_event", "mouseout")}} are similar but differ in that `mouseleave` does not bubble and `mouseout` does. This means that `mouseleave` is fired when the pointer has exited the element _and_ all of its descendants, whereas `mouseout` is fired when the pointer leaves the element _or_ leaves one of the element's descendants, because of bubbling (even if the pointer is still within the element). Other than that, leave and out events for the same situation are dispatched at the same time, if appropriate.

The `mouseleave` and `mouseout` events will not be triggered when the element is replaced or removed from the DOM.

Note that "moving out of an element" refers to the element's position in the DOM tree, not to its visual position. For example, if two sibling elements are positioned so one is placed inside the other, then moving from the outer element into the inner element will trigger `mouseleave` on the outer element, even though the pointer is still in the bounds of the outer element.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js-nolint
addEventListener("mouseleave", (event) => { })

onmouseleave = (event) => { }
```

## Event type

A {{domxref("MouseEvent")}}. Inherits from {{domxref("UIEvent")}} and {{domxref("Event")}}.

{{InheritanceDiagram("MouseEvent")}}

## Examples

The [`mouseout`](/en-US/docs/Web/API/Element/mouseout_event#examples) documentation has an example illustrating the difference between `mouseout` and `mouseleave`.

### mouseleave

The following trivial example uses the `mouseenter` event to change the border on the `<div>` when the mouse enters the space allotted to it. It then adds an item to the list with the number of the `mouseenter` or `mouseleave` event.

#### HTML

```html
<div id="mouseTarget">
  <ul id="unorderedList">
    <li>No events yet!</li>
  </ul>
</div>
```

#### CSS

Styling the `<div>` to make it more visible.

```css
#mouseTarget {
  box-sizing: border-box;
  width: 15rem;
  border: 1px solid #333333;
}
```

#### JavaScript

```js
let enterEventCount = 0;
let leaveEventCount = 0;
const mouseTarget = document.getElementById("mouseTarget");
const unorderedList = document.getElementById("unorderedList");

mouseTarget.addEventListener("mouseenter", (e) => {
  mouseTarget.style.border = "5px dotted orange";
  enterEventCount++;
  addListItem(`This is mouseenter event ${enterEventCount}.`);
});

mouseTarget.addEventListener("mouseleave", (e) => {
  mouseTarget.style.border = "1px solid #333333";
  leaveEventCount++;
  addListItem(`This is mouseleave event ${leaveEventCount}.`);
});

function addListItem(text) {
  // Create a new text node using the supplied text
  const newTextNode = document.createTextNode(text);

  // Create a new li element
  const newListItem = document.createElement("li");

  // Add the text node to the li element
  newListItem.appendChild(newTextNode);

  // Add the newly created list item to list
  unorderedList.appendChild(newListItem);
}
```

#### Result

{{EmbedLiveSample('mouseleave')}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Learn: Introduction to events](/en-US/docs/Learn_web_development/Core/Scripting/Events)
- {{domxref("Element/mousedown_event", "mousedown")}}
- {{domxref("Element/mouseup_event", "mouseup")}}
- {{domxref("Element/mousemove_event", "mousemove")}}
- {{domxref("Element/click_event", "click")}}
- {{domxref("Element/dblclick_event", "dblclick")}}
- {{domxref("Element/mouseover_event", "mouseover")}}
- {{domxref("Element/mouseout_event", "mouseout")}}
- {{domxref("Element/mouseenter_event", "mouseenter")}}
- {{domxref("Element/contextmenu_event", "contextmenu")}}
- {{domxref("Element/pointerleave_event", "pointerleave")}}
