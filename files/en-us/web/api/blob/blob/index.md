---
title: Blob()
slug: Web/API/Blob/Blob
tags:
  - API
  - Blob
  - Constructor
  - File API
  - Reference
browser-compat: api.Blob.Blob
---
{{APIRef("File API")}}

The **`Blob()`** constructor returns a
new {{domxref("Blob")}} object. The content of the blob consists of the concatenation
of the values given in the parameter `array`.

## Syntax

```js
var newBlob = new Blob(array, options);
```

### Parameters

- `array`
  - : An {{jsxref("Array")}} of {{jsxref("ArrayBuffer")}}, {{domxref("ArrayBufferView")}},
    {{domxref("Blob")}}, {{domxref("USVString")}} objects, or a mix of any of such
    objects, that will be put inside the {{domxref("Blob")}}. `USVString`
    objects are encoded as UTF-8.
- `options` {{optional_inline}}

  - : An optional object of type {{domxref("BlobPropertyBag")}} which may specify any of
    the following properties:

    - `type` {{optional_inline}}
      - : The {{Glossary("MIME type")}} of the data that will be stored into the blob. The
        default value is the empty string, (`""`).
    - `endings` {{optional_inline}} {{non-standard_inline}}
      - : How to interpret newline characters (`\n`) within the contents, if
        the data is text. The default value, `transparent`, copies newline
        characters into the blob without changing them. To convert newlines to the host
        system's native convention, specify the value `native`.

### Return value

A new {{domxref("Blob")}} object containing the specified data.

## Example

```js
var aFileParts = ['<a id="a"><b id="b">hey!</b></a>']; // an array consisting of a single DOMString
var oMyBlob = new Blob(aFileParts, {type : 'text/html'}); // the blob
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The deprecated {{domxref("BlobBuilder")}} interface which this constructor replaces.
