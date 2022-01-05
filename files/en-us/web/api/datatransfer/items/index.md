---
title: DataTransfer.items
slug: Web/API/DataTransfer/items
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
  transfer items")}} in a drag operation. The list includes one item for each item in the
operation and if the operation had no items, the list is empty.

## Syntax

```js
itemList = dataTransfer.items;
```

### Return value

A {{domxref("DataTransferItemList")}} object containing {{domxref("DataTransferItem")}}
objects representing the items being dragged in a drag operation, one list item for each
object being dragged. If the drag operation had no data, the list is empty.

## Example

This example shows the use of the `items` and
{{domxref("DataTransfer.types","types")}} properties.

```js
<!DOCTYPE html>
<html lang=en>
<title>Examples of DataTransfer.{types,items} properties</title>
<meta content="width=device-width">
<style>
  div {
    margin: 0em;
    padding: 2em;
  }
  #target {
    border: 1px solid black;
  }
</style>
<script>
function dragstart_handler(ev) {
 console.log("dragStart: target.id = " + ev.target.id);
 // Add this element's id to the drag payload so the drop handler will
 // know which element to add to its tree
 ev.dataTransfer.setData("text/plain", ev.target.id);
 ev.dataTransfer.effectAllowed = "move";
}

function drop_handler(ev) {
 console.log("drop: target.id = " + ev.target.id);
 ev.preventDefault();
 // Get the id of the target and add the moved element to the target's DOM
 var data = ev.dataTransfer.getData("text");
 ev.target.appendChild(document.getElementById(data));
 // Print each format type
 if (ev.dataTransfer.types != null) {
   for (var i=0; i < ev.dataTransfer.types.length; i++) {
     console.log("... types[" + i + "] = " + ev.dataTransfer.types[i]);
   }
 }
 // Print each item's "kind" and "type"
 if (ev.dataTransfer.items != null) {
   for (var i=0; i < ev.dataTransfer.items.length; i++) {
     console.log("... items[" + i + "].kind = " + ev.dataTransfer.items[i].kind + " ; type = " + ev.dataTransfer.items[i].type);
   }
 }
}

function dragover_handler(ev) {
 console.log("dragOver");
 ev.preventDefault();
 // Set the dropEffect to move
 ev.dataTransfer.dropEffect = "move"
}
</script>
<body>
<h1>Examples of <code>DataTransfer</code>.{<code>types</code>, <code>items</code>} properties</h1>
 <ul>
   <li id="i1" ondragstart="dragstart_handler(event);" draggable="true">Drag Item 1 to the Drop Zone</li>
   <li id="i2" ondragstart="dragstart_handler(event);" draggable="true">Drag Item 2 to the Drop Zone</li>
 </ul>
 <div id="target" ondrop="drop_handler(event);" ondragover="dragover_handler(event);">Drop Zone</div>
</body>
</html>
```

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
