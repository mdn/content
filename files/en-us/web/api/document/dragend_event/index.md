---
title: 'Document: dragend event'
slug: Web/API/Document/dragend_event
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
  - dragend
browser-compat: api.Document.dragend_event
---
{{APIRef}}

The `dragend` event is fired when a drag operation is being ended (by releasing a mouse button or hitting the escape key).

This event is not cancelable.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js
addEventListener('dragend', (event) => {});

ondragend = (event) => { };
```

## Event type

A {{domxref("DragEvent")}}. Inherits from {{domxref("Event")}}.

{{InheritanceDiagram("DragEvent")}}

## Event properties

_In addition to the properties listed below, properties from the parent interface, {{domxref("Event")}}, are available._

- {{domxref('DragEvent.dataTransfer')}} {{ReadOnlyInline}}
  - : The data that is transferred during a drag and drop interaction.

## Examples

### Resetting opacity on drag end

In this example, we have a draggable element inside a container. Try grabbing the element, dragging it, and then releasing it.

We make the element half-transparent while it is being dragged, and listen for the `dragend` event to reset the element's opacity when it is released.

For a more complete example of drag and drop, see the page for the [`drag`](/en-US/docs/Web/API/Document/drag_event) event.

#### HTML

```html
<div id="container">
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

#container {
  width: 200px;
  height: 20px;
  background: blueviolet;
  padding: 10px;
}

.dragging {
  opacity: .5;
}
```

#### JavaScript

```js
document.addEventListener("dragstart", (event) => {
  // make it half transparent
  event.target.classList.add("dragging");
});

document.addEventListener("dragend", (event) => {
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

  - {{domxref("Document/drag_event", "drag")}}
  - {{domxref("Document/dragstart_event", "dragstart")}}
  - {{domxref("Document/dragover_event", "dragover")}}
  - {{domxref("Document/dragenter_event", "dragenter")}}
  - {{domxref("Document/dragleave_event", "dragleave")}}
  - {{domxref("Document/drop_event", "drop")}}

- This event on other targets:

  - {{domxref("Window")}}: {{domxref("Window/dragend_event", "dragend")}} event
  - {{domxref("HTMLElement")}}: {{domxref("HTMLElement/dragend_event", "dragend")}} event
  - {{domxref("SVGElement")}}: {{domxref("SVGElement/dragend_event", "dragend")}} event
