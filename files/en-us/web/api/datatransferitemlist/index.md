---
title: DataTransferItemList
slug: Web/API/DataTransferItemList
page-type: web-api-interface
browser-compat: api.DataTransferItemList
---

{{APIRef("HTML Drag and Drop API")}}

The **`DataTransferItemList`** object is a list of {{domxref("DataTransferItem")}} objects representing items being dragged. During a _drag operation_, each {{domxref("DragEvent")}} has a {{domxref("DragEvent.dataTransfer","dataTransfer")}} property and that property is a `DataTransferItemList`.

The individual items can be accessed using the [bracket notation](/en-US/docs/Web/JavaScript/Reference/Operators/Property_accessors#bracket_notation) `[]`.

`DataTransferItemList` was primarily designed for the [HTML Drag and Drop API](/en-US/docs/Web/API/HTML_Drag_and_Drop_API), and is still specified in the HTML drag-and-drop section, but it is now also used by other APIs, such as {{domxref("ClipboardEvent.clipboardData")}} and {{domxref("InputEvent.dataTransfer")}}. Documentation of `DataTransferItemList` will primarily discuss its usage in drag-and-drop operations, and you should refer to the other APIs' documentation for usage of `DataTransferItemList` in those contexts.

This interface has no constructor.

## Instance properties

- {{domxref("DataTransferItemList.length")}} {{ReadOnlyInline}}
  - : An `unsigned long` that is the number of drag items in the list.

## Instance methods

- {{domxref("DataTransferItemList.add()")}}
  - : Adds an item (either a {{domxref("File")}} object or a string) to the drag item list and returns a {{domxref("DataTransferItem")}} object for the new item.
- {{domxref("DataTransferItemList.remove()")}}
  - : Removes the drag item from the list at the given index.
- {{domxref("DataTransferItemList.clear()")}}
  - : Removes all of the drag items from the list.

## Example

This example shows how to use drag and drop.

### JavaScript

```js
function dragstartHandler(ev) {
  console.log("dragStart");

  // Add this element's id to the drag payload so the drop handler will
  // know which element to add to its tree
  const dataList = ev.dataTransfer.items;
  dataList.add(ev.target.id, "text/plain");

  // Add some other items to the drag payload
  dataList.add("<p>Paragraph…</p>", "text/html");
  dataList.add("http://www.example.org", "text/uri-list");
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

### Result

{{EmbedLiveSample('Example', '35%', '250px')}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
