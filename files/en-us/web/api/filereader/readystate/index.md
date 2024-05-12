---
title: "FileReader: readyState property"
short-title: readyState
slug: Web/API/FileReader/readyState
page-type: web-api-instance-property
browser-compat: api.FileReader.readyState
---

{{APIRef("File API")}}{{AvailableInWorkers}}

The **`readyState`** read-only property of the {{domxref("FileReader")}} interface provides the current state of the reading operation a `FileReader` is in. A `FileReader` exists in one of the following states:

| Value | State     | Description                                                   |
| ----- | --------- | ------------------------------------------------------------- |
| `0`   | `EMPTY`   | Reader has been created, but none of the read methods called yet. |
| `1`   | `LOADING` | A read method has been called. A {{domxref("File")}} or {{domxref("Blob")}} is being read, and no error has occurred yet. |
| `2`   | `DONE`    | The read operation is complete. This could mean that: the entire {{domxref("File")}} or {{domxref("Blob")}} has been read into memory, a file read error occurred, or {{domxref("FileReader.abort()", "abort()")}} was called and the read was cancelled. |

## Value

A number which is one of the three possible state constants define for the {{domxref("FileReader")}} API.

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
