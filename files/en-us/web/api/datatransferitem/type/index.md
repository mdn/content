---
title: "DataTransferItem: type property"
short-title: type
slug: Web/API/DataTransferItem/type
page-type: web-api-instance-property
browser-compat: api.DataTransferItem.type
---

{{APIRef("HTML Drag and Drop API")}}

The read-only **`DataTransferItem.type`** property returns the type (format) of the {{domxref("DataTransferItem")}} object representing the drag data item.
The `type` is a Unicode string generally given by a MIME type, although a MIME type is not required.

Some example types are: `text/plain` and `text/html`.

## Value

A string representing the drag data item's type.

## Examples

This example shows the use of the `type` property.

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
    } else if (item.kind === "string" && item.type.match("^text/uri-list")) {
      // Drag data item is URI
      console.log("… Drop: URI");
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

- {{domxref("DataTransfer.types()")}}
- [List of common MIME types](/en-US/docs/Web/HTTP/Guides/MIME_types/Common_types)
