---
title: DataTransferItem.type
slug: Web/API/DataTransferItem/type
page-type: web-api-instance-property
tags:
  - API
  - DataTransferItem
  - HTML DOM
  - HTML Drag and Drop API
  - Property
  - Reference
  - Type
  - drag and drop
browser-compat: api.DataTransferItem.type
---
{{APIRef("HTML Drag and Drop API")}}

The read-only **`DataTransferItem.type`** property returns the
type (format) of the {{domxref("DataTransferItem")}} object representing the drag data
item. The `type` is a Unicode string generally given by a MIME type, although
a MIME type is not required.

Some example types are: `text/plain` and `text/html`.

## Value

A string representing the drag data item's type.

## Examples

This example shows the use of the `type` property.

```js
function drop_handler(ev) {
 console.log("Drop");
 ev.preventDefault();
 const data = ev.dataTransfer.items;
 for (let i = 0; i < data.length; i += 1) {
   if ((data[i].kind === 'string') &&
       (data[i].type.match('^text/plain'))) {
     // This item is the target node
     data[i].getAsString((s) => {
       ev.target.appendChild(document.getElementById(s));
     });
   } else if ((data[i].kind === 'string') &&
              (data[i].type.match('^text/html'))) {
     // Drag data item is HTML
     console.log("… Drop: HTML");
   } else if ((data[i].kind === 'string') &&
              (data[i].type.match('^text/uri-list'))) {
     // Drag data item is URI
     console.log("… Drop: URI");
   } else if ((data[i].kind === 'file') &&
              (data[i].type.match('^image/'))) {
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

- {{domxref("DataTransfer.type()")}}
- [Incomplete list of MIME types](/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types)
