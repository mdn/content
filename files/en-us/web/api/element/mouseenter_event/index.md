---
title: 'Element: mouseenter event'
slug: Web/API/Element/mouseenter_event
tags:
  - API
  - Cursor
  - DOM
  - Element
  - Event
  - Interface
  - MouseEvent
  - Reference
  - mouse
  - mouseenter
  - pointer
browser-compat: api.Element.mouseenter_event
---
{{APIRef}}

The **`mouseenter`** event is fired at an {{domxref("Element")}} when a pointing device (usually a mouse) is initially moved so that its hotspot is within the element at which the event was fired.

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
      <td>{{domxref("MouseEvent")}}</td>
    </tr>
    <tr>
      <th scope="row">Event handler property</th>
      <td>
        {{domxref("GlobalEventHandlers.onmouseenter", "onmouseenter")}}
      </td>
    </tr>
  </tbody>
</table>

## Usage notes

Though similar to {{domxref("Element/mouseover_event", "mouseover")}}, `mouseenter` differs in that it doesn't [bubble](/en-US/docs/Web/API/Event/bubbles) and it isn't sent to any descendants when the pointer is moved from one of its descendants' physical space to its own physical space.

#### Behavior of `mouseenter` events:

![](mouseenter.png)
One `mouseenter` event is sent to each element of the hierarchy when entering them. Here 4 events are sent to the four elements of the hierarchy when the pointer reaches the text.

#### Behavior of `mouseover` events:

![](mouseover.png)
A single `mouseover` event is sent to the deepest element of the DOM tree, then it bubbles up the hierarchy until it is canceled by a handler or reaches the root.

With deep hierarchies, the number of `mouseover` events sent can be quite huge and cause significant performance problems. In such cases, it is better to listen for `mouseenter` events.

Combined with the corresponding `mouseleave` (which is fired at the element when the mouse exits its content area), the `mouseenter` event acts in a very similar way to the CSS {{cssxref(':hover')}} pseudo-class.

## Examples

The [`mouseover`](/en-US/docs/Web/API/Element/mouseover_event#example) documentation has an example illustrating the difference between `mouseover` and `mouseenter`.

### mouseenter

The following trivial example uses the `mouseenter` event to change the border on the `div` when the mouse enters the space alloted to it. It then adds an item to the list with the number of the `mouseenter` or `mouseleave` event.

#### HTML

```html
<div id='mouseTarget'>
 <ul id="unorderedList">
  <li>No events yet!</li>
 </ul>
</div>
```

#### CSS

Styling the `div` to make it more visible.

```css
#mouseTarget {
  box-sizing: border-box;
  width:15rem;
  border:1px solid #333;
}
```

#### JavaScript

```js
var enterEventCount = 0;
var leaveEventCount = 0;
const mouseTarget = document.getElementById('mouseTarget');
const unorderedList = document.getElementById('unorderedList');

mouseTarget.addEventListener('mouseenter', e => {
  mouseTarget.style.border = '5px dotted orange';
  enterEventCount++;
  addListItem('This is mouseenter event ' + enterEventCount + '.');
});

mouseTarget.addEventListener('mouseleave', e => {
  mouseTarget.style.border = '1px solid #333';
  leaveEventCount++;
  addListItem('This is mouseleave event ' + leaveEventCount + '.');
});

function addListItem(text) {
  // Create a new text node using the supplied text
  var newTextNode = document.createTextNode(text);

  // Create a new li element
  var newListItem = document.createElement("li");

  // Add the text node to the li element
  newListItem.appendChild(newTextNode);

  // Add the newly created list item to list
  unorderedList.appendChild(newListItem);
}
```

### Result

{{EmbedLiveSample('mouseenter')}}

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
- {{domxref("Element/mouseout_event", "mouseout")}}
- {{domxref("Element/mouseenter_event", "mouseenter")}}
- {{domxref("Element/mouseleave_event", "mouseleave")}}
- {{domxref("Element/contextmenu_event", "contextmenu")}}
