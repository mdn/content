---
title: PositionOptions.timeout
slug: Web/API/PositionOptions/timeout
tags:
  - API
  - Geolocation API
  - NeedsExample
  - PositionOptions
  - Property
  - Reference
  - Secure context
browser-compat: api.PositionOptions.timeout
---
{{securecontext_header}}{{APIRef("Geolocation API")}}

The **`PositionOptions.timeout`** property is a positive
`long` value representing the maximum length of time (in milliseconds) the
device is allowed to take in order to return a position. The default value is
[`Infinity`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Infinity),
meaning that `getCurrentPosition()` won't return until the position is
available.

## Syntax

```js
positionOptions.timeout = timeLength
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using geolocation](/en-US/docs/Web/API/Geolocation_API)
- The {{domxref("PositionOptions")}} interface it belongs to.
