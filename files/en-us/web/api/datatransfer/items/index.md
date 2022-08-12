---
title: DataTransfer.items
slug: Web/API/DataTransfer/items
page-type: web-api-instance-property
tags:
  - API
  - HTML DOM
  - Property
  - Reference
  - drag and drop
browser-compat: api.DataTransfer.items
---
{{APIRef("HTML Drag and Drop API")}}

The read-only {{domxref("DataTransfer")}} property `items` property is a
{{domxref("DataTransferItemList","list")}} of the {{domxref("DataTransferItem","data
  transfer items", "", "nocode")}} in a drag operation. The list includes one item for each item in the
operation and if the operation had no items, the list is empty.

## Value

A {{domxref("DataTransferItemList")}} object containing {{domxref("DataTransferItem")}}
objects representing the items being dragged in a drag operation, one list item for each
object being dragged. If the drag operation had no data, the list is empty.

## Examples

### Logging dragged items

This example uses `items` to log information about dragged items.

#### HTML

```html
<ul>
  <li id="source1" draggable="true">Drag Item 1 to the Drop Zone</li>
  <li id="source2" draggable="true">Drag Item 2 to the Drop Zone</li>
</ul>
<div id="target">Drop Zone</div>

<button id="reset">Reset</button>
```

#### CSS

```css
div {
  margin: 0em;
  padding: 2em;
}

#target {
  border: 1px solid black;
}
```

#### JavaScript

```js
function dragstartHandler(ev) {
 console.log(`dragstart: target.id = ${ev.target.id}`);
 // Add this element's id to the drag payload so the drop handler will
 // know which element to add to its tree
 ev.dataTransfer.setData("text/plain", ev.target.id);
 ev.dataTransfer.effectAllowed = "move";
}

function dropHandler(ev) {
 ev.preventDefault();
 // Get the id of the target and add the moved element to the target's DOM
 const data = ev.dataTransfer.getData("text");
 ev.target.appendChild(document.getElementById(data));
 // Print each item's "kind" and "type"
 if (ev.dataTransfer.items) {
   for (const item of ev.dataTransfer.items) {
     console.log(`kind = ${item.kind}, type = ${item.type}`);
   }
 }
}

function dragoverHandler(ev) {
 ev.preventDefault();
 // Set the dropEffect to move
 ev.dataTransfer.dropEffect = "move"
}

const source1 = document.querySelector("#source1");
const source2 = document.querySelector("#source2");
const target = document.querySelector("#target");

source1.addEventListener("dragstart", dragstartHandler)
source2.addEventListener("dragstart", dragstartHandler)
target.addEventListener("dragover", dragoverHandler)
target.addEventListener("drop", dropHandler)

const reset = document.querySelector("#reset");
reset.addEventListener("click", () => document.location.reload());
```

#### Result

{{EmbedLiveSample("Logging dragged items", 0, 400)}}

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
