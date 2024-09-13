---
title: "FileReader: readyState property"
short-title: readyState
slug: Web/API/FileReader/readyState
page-type: web-api-instance-property
browser-compat: api.FileReader.readyState
---

{{APIRef("File API")}}{{AvailableInWorkers}}

The **`readyState`** read-only property of the {{domxref("FileReader")}} interface provides the current state of the reading operation.
This will be one of the states: `EMPTY`, `LOADING`, or `DONE`.

## Value

A number which is one of the three possible state constants defined on the {{domxref("FileReader")}} interface:

- `FileReader.EMPTY` (0)
  - : Reader has been created, but none of the read methods have been called yet.
- `FileReader.LOADING` (1)
  - : A read method has been called. A {{domxref("File")}} or {{domxref("Blob")}} is being read, and no error has occurred yet.
- `FileReader.DONE` (2)
  - : The read operation is complete. This could mean that: the entire {{domxref("File")}} or {{domxref("Blob")}} has been read into memory, a file read error occurred, or {{domxref("FileReader.abort()", "abort()")}} was called and the read was cancelled.

## Examples

```js
const reader = new FileReader();
console.log("EMPTY", reader.readyState); // readyState will be 0

reader.readAsText(blob);
console.log("LOADING", reader.readyState); // readyState will be 1

reader.onloadend = () => {
  console.log("DONE", reader.readyState); // readyState will be 2
};
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Blob")}}
