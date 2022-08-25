---
title: DataTransferItemList.length
slug: Web/API/DataTransferItemList/length
page-type: web-api-instance-property
tags:
  - API
  - DataTransferItemList
  - Dragged Items
  - Drop Items
  - HTML DOM
  - HTML Drag and Drop API
  - Item List
  - Property
  - Read-only
  - Reference
  - drag and drop
  - length
browser-compat: api.DataTransferItemList.length
---
{{APIRef("HTML Drag and Drop API")}}

The read-only **`length`** property of the
{{domxref("DataTransferItemList")}} interface returns the number of items currently in
the drag item list.

## Value

The number of drag data items in the list, or 0 if the list is empty or disabled. The
drag item list is considered to be disabled if the item list's
{{domxref("DataTransfer")}} object is not associated with a drag data store.

## Examples

This example shows the use of the `length` property.

### JavaScript

```js
function dragstart_handler(ev) {
  console.log("dragStart");
  // Add this element's id to the drag payload so the drop handler will
  // know which element to add to its tree
  const dataList = ev.dataTransfer.items;
  dataList.add(ev.target.id, "text/plain");
  // Add some other items to the drag payload
  dataList.add("<p>Paragraph…</p>", "text/html");
  dataList.add("http://www.example.org","text/uri-list");
}

function drop_handler(ev) {
  console.log("Drop");
  ev.preventDefault();
  const data = ev.dataTransfer.items;
  // Loop through the dropped items and log their data
  for (let i = 0; i < data.length; i++) {
    if ((data[i].kind === 'string') && (data[i].type.match('^text/plain'))) {
      // This item is the target node
      data[i].getAsString((s) => {
        ev.target.appendChild(document.getElementById(s));
      });
    } else if ((data[i].kind === 'string') && (data[i].type.match('^text/html'))) {
      // Drag data item is HTML
      data[i].getAsString((s) => {
        console.log(`… Drop: HTML = ${s}`);
      });
    } else if ((data[i].kind === 'string') && (data[i].type.match('^text/uri-list'))) {
      // Drag data item is URI
      data[i].getAsString((s) => {
        console.log(`… Drop: URI = ${s}`);
      });
    }
  }
}

function dragover_handler(ev) {
  console.log("dragOver");
  ev.preventDefault();
  // Set the dropEffect to move
  ev.dataTransfer.dropEffect = "move"
}

function dragend_handler(ev) {
  console.log("dragEnd");
  const dataList = ev.dataTransfer.items;
  // Clear any remaining drag data
  dataList.clear();
}
```

### HTML

```html
<div>
  <p id="source" ondragstart="dragstart_handler(event);" ondragend="dragend_handler(event);" draggable="true">
     Select this element, drag it to the Drop Zone and then release the selection to move the element.</p>
</div>
<div id="target" ondrop="drop_handler(event);" ondragover="dragover_handler(event);">Drop Zone</div>
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

### Result

{{EmbedLiveSample('Examples', 100, 250)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
