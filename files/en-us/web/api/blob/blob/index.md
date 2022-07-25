---
title: Blob()
slug: Web/API/Blob/Blob
page-type: web-api-constructor
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
new Blob(array)
new Blob(array, options)
```

### Parameters

- `array`
  - : An [iterable](/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol)
    object such as an {{jsxref("Array")}}, having {{jsxref("ArrayBuffer")}}s,
    {{jsxref("TypedArray")}}s, {{jsxref("DataView")}}s, {{domxref("Blob")}}s, strings,
    or a mix of any of such elements, that will be put inside the {{domxref("Blob")}}.
    Note that strings here are encoded as UTF-8, unlike the usual JavaScript UTF-16 strings.

- `options` {{optional_inline}}
  - : An object which may specify any of the following properties:
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

## Examples

```js
const array = ['<q id="a"><span id="b">hey!</span></q>']; // an array consisting of a single string
const blob = new Blob(array, {type : 'text/html'}); // the blob
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The deprecated {{domxref("BlobBuilder")}} interface which this constructor replaces.
