---
title: "Navigator: deviceMemory property"
short-title: deviceMemory
slug: Web/API/Navigator/deviceMemory
page-type: web-api-instance-property
browser-compat: api.Navigator.deviceMemory
---

{{APIRef("Device Memory API")}}{{securecontext_header}}

The **`deviceMemory`** read-only
property of the {{domxref("Navigator")}} interface returns the approximate amount of
device memory in gigabytes.

The reported value is imprecise to curtail {{glossary("fingerprinting")}}. It's approximated by
rounding to the nearest power of 2, then dividing that number by 1024. It is then
clamped within lower and upper bounds to protect the privacy of owners of very low-memory or
high-memory devices. Browsers may update these bounds over time (see [browser compatibility table](#browser_compatibility)).

## Value

A floating point number coarsened to a power of two value, clamped to implement-defined limits.

For example, if a browser does not report below `2` or above `32` then the value is one of: `2`, `4`, `8`, `16`, `32`.

## Examples

```js
const memory = navigator.deviceMemory;
console.log(`This device approximately ${memory}GiB of RAM.`);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{HTTPHeader("Sec-CH-Device-Memory")}} HTTP header
