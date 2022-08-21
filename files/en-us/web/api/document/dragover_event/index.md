---
title: 'Document: dragover event'
slug: Web/API/Document/dragover_event
page-type: web-api-event
tags:
  - API
  - DOM
  - Document
  - DragEvent
  - Event
  - Reference
  - Web
  - drag and drop
browser-compat: api.Document.dragover_event
---
{{APIRef}}

The `dragover` event is fired when an element or text selection is being dragged over a valid drop target (every few hundred milliseconds).

The event is fired on the drop target(s).

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js
addEventListener('dragover', (event) => {});

ondragover = (event) => { };
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

For a more complete example of drag and drop, see the page for the [`drag`](/en-US/docs/Web/API/Document/drag_event) event.

#### HTML

```html
<div class="dropzone">
  <div id="draggable" draggable="true">
    This div is draggable
  </div>
</div>
<div class="dropzone"></div>
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

document.addEventListener("dragstart", (event) => {
  // store a ref. on the dragged elem
  dragged = event.target;
});

document.addEventListener("dragover", (event) => {
  // prevent default to allow drop
  event.preventDefault();
});

document.addEventListener("drop", (event) => {
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

  - {{domxref("Document/drag_event", "drag")}}
  - {{domxref("Document/dragstart_event", "dragstart")}}
  - {{domxref("Document/dragend_event", "dragend")}}
  - {{domxref("Document/dragenter_event", "dragenter")}}
  - {{domxref("Document/dragleave_event", "dragleave")}}
  - {{domxref("Document/drop_event", "drop")}}

- This event on other targets:

  - {{domxref("Window")}}: {{domxref("Window/dragover_event", "dragover")}} event
  - {{domxref("HTMLElement")}}: {{domxref("HTMLElement/dragover_event", "dragover")}} event
  - {{domxref("SVGElement")}}: {{domxref("SVGElement/dragover_event", "dragover")}} event
