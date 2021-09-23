---
title: File()
slug: Web/API/File/File
tags:
  - API
  - Constructor
  - File API
  - Reference
browser-compat: api.File.File
---
{{APIRef("File")}}

The **`File()`** constructor creates a new {{domxref("File")}}
object instance.

## Syntax

```js
new File(bits, name[, options]);
```

### Parameters

- `bits`
  - : An {{jsxref("Array")}} of {{jsxref("ArrayBuffer")}}, {{domxref("ArrayBufferView")}},
    {{domxref("Blob")}}, {{domxref("USVString")}} objects, or a mix of any of such
    objects, that will be put inside the {{domxref("File")}}. `USVString`
    objects are encoded as UTF-8.
- `name`
  - : A {{domxref("USVString")}} representing the file name or the path to the file.
- `options` {{optional_inline}}

  - : An options object containing optional attributes for the file. Available options are
    as follows:

    - `type`: A {{domxref("DOMString")}} representing the MIME type of the
      content that will be put into the file. Defaults to a value of `"".`
    - `lastModified`: A number representing the number of milliseconds
      between the Unix time epoch and when the file was last modified. Defaults to a
      value of {{jsxref("Date.now()")}}.

## Example

```js
var file = new File(["foo"], "foo.txt", {
  type: "text/plain",
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("FileReader")}}
- {{domxref("Blob")}}
