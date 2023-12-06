---
title: "DataTransfer: dropEffect property"
short-title: dropEffect
slug: Web/API/DataTransfer/dropEffect
page-type: web-api-instance-property
browser-compat: api.DataTransfer.dropEffect
---

{{APIRef("HTML Drag and Drop API")}}

The **`DataTransfer.dropEffect`** property controls the
feedback (typically visual) the user is given during a drag and drop operation. It will
affect which cursor is displayed while dragging. For example, when the user hovers over
a target drop element, the browser's cursor may indicate which type of operation will
occur.

When the {{domxref("DataTransfer")}} object is created, `dropEffect` is set
to a string value. On getting, it returns its current value. On setting, if the new
value is one of the values listed below, then the property's current value will be set
to the new value and other values will be ignored.

For the {{domxref("HTMLElement/dragenter_event", "dragenter")}} and {{domxref("HTMLElement/dragover_event", "dragover")}} events,
`dropEffect` will be initialized based on what action the user is requesting.
How this is determined is platform specific, but typically the user can press modifier
keys such as the alt key to adjust the desired action. Within event handlers for
{{domxref("HTMLElement/dragenter_event", "dragenter")}} and {{domxref("HTMLElement/dragover_event", "dragover")}} events, `dropEffect` should
be modified if a different action is desired than the action that the user is
requesting.

For the {{domxref("HTMLElement/drop_event", "drop")}} and {{domxref("HTMLElement/dragend_event", "dragend")}} events, `dropEffect` will
be set to the action that was desired, which will be the value `dropEffect`
had after the last {{domxref("HTMLElement/dragenter_event", "dragenter")}} or {{domxref("HTMLElement/dragover_event", "dragover")}} event. In a
{{domxref("HTMLElement/dragend_event", "dragend")}} event, for instance, if the desired dropEffect is "move", then the
data being dragged should be removed from the source.

## Value

A string representing the drag operation effect. The possible values
are:

- `copy`
  - : A copy of the source item is made at the new location.
- `move`
  - : An item is moved to a new location.
- `link`
  - : A link is established to the source at the new location.
- `none`
  - : The item may not be dropped.

Assigning any other value to `dropEffect` has no effect and the old value is
retained.

## Example

This example shows the use of the `dropEffect` and
{{domxref("DataTransfer.effectAllowed","effectAllowed")}} properties.

### HTML

```html
<div>
  <p id="source" ondragstart="dragstart_handler(event);" draggable="true">
    Select this element, drag it to the Drop Zone and then release the selection
    to move the element.
  </p>
</div>
<div
  id="target"
  ondrop="drop_handler(event);"
  ondragover="dragover_handler(event);">
  Drop Zone
</div>
```

### CSS

```css
div {
  margin: 0em;
  padding: 2em;
}

#source {
  color: blue;
  border: 1px solid black;
}

#target {
  border: 1px solid black;
}
```

### JavaScript

```js
function dragstart_handler(ev) {
  console.log(
    `dragStart: dropEffect = ${ev.dataTransfer.dropEffect} ; effectAllowed = ${ev.dataTransfer.effectAllowed}`,
  );

  // Add this element's id to the drag payload so the drop handler will
  // know which element to add to its tree
  ev.dataTransfer.setData("text", ev.target.id);
  ev.dataTransfer.effectAllowed = "move";
}

function drop_handler(ev) {
  console.log(
    `drop: dropEffect = ${ev.dataTransfer.dropEffect} ; effectAllowed = ${ev.dataTransfer.effectAllowed}`,
  );
  ev.preventDefault();

  // Get the id of the target and add the moved element to the target's DOM
  const data = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(data));
}

function dragover_handler(ev) {
  console.log(
    `dragOver: dropEffect = ${ev.dataTransfer.dropEffect} ; effectAllowed = ${ev.dataTransfer.effectAllowed}`,
  );
  ev.preventDefault();
  // Set the dropEffect to move
  ev.dataTransfer.dropEffect = "move";
}
```

{{EmbedLiveSample('Example', 300, 250)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Drag and drop](/en-US/docs/Web/API/HTML_Drag_and_Drop_API)
- [Drag Operations](/en-US/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations)
- [Recommended Drag Types](/en-US/docs/Web/API/HTML_Drag_and_Drop_API/Recommended_drag_types)
- [DataTransfer test - Paste or Drag](https://codepen.io/tech_query/pen/MqGgap)
