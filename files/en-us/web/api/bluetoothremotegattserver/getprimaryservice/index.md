---
title: BluetoothRemoteGATTServer.getPrimaryService()
slug: Web/API/BluetoothRemoteGATTServer/getPrimaryService
tags:
  - API
  - Bluetooth
  - BluetoothRemoteGATTServer
  - Experimental
  - Method
  - Reference
  - Web Bluetooth API
  - getPrimaryService()
browser-compat: api.BluetoothRemoteGATTServer.getPrimaryService
---
{{SeeCompatTable}}

The **`BluetoothRemoteGATTServer.getPrimaryService()`** method
returns a promise to the primary {{domxref("BluetoothRemoteGATTService")}} offered by the
bluetooth device for a specified {{domxref("BluetoothServiceUUID")}}.

## Syntax

```js
BluetoothRemoteGATTServer.getPrimaryService(bluetoothServiceUUID).then(function(bluetoothGATTService) { /* ... */ })
```

### Returns

A {{jsxref("Promise")}} that resolves to a {{domxref("BluetoothRemoteGATTService")}} object.

### Parameters

- `BluetoothServiceUUID`
  - : A Bluetooth service universally unique identifier for a specified device.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

{{APIRef("Web Bluetooth")}}
