---
title: 'Document: drag event'
slug: Web/API/Document/drag_event
tags:
  - API
  - DOM
  - Document
  - Drag
  - DragEvent
  - Event
  - Reference
  - Web
  - drag and drop
browser-compat: api.Document.drag_event
---
{{APIRef}}

The `drag` event is fired every few hundred milliseconds as an element or text selection is being dragged by the user.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Bubbles</th>
      <td>Yes</td>
    </tr>
    <tr>
      <th scope="row">Cancelable</th>
      <td>Yes</td>
    </tr>
    <tr>
      <th scope="row">Default action</th>
      <td>Continue the drag &#x26; drop operation.</td>
    </tr>
    <tr>
      <th scope="row">Interface</th>
      <td>{{domxref("DragEvent")}}</td>
    </tr>
    <tr>
      <th scope="row">Event handler property</th>
      <td>
        {{domxref("GlobalEventHandlers/ondrag", "ondrag")}}
      </td>
    </tr>
  </tbody>
</table>

## Examples

### Drag and drop example

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

.dragging {
  opacity: .5;
}
```

#### JavaScript

```js
let dragged;

/* events fired on the draggable target */
document.addEventListener("drag", event => {
  console.log("dragging");
});

document.addEventListener("dragstart", event => {
  // store a ref. on the dragged elem
  dragged = event.target;
  // make it half transparent
  event.target.classList.add("dragging");
});

document.addEventListener("dragend", event => {
  // reset the transparency
  event.target.classList.remove("dragging");
});

/* events fired on the drop targets */
document.addEventListener("dragover", event => {
  // prevent default to allow drop
  event.preventDefault();
}, false);

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

document.addEventListener("drop", event => {
  // prevent default action (open as link for some elements)
  event.preventDefault();
  // move dragged element to the selected drop target
  if (event.target.classList.contains("dropzone")) {
    event.target.classList.remove("dragover");
    dragged.parentNode.removeChild(dragged);
    event.target.appendChild(dragged);
  }
});
```

#### Result

{{EmbedLiveSample('Drag and drop example')}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- Other drag and drop events:

  - {{domxref("Document/dragstart_event", "dragstart")}}
  - {{domxref("Document/dragend_event", "dragend")}}
  - {{domxref("Document/dragover_event", "dragover")}}
  - {{domxref("Document/dragenter_event", "dragenter")}}
  - {{domxref("Document/dragleave_event", "dragleave")}}
  - {{domxref("Document/drop_event", "drop")}}

- This event on other targets:

  - {{domxref("Window")}}: {{domxref("Window/drag_event", "drag")}} event
  - {{domxref("HTMLElement")}}: {{domxref("HTMLElement/drag_event", "drag")}} event
  - {{domxref("SVGElement")}}: {{domxref("SVGElement/drag_event", "drag")}} event
