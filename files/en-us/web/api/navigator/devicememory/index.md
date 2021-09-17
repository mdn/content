---
title: Navigator.deviceMemory
slug: Web/API/Navigator/deviceMemory
tags:
  - API
  - Device Memory API
  - Navigator
  - Property
  - Reference
  - deviceMemory
  - memory
browser-compat: api.Navigator.deviceMemory
---
{{APIRef("Device Memory")}}{{securecontext_header}}{{SeeCompatTable}}

The **`deviceMemory`** read-only
property of the {{domxref("Navigator")}} interface returns the approximate amount of
device memory in gigabytes.

The reported value is imprecise to curtail fingerprinting. It’s approximated by
rounding down to the nearest power of 2, then dividing that number by 1024. It is then
clamped within lower and upper bounds to protect the privacy of owners of very low- or
high-memory devices.

## Syntax

```js
memoryAmount = navigator.deviceMemory
```

### Value

A floating point number; one of `0.25`, `0.5`, `1`,
`2`, `4`, `8`.

## Example

```js
const memory = navigator.deviceMemory
console.log (`This device has at least ${memory}GiB of RAM.`)
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Device Memory API](/en-US/docs/Web/API/Device_Memory_API)
- {{HTTPHeader("Device-Memory")}} HTTP header
