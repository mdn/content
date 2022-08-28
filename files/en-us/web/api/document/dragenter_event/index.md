---
title: 'Document: dragenter event'
slug: Web/API/Document/dragenter_event
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
  - dragenter
browser-compat: api.Document.dragenter_event
---
{{APIRef}}

The `dragenter` event is fired when a dragged element or text selection enters a valid drop target.

The target object is the _immediate user selection_ (the element directly indicated by the user as the drop target), or the {{HTMLElement("body")}} element.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js
addEventListener('dragenter', (event) => {});

ondragenter = (event) => { };
```

## Event type

A {{domxref("DragEvent")}}. Inherits from {{domxref("Event")}}.

{{InheritanceDiagram("DragEvent")}}

## Event properties

_In addition to the properties listed below, properties from the parent interface, {{domxref("Event")}}, are available._

- {{domxref('DragEvent.dataTransfer')}} {{ReadOnlyInline}}
  - : The data that is transferred during a drag and drop interaction.

## Examples

### Styling drop zones on dragenter

In this example, we have a draggable element inside a container. Try grabbing the element, dragging it over the other container, and then releasing it.

We listen for the `dragenter` event to give the other container a purple background while the draggable element is over it, to signal that the draggable element could be dropped on to the container.

Note though that in this partial example we haven't implemented dropping: for a complete example of drag and drop, see the page for the [`drag`](/en-US/docs/Web/API/Document/drag_event) event.

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

.dropzone.dragover {
  background-color: purple;
}
```

#### JavaScript

```js
document.addEventListener("dragenter", (event) => {
  // highlight potential drop target when the draggable element enters it
  if (event.target.classList.contains("dropzone")) {
    event.target.classList.add("dragover");
  }
});

document.addEventListener("dragleave", (event) => {
  // reset background of potential drop target when the draggable element leaves it
  if (event.target.classList.contains("dropzone")) {
    event.target.classList.remove("dragover");
  }
});
```

#### Result

{{EmbedLiveSample('Styling drop zones on dragenter')}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- Other drag and drop events:

  - {{domxref("Document/drag_event", "drag")}}
  - {{domxref("Document/dragstart_event", "dragstart")}}
  - {{domxref("Document/dragend_event", "dragend")}}
  - {{domxref("Document/dragover_event", "dragover")}}
  - {{domxref("Document/dragleave_event", "dragleave")}}
  - {{domxref("Document/drop_event", "drop")}}

- This event on other targets:

  - {{domxref("Window")}}: {{domxref("Window/dragenter_event", "dragenter")}} event
  - {{domxref("HTMLElement")}}: {{domxref("HTMLElement/dragenter_event", "dragenter")}} event
  - {{domxref("SVGElement")}}: {{domxref("SVGElement/dragenter_event", "dragenter")}} event
