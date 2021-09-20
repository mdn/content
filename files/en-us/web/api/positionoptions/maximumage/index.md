---
title: PositionOptions.maximumAge
slug: Web/API/PositionOptions/maximumAge
tags:
  - API
  - Geolocation API
  - NeedsExample
  - PositionOptions
  - Property
  - Secure context
browser-compat: api.PositionOptions.maximumAge
---
{{securecontext_header}}{{APIRef("Geolocation API")}}

The **`PositionOptions.maximumAge`** property is a positive
`long` value indicating the maximum age in milliseconds of a possible
cached position that is acceptable to return. If set to `0`, it means that
the device cannot use a cached position and must attempt to retrieve the real current
position. If set to
[`Infinity`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Infinity)
the device must return a cached position regardless of its age.

## Syntax

```js
positionOptions.maximumAge = timeLength
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using geolocation](/en-US/docs/Web/API/Geolocation_API)
- The {{domxref("PositionOptions")}} interface it belongs to.
