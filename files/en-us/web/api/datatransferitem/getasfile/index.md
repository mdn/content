---
title: "DataTransferItem: getAsFile() method"
short-title: getAsFile()
slug: Web/API/DataTransferItem/getAsFile
page-type: web-api-instance-method
browser-compat: api.DataTransferItem.getAsFile
---

{{APIRef("HTML Drag and Drop API")}}

If the item is a file, the **`DataTransferItem.getAsFile()`** method returns the drag data item's {{domxref("File")}} object.
If the item is not a file, this method returns `null`.

## Syntax

```js-nolint
getAsFile()
```

### Parameters

None.

### Return value

If the drag data item is a file, a {{domxref("File")}} object is returned; otherwise `null` is returned.

## Examples

This example shows the use of the `getAsFile()` method in a {{domxref("HTMLElement/drop_event", "drop")}} event handler.

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

- {{domxref("DataTransfer.files")}}
