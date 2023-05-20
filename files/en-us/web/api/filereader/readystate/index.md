---
title: "FileReader: readyState property"
short-title: readyState
slug: Web/API/FileReader/readyState
page-type: web-api-instance-property
browser-compat: api.FileReader.readyState
---

{{APIRef("File API")}}

The {{domxref("FileReader")}} **`readyState`** property provides the current state of the reading operation a `FileReader` is in. A `FileReader` exists in one of the following states:

| Value | State     | Description                                                   |
| ----- | --------- | ------------------------------------------------------------- |
| `0`   | `EMPTY`   | Reader has been created. None of the read methods called yet. |
| `1`   | `LOADING` | A read method has been called.                                |
| `2`   | `DONE`    | The operation is complete.                                    |

- `EMPTY`
  - : The `FileReader` has been created, but no readAs method was called yet.
- `LOADING`
  - : A readAs method was invoked. A {{domxref("File")}} or {{domxref("Blob")}} is being read, and no error has occurred yet.
- `DONE`
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

## Value

A number which is one of the three possible state constants define for the {{domxref("FileReader")}} API.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Blob")}}
