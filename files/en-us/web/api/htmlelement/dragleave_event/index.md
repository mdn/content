---
title: "HTMLElement: dragleave event"
short-title: dragleave
slug: Web/API/HTMLElement/dragleave_event
page-type: web-api-event
browser-compat: api.HTMLElement.dragleave_event
---

{{APIRef}}

The `dragleave` event is fired when a dragged element or text selection leaves a valid drop target.

This event is not cancelable.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js
addEventListener("dragleave", (event) => {});

ondragleave = (event) => {};
```

## Event type

A {{domxref("DragEvent")}}. Inherits from {{domxref("Event")}}.

{{InheritanceDiagram("DragEvent")}}

## Event properties

_In addition to the properties listed below, properties from the parent interface, {{domxref("Event")}}, are available._

- {{domxref('DragEvent.dataTransfer')}} {{ReadOnlyInline}}
  - : The data that is transferred during a drag and drop interaction.

## Examples

### Resetting drop zone styles on dragleave

In this example, we have a draggable element inside a container. Try grabbing the element, dragging it over the other container, and then releasing it.

We give the other container a purple background while the draggable element is over it, to signal that the draggable element could be dropped on to the container. We listen for the `dragleave` event to reset the container background when the draggable element is dragged off the container.

Note though that in this partial example we haven't implemented dropping: for a complete example of drag and drop, see the page for the [`drag`](/en-US/docs/Web/API/HTMLElement/drag_event) event.

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

.dropzone.dragover {
  background-color: purple;
}
```

#### JavaScript

```js
const target = document.getElementById("droptarget");
target.addEventListener("dragenter", (event) => {
  // highlight potential drop target when the draggable element enters it
  if (event.target.classList.contains("dropzone")) {
    event.target.classList.add("dragover");
  }
});

target.addEventListener("dragleave", (event) => {
  // reset background of potential drop target when the draggable element leaves it
  if (event.target.classList.contains("dropzone")) {
    event.target.classList.remove("dragover");
  }
});
```

#### Result

{{EmbedLiveSample('Resetting drop zone styles on dragleave')}}

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
  - {{domxref("HTMLElement/drop_event", "drop")}}

- This event on other targets:

  - {{domxref("Window")}}: {{domxref("Window/dragleave_event", "dragleave")}} event
  - {{domxref("Document")}}: {{domxref("Document/dragleave_event", "dragleave")}} event
  - {{domxref("SVGElement")}}: {{domxref("SVGElement/dragleave_event", "dragleave")}} event
