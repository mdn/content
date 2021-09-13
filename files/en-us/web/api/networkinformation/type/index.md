---
title: NetworkInformation.type
slug: Web/API/NetworkInformation/type
tags:
  - API
  - Experimental
  - Network Information API
  - NetworkInformation
  - Property
  - Read-only
  - Reference
browser-compat: api.NetworkInformation.type
---
{{apiref("Network Information API")}}{{SeeCompatTable}}

The **`NetworkInformation.type`** read-only property returns
the type of connection a device is using to communicate with the network.

{{AvailableInWorkers}}

## Syntax

```js
var type = netInfo.type
```

### Return value

An enumerated value that is one of the following values:

- `"bluetooth"`
- `"cellular"`
- `"ethernet"`
- `"none`"
- `"wifi"`
- `"wimax"`
- `"other"`
- `"unknown"`

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
