---
title: DataTransfer.effectAllowed
slug: Web/API/DataTransfer/effectAllowed
page-type: web-api-instance-property
tags:
  - API
  - HTML DOM
  - Property
  - Reference
  - drag and drop
browser-compat: api.DataTransfer.effectAllowed
---
{{APIRef("HTML Drag and Drop API")}}

The **`DataTransfer.effectAllowed`** property specifies the
effect that is allowed for a drag operation. The _copy_ operation is used to
indicate that the data being dragged will be copied from its present location to the
drop location. The _move_ operation is used to indicate that the data being
dragged will be moved, and the _link_ operation is used to indicate that some
form of relationship or connection will be created between the source and drop
locations.

This property should be set in the {{domxref("HTMLElement/dragstart_event", "dragstart")}} event to set the desired drag
effect for the drag source. Within the {{domxref("HTMLElement/dragenter_event", "dragenter")}} and {{domxref("HTMLElement/dragover_event", "dragover")}}
event handlers, this property will be set to whatever value was assigned during the
{{domxref("HTMLElement/dragstart_event", "dragstart")}} event, thus `effectAllowed` may be used to determine
which effect is permitted.

Assigning a value to `effectAllowed` in events other than
{{domxref("HTMLElement/dragstart_event", "dragstart")}} has no effect.

## Value

A string representing the drag operation that is allowed. The
possible values are:

- `none`
  - : The item may not be dropped.
- `copy`
  - : A copy of the source item may be made at the new location.
- `copyLink`
  - : A copy or link operation is permitted.
- `copyMove`
  - : A copy or move operation is permitted.
- `link`
  - : A link may be established to the source at the new location.
- `linkMove`
  - : A link or move operation is permitted.
- `move`
  - : An item may be moved to a new location.
- `all`
  - : All operations are permitted.
- `uninitialized`
  - : The default value when the effect has not been set, equivalent to all.

Assigning any other value to `effectAllowed` has no effect and the old value
is retained.

Internet Explorer will change the value to be lowercased; thus, `linkMove`
will become `linkmove`, and so on.

## Examples

### Setting effectAllowed

In this example we set `effectAllowed` to `"move"` in the `dragstart` handler.

#### HTML

```html
<div>
  <p id="source" draggable="true">
     Select this element, drag it to the Drop Zone and then release the selection to move the element.</p>
</div>
<div id="target">Drop Zone</div>
<pre id="output"></pre>
<button id="reset">Reset</button>
```

#### CSS

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

#output {
  height: 100px;
  overflow: scroll;
}
```

#### JavaScript

```js
function dragstartHandler(ev) {
  log(`dragstart: effectAllowed = ${ev.dataTransfer.effectAllowed}`);

  // Add this element's id to the drag payload so the drop handler will
  // know which element to add to its tree
  ev.dataTransfer.setData("text", ev.target.id);
  ev.dataTransfer.effectAllowed = "move";
}

function dropHandler(ev) {
  log(`drop: effectAllowed = ${ev.dataTransfer.effectAllowed}`);

  ev.preventDefault();
 // Get the id of the target and add the element to the target's DOM
 const data = ev.dataTransfer.getData("text");
 ev.target.appendChild(document.getElementById(data));
}

function dragoverHandler(ev) {
  log(`dragover: effectAllowed = ${ev.dataTransfer.effectAllowed}`);
  ev.preventDefault();
}

const source = document.querySelector("#source");
const target = document.querySelector("#target");

source.addEventListener("dragstart", dragstartHandler)
target.addEventListener("dragover", dragoverHandler)
target.addEventListener("drop", dropHandler)

function log(message) {
  const output = document.querySelector("#output");
  output.textContent = `${output.textContent}\n${message}`;
  output.scrollTop = output.scrollHeight;
}

const reset = document.querySelector("#reset");
reset.addEventListener("click", () => document.location.reload());
```

#### Result

{{EmbedLiveSample("Setting effectAllowed", 0, 400)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Drag and drop](/en-US/docs/Web/API/HTML_Drag_and_Drop_API)
- [Drag Operations](/en-US/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations)
- [Recommended Drag Types](/en-US/docs/Web/API/HTML_Drag_and_Drop_API/Recommended_drag_types)
- [Dragging and Dropping Multiple Items](/en-US/docs/Web/API/HTML_Drag_and_Drop_API/Multiple_items)
- [DataTransfer test - Paste or Drag](https://codepen.io/tech_query/pen/MqGgap)
