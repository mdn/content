---
title: "DataTransferItem: getAsString() method"
short-title: getAsString()
slug: Web/API/DataTransferItem/getAsString
page-type: web-api-instance-method
browser-compat: api.DataTransferItem.getAsString
---

{{APIRef("HTML Drag and Drop API")}}

The **`DataTransferItem.getAsString()`** method invokes the given callback with the drag data item's string data as the argument if the item's {{domxref("DataTransferItem.kind","kind")}} is a _Plain unicode string_ (i.e., `kind` is `string`).

## Syntax

```js-nolint
getAsString(callbackFn)
```

### Parameters

- `callbackFn`
  - : A callback function that receives following arguments:
    - `data`
      - : The {{domxref("DataTransferItem")}}'s string data.

### Return value

None ({{jsxref("undefined")}}).

## Examples

This example shows the use of the `getAsString()` method as an _inline function_ in a {{domxref("HTMLElement/drop_event", "drop")}} event handler.

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

- {{domxref("DataTransfer.getData()")}}
