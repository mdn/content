---
title: "Navigator: deviceMemory property"
short-title: deviceMemory
slug: Web/API/Navigator/deviceMemory
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.Navigator.deviceMemory
---

{{APIRef("Device Memory")}}{{securecontext_header}}{{SeeCompatTable}}

The **`deviceMemory`** read-only
property of the {{domxref("Navigator")}} interface returns the approximate amount of
device memory in gigabytes.

The reported value is imprecise to curtail [fingerprinting](/en-US/docs/Glossary/Fingerprinting). It's approximated by
rounding down to the nearest power of 2, then dividing that number by 1024. It is then
clamped within lower and upper bounds to protect the privacy of owners of very low- or
high-memory devices.

## Value

A floating point number; one of `0.25`, `0.5`, `1`,
`2`, `4`, `8`.

## Examples

```js
const memory = navigator.deviceMemory;
console.log(`This device has at least ${memory}GiB of RAM.`);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Device Memory API](/en-US/docs/Web/API/Device_Memory_API)
- {{HTTPHeader("Device-Memory")}} HTTP header
