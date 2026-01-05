---
title: "DataTransferItemList: add() method"
short-title: add()
slug: Web/API/DataTransferItemList/add
page-type: web-api-instance-method
browser-compat: api.DataTransferItemList.add
---

{{APIRef("HTML Drag and Drop API")}}

The **`DataTransferItemList.add()`** method creates a new
{{domxref("DataTransferItem")}} using the specified data and adds it to the drag data
list. The item may be a {{domxref("File")}} or a string of a
given type. If the item is successfully added to the list, the newly-created
{{domxref("DataTransferItem")}} object is returned.

## Syntax

```js-nolint
add(data, type)
add(file)
```

### Parameters

- `data`
  - : A string representing the drag item's data.
- `type`
  - : A string of the drag item's type. Some example types are
    `text/html` and `text/plain`.
- `file`
  - : A {{domxref("File")}} object. No type needs to be given in this case.

### Return value

A {{domxref("DataTransferItem")}} containing the specified data. If the drag item
couldn't be created (for example, if the associated {{domxref("DataTransfer")}} object
has no data store), `null` is returned.

### Exceptions

- `NotSupportedError` {{domxref("DOMException")}}
  - : Thrown if the string `data` parameter was provided, and the list already contains an
    item whose {{domxref("DataTransferItem.kind","kind")}} is `"Plain Unicode string"` and
    whose type is equal to the specified type parameter.

## Examples

This example shows the use of the `add()` method.

### HTML

```html
<div>
  <p id="source" draggable="true">
    Select this element, drag it to the Drop Zone and then release the selection
    to move the element.
  </p>
</div>
<div id="target">Drop Zone</div>
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
const source = document.getElementById("source");
const target = document.getElementById("target");

source.addEventListener("dragstart", (ev) => {
  console.log("dragStart");
  // Add this element's id to the drag payload so the drop handler will
  // know which element to add to its tree
  const dataList = ev.dataTransfer.items;
  dataList.add(ev.target.id, "text/plain");
  // Add some other items to the drag payload
  dataList.add("<p>Paragraph…</p>", "text/html");
  dataList.add("http://www.example.org", "text/uri-list");
});

source.addEventListener("dragend", (ev) => {
  console.log("dragEnd");
  const dataList = ev.dataTransfer.items;
  for (let i = 0; i < dataList.length; i++) {
    dataList.remove(i);
  }
  // Clear any remaining drag data
  dataList.clear();
});

target.addEventListener("drop", (ev) => {
  console.log("Drop");
  ev.preventDefault();
  // Loop through the dropped items and log their data
  for (const item of event.dataTransfer.items) {
    if (item.kind === "string" && item.type.match("^text/plain")) {
      // This item is the target node
      item.getAsString((s) => {
        ev.target.appendChild(document.getElementById(s));
      });
    } else if (item.kind === "string" && item.type.match("^text/html")) {
      // Drag data item is HTML
      item.getAsString((s) => {
        console.log(`… Drop: HTML = ${s}`);
      });
    } else if (item.kind === "string" && item.type.match("^text/uri-list")) {
      // Drag data item is URI
      item.getAsString((s) => {
        console.log(`… Drop: URI = ${s}`);
      });
    }
  }
});

target.addEventListener("dragover", (ev) => {
  console.log("dragOver");
  ev.preventDefault();
  // Set the dropEffect to move
  ev.dataTransfer.dropEffect = "move";
});
```

### Result

{{EmbedLiveSample('Examples', 400, 300)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
