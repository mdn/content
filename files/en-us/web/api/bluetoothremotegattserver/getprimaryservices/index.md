---
title: "BluetoothRemoteGATTServer: getPrimaryServices() method"
short-title: getPrimaryServices()
slug: Web/API/BluetoothRemoteGATTServer/getPrimaryServices
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.BluetoothRemoteGATTServer.getPrimaryServices
---

{{APIRef("Bluetooth API")}}{{SeeCompatTable}}

The **BluetoothRemoteGATTServer.getPrimaryServices()** method returns a
promise to a list of primary {{domxref("BluetoothRemoteGATTService")}} objects offered by the
Bluetooth device for a specified `BluetoothServiceUUID`.

## Syntax

```js-nolint
getPrimaryServices(bluetoothServiceUUID)
```

### Parameters

- `bluetoothServiceUUID`
  - : A Bluetooth service universally unique identifier for a specified device.

### Return value

A {{jsxref("Promise")}} that resolves to a list of {{domxref("BluetoothRemoteGATTService")}}
objects.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

{{APIRef("Web Bluetooth")}}
