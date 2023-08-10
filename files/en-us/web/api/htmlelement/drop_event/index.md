---
title: "HTMLElement: drop event"
short-title: drop
slug: Web/API/HTMLElement/drop_event
page-type: web-api-event
browser-compat: api.HTMLElement.drop_event
---

{{APIRef}}

The **`drop`** event is fired when an element or text selection is dropped on a valid drop target. To ensure that the `drop` event always fires as expected, you should always include a [`preventDefault()`](/en-US/docs/Web/API/Event/preventDefault) call in the part of your code which handles the [`dragover`](/en-US/docs/Web/API/HTMLElement/dragover_event) event.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js
addEventListener("drop", (event) => {});

ondrop = (event) => {};
```

## Event type

A {{domxref("DragEvent")}}. Inherits from {{domxref("Event")}}.

{{InheritanceDiagram("DragEvent")}}

## Event properties

_In addition to the properties listed below, properties from the parent interface, {{domxref("Event")}}, are available._

- {{domxref('DragEvent.dataTransfer')}} {{ReadOnlyInline}}
  - : The data that is transferred during a drag and drop interaction.

## Examples

### A minimal drag and drop example

In this example, we have a draggable element inside a container. Try grabbing the element, dragging it over the other container, and then releasing it.

We use three event handlers here:

- in the `dragstart` event handler, we get a reference to the element that the user dragged
- in the `dragover` event handler for the target container, we call `event.preventDefault()`, which enables it to receive `drop` events.
- in the `drop` event handler for the drop zone, we handle moving the draggable element from the original container to the drop zone.

For a more complete example of drag and drop, see the page for the [`drag`](/en-US/docs/Web/API/HTMLElement/drag_event) event.

#### HTML

```html
<div class="dropzone">
  <div id="draggable" draggable="true">This div is draggable</div>
</div>
<div class="dropzone" id="droptarget"></div>
```

#### CSS

```css
body {
  /* Prevent the user selecting text in the example */
  user-select: none;
}

#draggable {
  text-align: center;
  background: white;
}

.dropzone {
  width: 200px;
  height: 20px;
  background: blueviolet;
  margin: 10px;
  padding: 10px;
}
```

#### JavaScript

```js
let dragged = null;

const source = document.getElementById("draggable");
source.addEventListener("dragstart", (event) => {
  // store a ref. on the dragged elem
  dragged = event.target;
});

const target = document.getElementById("droptarget");
target.addEventListener("dragover", (event) => {
  // prevent default to allow drop
  event.preventDefault();
});

target.addEventListener("drop", (event) => {
  // prevent default action (open as link for some elements)
  event.preventDefault();
  // move dragged element to the selected drop target
  if (event.target.className === "dropzone") {
    dragged.parentNode.removeChild(dragged);
    event.target.appendChild(dragged);
  }
});
```

#### Result

{{EmbedLiveSample('A minimal drag and drop example')}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- Other drag and drop events:

  - {{domxref("HTMLElement/drag_event", "drag")}}
  - {{domxref("HTMLElement/dragstart_event", "dragstart")}}
  - {{domxref("HTMLElement/dragend_event", "dragend")}}
  - {{domxref("HTMLElement/dragover_event", "dragover")}}
  - {{domxref("HTMLElement/dragenter_event", "dragenter")}}
  - {{domxref("HTMLElement/dragleave_event", "dragleave")}}

- This event on other targets:

  - {{domxref("Window")}}: {{domxref("Window/drop_event", "drop")}} event
  - {{domxref("Document")}}: {{domxref("Document/drop_event", "drop")}} event
  - {{domxref("SVGElement")}}: {{domxref("SVGElement/drop_event", "drop")}} event
