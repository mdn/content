---
title: "DataTransferItem: kind property"
short-title: kind
slug: Web/API/DataTransferItem/kind
page-type: web-api-instance-property
browser-compat: api.DataTransferItem.kind
---

{{APIRef("HTML Drag and Drop API")}}

The read-only **`DataTransferItem.kind`** property returns a
{{domxref("DataTransferItem")}} representing the _drag data item_ kind: some text
or some file.

## Value

A string representing the drag data item's kind. It must be one of
the following values:

- `'file'`
  - : If the drag data item is a file.
- `'string'`
  - : If the kind of drag data item is a _plain Unicode string_.

## Examples

This example shows the use of the `kind` property.

```js
function drop_handler(ev) {
  console.log("Drop");
  ev.preventDefault();
  const data = event.dataTransfer.items;
  for (let i = 0; i < data.length; i += 1) {
    if (data[i].kind === "string" && data[i].type.match("^text/plain")) {
      // This item is the target node
      data[i].getAsString((s) => {
        ev.target.appendChild(document.getElementById(s));
      });
    } else if (data[i].kind === "string" && data[i].type.match("^text/html")) {
      // Drag data item is HTML
      console.log("… Drop: HTML");
    } else if (data[i].kind === "file" && data[i].type.match("^image/")) {
      // Drag data item is an image file
      const f = data[i].getAsFile();
      console.log("… Drop: File ");
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
