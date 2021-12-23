---
title: DataTransferItem.getAsString()
slug: Web/API/DataTransferItem/getAsString
tags:
  - API
  - DataTransferItem
  - HTML DOM
  - HTML Drag and Drop API
  - Method
  - Reference
  - drag and drop
  - getAsString
browser-compat: api.DataTransferItem.getAsString
---
{{APIRef("HTML Drag and Drop API")}}

The **`DataTransferItem.getAsString()`** method invokes the
given callback with the drag data item's string data as the argument if the item's
{{domxref("DataTransferItem.kind","kind")}} is a _Plain unicode string_ (i.e.
`kind` is `string`).

## Syntax

```js
dataTransferItem.getAsString(callback);
```

### Parameters

- `callback`
  - : A callback function that has access to the {{domxref("DataTransferItem","data
    transfer item's")}} string data. See {{anch("Callback")}} below for details.

### Return value

{{jsxref("undefined")}}

## Callback

The callback parameter is a callback function which accepts one parameter:

- {{domxref("DOMString")}}
  - : The drag data item's string data.

The callback return value is `undefined`.

## Example

This example shows the use of the `getAsString()` method as an _inline
function_ in a {{event("drop")}} event handler.

```js
function drop_handler(ev) {
 console.log("Drop");
 ev.preventDefault();
 var data = ev.dataTransfer.items;
 for (var i = 0; i < data.length; i += 1) {
   if ((data[i].kind == 'string') &&
       (data[i].type.match('^text/plain'))) {
     // This item is the target node
     data[i].getAsString(function (s){
       ev.target.appendChild(document.getElementById(s));
     });
   } else if ((data[i].kind == 'string') &&
              (data[i].type.match('^text/html'))) {
     // Drag data item is HTML
     console.log("... Drop: HTML");
   } else if ((data[i].kind == 'string') &&
              (data[i].type.match('^text/uri-list'))) {
     // Drag data item is URI
     console.log("... Drop: URI");
   } else if ((data[i].kind == 'file') &&
              (data[i].type.match('^image/'))) {
     // Drag data item is an image file
     var f = data[i].getAsFile();
     console.log("... Drop: File ");
   }
 }
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("DataTransfer.getData()")}}
