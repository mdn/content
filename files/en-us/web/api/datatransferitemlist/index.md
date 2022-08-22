---
title: DataTransferItemList
slug: Web/API/DataTransferItemList
page-type: web-api-interface
tags:
  - API
  - DataTransferItemList
  - HTML DOM
  - HTML Drag and Drop API
  - Interface
  - Reference
  - drag and drop
browser-compat: api.DataTransferItemList
---
{{APIRef("HTML Drag and Drop API")}}

The **`DataTransferItemList`** object is a list of {{domxref("DataTransferItem")}} objects representing items being dragged. During a _drag operation_, each {{domxref("DragEvent")}} has a {{domxref("DragEvent.dataTransfer","dataTransfer")}} property and that property is a `DataTransferItemList`.

The individual items can be accessed using the [array operator](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#accessing_array_elements) `[]`.

This interface has no constructor.

## Properties

- {{domxref("DataTransferItemList.length")}} {{ReadOnlyInline}}
  - : An `unsigned long` that is the number of drag items in the list.

## Methods

- {{domxref("DataTransferItemList.add()")}}
  - : Adds an item (either a {{domxref("File")}} object or a string) to the drag item list and returns a {{domxref("DataTransferItem")}} object for the new item.
- {{domxref("DataTransferItemList.remove()")}}
  - : Removes the drag item from the list at the given index.
- {{domxref("DataTransferItemList.clear()")}}
  - : Removes all of the drag items from the list.
- {{domxref("DataTransferItemList.DataTransferItem()")}}
  - : Getter that returns a {{domxref("DataTransferItem")}} at the given index.

## Example

This example shows how to use drag and drop.

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

{{EmbedLiveSample('Example', '35%', '250px')}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
