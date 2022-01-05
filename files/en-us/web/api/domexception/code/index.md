---
title: DOMException.code
slug: Web/API/DOMException/code
tags:
  - API
  - Code
  - DOMException
  - Property
  - Reference
browser-compat: api.DOMException.code
---
{{ APIRef("DOM") }}

The **`code`** read-only property of the
{{domxref("DOMException")}} interface returns a `short` that contains one of
the [error code constants](/en-US/docs/Web/API/DOMException#error_names), or
`0` if none match. This field is used for historical reasons. New DOM
exceptions don't use this anymore: they put this info in the
{{domxref("DOMException.name")}} attribute.

## Syntax

```js
var domExceptionCode = domExceptionInstance.code;
```

### Value

A short number.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
