---
title: DataTransferItem.getAsFile()
slug: Web/API/DataTransferItem/getAsFile
page-type: web-api-instance-method
tags:
  - API
  - DataTransferItem
  - HTML DOM
  - HTML Drag and Drop API
  - Method
  - Reference
  - drag and drop
browser-compat: api.DataTransferItem.getAsFile
---
{{APIRef("HTML Drag and Drop API")}}

If the item is a file, the **`DataTransferItem.getAsFile()`**
method returns the drag data item's {{domxref("File")}} object. If the item is not a
file, this method returns `null`.

## Syntax

```js
getAsFile()
```

### Parameters

None.

### Return value

- {{domxref("File")}}
  - : If the drag data item is a file, a {{domxref("File")}} object is returned; otherwise
    `null` is returned.

## Examples

This example shows the use of the `getAsFile()` method in a
{{domxref("HTMLElement/drop_event", "drop")}} event handler.

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

- {{domxref("DataTransfer.files")}}
