---
title: Device Memory API
slug: Web/API/Device_Memory_API
tags:
  - Device Memory API
---
{{DefaultAPISidebar("Device Memory API")}}{{securecontext_header}}{{SeeCompatTable}}

The capabilities of a client device largely depend on the amount of available RAM. Traditionally, developers had to use heuristics and either benchmark a device or infer device capabilities based on other factors like the device manufacturer or User Agent strings.

## Determining device memory

There are two ways to determine the approximate amount of RAM a device has: use the Device Memory JavaScript API or accept Client Hints.

### JavaScript API

You may query the approximate amount of RAM a device has by retrieving {{DOMxRef("Navigator.deviceMemory")}}

```js
var RAM = navigator.deviceMemory;
```

### Client Hints

You may also use the [Client Hints](/en-US/docs/Web/HTTP/Client_hints) HTTP Header with the `Device-Memory` directive to retrieve the same approximate RAM capacity.

## Specifications

| Specification                            | Status                               | Comment             |
| ---------------------------------------- | ------------------------------------ | ------------------- |
| {{SpecName("Device Memory")}} | {{Spec2("Device Memory")}} | Initial definition. |

## Browser compatibility

### JavaScript interface

{{Compat("api.Navigator.deviceMemory")}}

### Client Hints extension

{{Compat("http.headers.Device-Memory")}}

## See also

- {{DOMxRef("Navigator.deviceMemory")}}
- {{HTTPHeader("Device-Memory")}} header
