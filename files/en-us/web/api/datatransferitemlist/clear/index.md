---
title: "DataTransferItemList: clear() method"
short-title: clear()
slug: Web/API/DataTransferItemList/clear
page-type: web-api-instance-method
browser-compat: api.DataTransferItemList.clear
---

{{APIRef("HTML Drag and Drop API")}}

The {{domxref("DataTransferItemList")}} method
**`clear()`** removes all {{domxref("DataTransferItem")}}
objects from the drag data items list, leaving the list empty.

The drag data store in which this list is kept is only writable while handling the
{{domxref("HTMLElement/dragstart_event", "dragstart")}} event. While handling {{domxref("HTMLElement/drop_event", "drop")}}, the drag data store is
in read-only mode, and this method silently does nothing. No exception is thrown.

## Syntax

```js-nolint
clear()
```

### Parameters

None.

### Return value

None ({{jsxref("undefined")}}).

## Examples

This example shows the use of the `clear()` method.

### HTML

```html
<div>
  <p
    id="source"
    ondragstart="dragstartHandler(event);"
    ondragend="dragendHandler(event);"
    draggable="true">
    Select this element, drag it to the Drop Zone and then release the selection
    to move the element.
  </p>
</div>
<div
  id="target"
  ondrop="dropHandler(event);"
  ondragover="dragoverHandler(event);">
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
function dragstartHandler(ev) {
  console.log("dragStart");

  // Add this element's id to the drag payload so the drop handler will
  // know which element to add to its tree
  const dataList = ev.dataTransfer.items;
  dataList.add(ev.target.id, "text/plain");
}

function dropHandler(ev) {
  console.log("Drop");
  ev.preventDefault();

  // Loop through the dropped items and log their data
  for (const item of ev.dataTransfer.items) {
    if (item.kind === "string" && item.type.match(/^text\/plain/)) {
      // This item is the target node
      item.getAsString((s) => {
        ev.target.appendChild(document.getElementById(s));
      });
    } else if (item.kind === "string" && item.type.match(/^text\/html/)) {
      // Drag data item is HTML
      item.getAsString((s) => {
        console.log(`… Drop: HTML = ${s}`);
      });
    } else if (item.kind === "string" && item.type.match(/^text\/uri-list/)) {
      // Drag data item is URI
      item.getAsString((s) => {
        console.log(`… Drop: URI = ${s}`);
      });
    }
  }
}

function dragoverHandler(ev) {
  console.log("dragOver");
  ev.preventDefault();

  // Set the dropEffect to move
  ev.dataTransfer.dropEffect = "move";
}

function dragendHandler(ev) {
  console.log("dragEnd");
  const dataList = ev.dataTransfer.items;

  // Clear any remaining drag data
  dataList.clear();
}
```

### Result

{{EmbedLiveSample('Examples', 400, 300)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
