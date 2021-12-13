---
title: BluetoothRemoteGATTServer.connect()
slug: Web/API/BluetoothRemoteGATTServer/connect
tags:
  - API
  - Bluetooth
  - BluetoothRemoteGATTServer
  - Experimental
  - Method
  - Reference
  - Web Bluetooth API
  - connect()
browser-compat: api.BluetoothRemoteGATTServer.connect
---
{{SeeCompatTable}}

The
**`BluetoothRemoteGATTServer.connect()`** method causes the
script execution environment to connect to `this.device`.

## Syntax

```js
BluetoothRemoteGATTServer.connect()
  .then(function(bluetoothRemoteGATTServer) { /* ... */ })
```

### Returns

A {{jsxref("Promise")}} that resolves to a {{domxref("BluetoothRemoteGATTServer")}}.

### Parameters

None.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

{{APIRef("Web Bluetooth")}}
