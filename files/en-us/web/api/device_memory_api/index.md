---
title: Device Memory API
slug: Web/API/Device_Memory_API
page-type: web-api-overview
browser-compat:
  - api.Navigator.deviceMemory
  - api.WorkerNavigator.deviceMemory
  - http.headers.Device-Memory
spec-urls: https://www.w3.org/TR/device-memory/
---

{{DefaultAPISidebar("Device Memory API")}}{{securecontext_header}}{{AvailableInWorkers}}

The capabilities of a client device largely depend on the amount of available RAM. Traditionally, developers had to use heuristics and either benchmark a device or infer device capabilities based on other factors like the device manufacturer or User Agent strings.

## Determining device memory

There are two ways to determine the approximate amount of RAM a device has: use the Device Memory JavaScript API or accept Client Hints.

### JavaScript API

You may query the approximate amount of RAM a device has by retrieving {{DOMxRef("Navigator.deviceMemory")}} or {{DOMxRef("WorkerNavigator.deviceMemory")}}.

```js
const RAM = navigator.deviceMemory;
```

### Client Hints

You may also use the [Client Hints](/en-US/docs/Web/HTTP/Client_hints) HTTP Header with the `Device-Memory` directive to retrieve the same approximate RAM capacity.

## Interfaces

### Extensions to other interfaces

- {{domxref("Navigator.deviceMemory")}} {{ReadOnlyInline}}
  - : Returns the approximate amount of device memory in gigabytes.
- {{domxref("WorkerNavigator.deviceMemory")}} {{ReadOnlyInline}}
  - : Returns the approximate amount of device memory in gigabytes.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{HTTPHeader("Device-Memory")}} header
