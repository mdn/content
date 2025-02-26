---
title: "WorkerNavigator: deviceMemory property"
short-title: deviceMemory
slug: Web/API/WorkerNavigator/deviceMemory
page-type: web-api-instance-property
browser-compat: api.WorkerNavigator.deviceMemory
---

{{APIRef("Device Memory API")}}{{securecontext_header}}{{AvailableInWorkers("worker")}}

The **`deviceMemory`** read-only
property of the {{domxref("WorkerNavigator")}} interface returns the approximate amount of
device memory in gigabytes.

The reported value is imprecise to curtail {{glossary("fingerprinting")}}. It's approximated by
rounding down to the nearest power of 2, then dividing that number by 1024. It is then
clamped within lower and upper bounds to protect the privacy of owners of very low-memory or
high-memory devices.

## Value

A floating point number; one of `0.25`, `0.5`, `1`, `2`, `4`, `8`.

## Examples

The following code can be run in a worker:

```js
const memory = navigator.deviceMemory;
console.log(`This device has at least ${memory}GiB of RAM.`);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{HTTPHeader("Device-Memory")}} HTTP header
