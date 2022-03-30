---
title: 'Element: mouseleave event'
slug: Web/API/Element/mouseleave_event
tags:
  - API
  - DOM
  - Element
  - Event
  - MouseEvent
  - Reference
  - mouse
  - mouseleave
  - move
browser-compat: api.Element.mouseleave_event
---
{{APIRef}}

The **`mouseleave`** event is fired at an {{domxref("Element")}} when the cursor of a pointing device (usually a mouse) is moved out of it.

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
        {{domxref("GlobalEventHandlers.onmouseleave", "onmouseleave")}}
      </td>
    </tr>
  </tbody>
</table>

`mouseleave` and {{domxref("Element/mouseout_event", "mouseout")}} are similar but differ in that `mouseleave` does not bubble and `mouseout` does. This means that `mouseleave` is fired when the pointer has exited the element _and_ all of its descendants, whereas `mouseout` is fired when the pointer leaves the element _or_ leaves one of the element's descendants (even if the pointer is still within the element).

#### Behavior of `mouseleave` events:

![](mouseleave.png)

One `mouseleave` event is sent to each element of the hierarchy when leaving them. Here four events are sent to the four elements of the hierarchy when the pointer moves from the text to an area outside of the most outer div represented here.

#### Behavior of `mouseout` events:

![](mouseout.png)

One single `mouseout` event is sent to the deepest element of the DOM tree, then it bubbles up the hierarchy until it is canceled by a handler or reaches the root.

## Examples

The [`mouseout`](/en-US/docs/Web/API/Element/mouseout_event#examples) documentation has an example illustrating the difference between `mouseout` and `mouseleave`.

### mouseleave

The following trivial example uses the `mouseenter` event to change the border on the `<div>` when the mouse enters the space alloted to it. It then adds an item to the list with the number of the `mouseenter` or `mouseleave` event.

#### HTML

```html
<div id='mouseTarget'>
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

#### Result

{{EmbedLiveSample('mouseleave')}}

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
