---
title: "DataTransferItem: type property"
short-title: type
slug: Web/API/DataTransferItem/type
page-type: web-api-instance-property
browser-compat: api.DataTransferItem.type
---

{{APIRef("HTML Drag and Drop API")}}

The **`type`** read-only property of the {{domxref("DataTransferItem")}} interface returns the type (format) of the object representing the drag data item. The `type` is a Unicode string generally given by a MIME type, although a MIME type is not required.

The type is a _protocol_ that is expected to be understood by both the origin of the drag and the target of the drag, which may be the operating system, external applications, other webpages, or a webpage under your control. Some commonly used types and their semantics are introduced in [Working with the drag data store](/en-US/docs/Web/API/HTML_Drag_and_Drop_API/Drag_data_store#common_drag_data_types). When dragging files from the operating system, the MIME type is usually determined based on the extension without inspecting the file's contents. All browsers return an empty string when the MIME type cannot be determined, although the specification requires `application/octet-stream`.

During a drag operation, this property can be read in any drag event handler, even when the drag data store is in [protected mode](/en-US/docs/Web/API/HTML_Drag_and_Drop_API/Drag_data_store#protected_mode). The item's type remains accessible, but its data can only be read in the handlers for the {{domxref("HTMLElement/dragstart_event", "dragstart")}} and {{domxref("HTMLElement/drop_event", "drop")}} events. See [Reading the drag data store](/en-US/docs/Web/API/HTML_Drag_and_Drop_API/Drag_data_store#reading_the_drag_data_store) for details.

## Value

A string representing the drag data item's type.

## Examples

This example shows the use of the `type` property.

```js
function dropHandler(ev) {
  console.log("Drop");
  ev.preventDefault();
  for (const item of ev.dataTransfer.items) {
    if (item.kind === "string" && item.type === "text/plain") {
      // This item is the target node
      item.getAsString((s) => {
        ev.target.appendChild(document.getElementById(s));
      });
    } else if (item.kind === "string" && item.type === "text/html") {
      // Drag data item is HTML
      console.log("… Drop: HTML");
    } else if (item.kind === "string" && item.type === "text/uri-list") {
      // Drag data item is URI
      console.log("… Drop: URI");
    } else if (item.kind === "file" && item.type.startsWith("image/")) {
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
