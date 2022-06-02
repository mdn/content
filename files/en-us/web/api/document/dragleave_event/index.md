---
title: 'Document: dragleave event'
slug: Web/API/Document/dragleave_event
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
  - dragleave
browser-compat: api.Document.dragleave_event
---
{{APIRef}}

The `dragleave` event is fired when a dragged element or text selection leaves a valid drop target.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Bubbles</th>
      <td>Yes</td>
    </tr>
    <tr>
      <th scope="row">Cancelable</th>
      <td>No</td>
    </tr>
    <tr>
      <th scope="row">Default action</th>
      <td>None.</td>
    </tr>
    <tr>
      <th scope="row">Interface</th>
      <td>{{domxref("DragEvent")}}</td>
    </tr>
    <tr>
      <th scope="row">Event handler property</th>
      <td>
        {{domxref("GlobalEventHandlers/ondragleave", "ondragleave")}}
      </td>
    </tr>
  </tbody>
</table>

## Examples

### Resetting drop zone styles on dragleave

In this example, we have a draggable element inside a container. Try grabbing the element, dragging it over the other container, and then releasing it.

We give the other container a purple background while the draggable element is over it, to signal that the draggable element could be dropped on to the container. We listen for the `dragleave` event to reset the container background when the draggable element is dragged off the container.

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
document.addEventListener("dragenter", event => {
  // highlight potential drop target when the draggable element enters it
  if (event.target.classList.contains("dropzone")) {
    event.target.classList.add("dragover");
  }
});

document.addEventListener("dragleave", event => {
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

  - {{domxref("Document/drag_event", "drag")}}
  - {{domxref("Document/dragstart_event", "dragstart")}}
  - {{domxref("Document/dragend_event", "dragend")}}
  - {{domxref("Document/dragover_event", "dragover")}}
  - {{domxref("Document/dragenter_event", "dragenter")}}
  - {{domxref("Document/drop_event", "drop")}}

- This event on other targets:

  - {{domxref("Window")}}: {{domxref("Window/dragleave_event", "dragleave")}} event
  - {{domxref("HTMLElement")}}: {{domxref("HTMLElement/dragleave_event", "dragleave")}} event
  - {{domxref("SVGElement")}}: {{domxref("SVGElement/dragleave_event", "dragleave")}} event
