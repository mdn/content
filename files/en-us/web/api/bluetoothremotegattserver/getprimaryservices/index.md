---
title: BluetoothRemoteGATTServer.getPrimaryServices()
slug: Web/API/BluetoothRemoteGATTServer/getPrimaryServices
tags:
  - API
  - Bluetooth
  - BluetoothRemoteGATTServer
  - Experimental
  - Method
  - Reference
  - Web Bluetooth API
  - getPrimaryServices()
browser-compat: api.BluetoothRemoteGATTServer.getPrimaryServices
---
{{SeeCompatTable}}

The **BluetoothRemoteGATTServer.getPrimaryServices()** method returns a
promise to a list of primary {{domxref("BluetoothRemoteGATTService")}} objects offered by the
bluetooth device for a specified `BluetoothServiceUUID`.

## Syntax

```js
BluetoothRemoteGATTServer.getPrimaryServices(bluetoothServiceUUID).then(function(bluetoothGATTServices) { /* ... */ })
```

### Returns

A {{jsxref("Promise")}} that resolves to a list of {{domxref("BluetoothRemoteGATTService")}}
objects.

### Parameters

- `BluetoothServiceUUID`
  - : A Bluetooth service universally unique identifier for a specified device.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

{{APIRef("Web Bluetooth")}}
