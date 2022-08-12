---
title: TextDecoderStream()
slug: Web/API/TextDecoderStream/TextDecoderStream
page-type: web-api-constructor
tags:
  - API
  - Constructor
  - Reference
  - TextDecoderStream
browser-compat: api.TextDecoderStream.TextDecoderStream
---
{{APIRef("Encoding API")}}

The **`TextDecoderStream()`** constructor creates a new {{domxref("TextDecoderStream")}} object which is used to convert a stream of text in a binary encoding into strings.

## Syntax

```js
new TextDecoderStream(label)
new TextDecoderStream(label, options)
```

### Parameters

- `label`
  - : A string defaulting to `utf-8`. This may be [any valid label](/en-US/docs/Web/API/Encoding_API/Encodings).
- `options` {{optional_inline}}

  - : A `TextDecoderOptions` dictionary with the property:

    - `fatal`
      - : A boolean value indicating the error mode. If true then a {{domxref("DOMException")}} will be thrown if the decoder encounters an error. Defaults to `false`.

## Examples

The following example demonstrates how to decode binary data retrieved from a {{domxref("fetch()")}} call. The data will be interpreted as UTF-8, as no `label` has been passed.

```js
const response = await fetch("https://example.com");
const stream = response.body.pipeThrough(new TextDecoderStream());
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
