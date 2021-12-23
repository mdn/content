---
title: DataTransferItem.kind
slug: Web/API/DataTransferItem/kind
tags:
  - API
  - DataTransferItem
  - HTML DOM
  - HTML Drag and Drop API
  - Property
  - Reference
  - drag and drop
  - kind
browser-compat: api.DataTransferItem.kind
---
{{APIRef("HTML Drag and Drop API")}}

The read-only **`DataTransferItem.kind`** property returns a
{{domxref("DataTransferItem")}} representing the _drag data item_ kind: some text
or some file.

## Syntax

```js
var itemKind = DataTransferItem.kind;
```

### Return value

A {{domxref("DOMString")}} representing the drag data item's kind. It must be one of
the following values:

- `'file'`
  - : If the drag data item is a file.
- `'string'`
  - : If the kind of drag data item is a _plain Unicode string_.

## Example

This example shows the use of the `kind` property.

```js
function drop_handler(ev) {
 console.log("Drop");
 ev.preventDefault();
 var data = event.dataTransfer.items;
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

- [Drag and drop](/en-US/docs/Web/API/HTML_Drag_and_Drop_API)
- [Drag Operations](/en-US/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations)
- [Recommended Drag Types](/en-US/docs/Web/API/HTML_Drag_and_Drop_API/Recommended_drag_types)
- [Dragging and Dropping Multiple Items](/en-US/docs/Web/API/HTML_Drag_and_Drop_API/Multiple_items)
- [DataTransfer test - Paste or Drag](https://codepen.io/tech_query/pen/MqGgap)
