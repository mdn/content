---
title: "HTMLElement: dragend event"
short-title: dragend
slug: Web/API/HTMLElement/dragend_event
page-type: web-api-event
browser-compat: api.HTMLElement.dragend_event
---

{{APIRef}}

The `dragend` event is fired when a drag operation ends (by releasing a mouse button or hitting the escape key).

This event is cancelable and may bubble up to the {{domxref("Document")}} and {{domxref("Window")}} objects.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js
addEventListener("dragend", (event) => {});

ondragend = (event) => {};
```

## Event type

A {{domxref("DragEvent")}}. Inherits from {{domxref("Event")}}.

{{InheritanceDiagram("DragEvent")}}

## Event properties

_In addition to the properties listed below, properties from the parent interface, {{domxref("Event")}}, are available._

- {{domxref('DragEvent.dataTransfer')}} {{ReadOnlyInline}}
  - : The data that is transferred during a drag-and-drop interaction.

## Examples

### Resetting opacity on dragend

In this example, we have a draggable element inside a container. Try grabbing the element, dragging it, and then releasing it.

We make the element half-transparent while it is dragged, and listen for the `dragend` event to reset the element's opacity when it is released.

For a complete example of drag and drop, see the page for the [`drag`](/en-US/docs/Web/API/HTMLElement/drag_event) event.

#### HTML

```html
<div id="container">
  <div id="draggable" draggable="true">This div is draggable</div>
</div>
<div class="dropzone"></div>
```

#### CSS

```css
body {
  /* Prevent the user from selecting text in the example */
  user-select: none;
}

#draggable {
  text-align: center;
  background: white;
}

#container {
  width: 200px;
  height: 20px;
  background: blueviolet;
  padding: 10px;
}

.dragging {
  opacity: 0.5;
}
```

#### JavaScript

```js
const source = document.getElementById("draggable");
source.addEventListener("dragstart", (event) => {
  // make it half transparent
  event.target.classList.add("dragging");
});

source.addEventListener("dragend", (event) => {
  // reset the transparency
  event.target.classList.remove("dragging");
});
```

#### Result

{{EmbedLiveSample('Resetting opacity on drag end')}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- Other drag and drop events:

  - {{domxref("HTMLElement/drag_event", "drag")}}
  - {{domxref("HTMLElement/dragstart_event", "dragstart")}}
  - {{domxref("HTMLElement/dragover_event", "dragover")}}
  - {{domxref("HTMLElement/dragenter_event", "dragenter")}}
  - {{domxref("HTMLElement/dragleave_event", "dragleave")}}
  - {{domxref("HTMLElement/drop_event", "drop")}}
