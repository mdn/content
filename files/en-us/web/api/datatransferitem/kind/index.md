---
title: "DataTransferItem: kind property"
short-title: kind
slug: Web/API/DataTransferItem/kind
page-type: web-api-instance-property
browser-compat: api.DataTransferItem.kind
---

{{APIRef("HTML Drag and Drop API")}}

The read-only **`DataTransferItem.kind`** property returns the kind–a string or a file–of the {{domxref("DataTransferItem")}} object representing the _drag data item_.

## Value

A string representing the drag data item's kind.
It must be one of the following values:

- `'file'`
  - : If the drag data item is a file.
- `'string'`
  - : If the kind of drag data item is a _plain Unicode string_.

## Examples

This example shows the use of the `kind` property.

```js
function dropHandler(ev) {
  console.log("Drop");
  ev.preventDefault();
  for (const item of ev.dataTransfer.items) {
    if (item.kind === "string" && item.type.match("^text/plain")) {
      // This item is the target node
      item.getAsString((s) => {
        ev.target.appendChild(document.getElementById(s));
      });
    } else if (item.kind === "string" && item.type.match("^text/html")) {
      // Drag data item is HTML
      console.log("… Drop: HTML");
    } else if (item.kind === "file" && item.type.match("^image/")) {
      // Drag data item is an image file
      const f = item.getAsFile();
      console.log("… Drop: File");
    }
  }
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Drag and drop](/en-US/docs/Web/API/HTML_Drag_and_Drop_API)
- [Drag Operations](/en-US/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations)
- [Recommended Drag Types](/en-US/docs/Web/API/HTML_Drag_and_Drop_API/Recommended_drag_types)
- [DataTransfer test - Paste or Drag](https://codepen.io/tech_query/pen/MqGgap)
