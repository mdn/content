---
title: TextEncoder()
slug: Web/API/TextEncoder/TextEncoder
tags:
  - API
  - Constructor
  - Encoding
  - Reference
  - TextEncoder
browser-compat: api.TextEncoder.TextEncoder
---
{{APIRef("Encoding API")}}

The **`TextEncoder()`** constructor returns a newly created
utf-8 {{DOMxRef("TextEncoder")}} object.

## Syntax

```js
encoder = new TextEncoder();
```

### Parameters

- `TextEncoder()` takes no parameters since Firefox 48 and Chrome 53

> **Note:** Prior to Firefox 48 and Chrome 53, an encoding type label was
> accepted as a paramer to the `TextEncoder` object, since then both browsers
> have removed support for any encoder type other than `utf-8`, to match the
> [spec](https://www.w3.org/TR/encoding/#dom-textencoder). Any type label
> passed into the `TextEncoder` constructor will now be ignored and a
> `utf-8` `TextEncoder` will be created.

### Exceptions

- `TextEncoder()` throws no exceptions since Firefox 48 and Chrome 53

> **Note:** Prior to Firefox 48 and Chrome 53 an exception would be thrown
> for an unknown encoding type.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The {{DOMxRef("TextEncoder")}} interface it belongs to.
