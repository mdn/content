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
{{APIRef("Bluetooth API")}}{{SeeCompatTable}}

The **BluetoothRemoteGATTServer.getPrimaryServices()** method returns a
promise to a list of primary {{domxref("BluetoothRemoteGATTService")}} objects offered by the
Bluetooth device for a specified `BluetoothServiceUUID`.

## Syntax

```js
getPrimaryServices(bluetoothServiceUUID)
```

### Return value

A {{jsxref("Promise")}} that resolves to a list of {{domxref("BluetoothRemoteGATTService")}}
objects.

### Parameters

- `bluetoothServiceUUID`
  - : A Bluetooth service universally unique identifier for a specified device.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

{{APIRef("Web Bluetooth")}}
