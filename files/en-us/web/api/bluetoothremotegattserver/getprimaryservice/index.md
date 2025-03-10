---
title: "BluetoothRemoteGATTServer: getPrimaryService() method"
short-title: getPrimaryService()
slug: Web/API/BluetoothRemoteGATTServer/getPrimaryService
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.BluetoothRemoteGATTServer.getPrimaryService
---

{{APIRef("Bluetooth API")}}{{SeeCompatTable}}{{SecureContext_Header}}

The **`BluetoothRemoteGATTServer.getPrimaryService()`** method
returns a promise to the primary {{domxref("BluetoothRemoteGATTService")}} offered by the
Bluetooth device for a specified bluetooth service UUID.

## Syntax

```js-nolint
getPrimaryService(bluetoothServiceUUID)
```

### Parameters

- `bluetoothServiceUUID`
  - : A Bluetooth service universally unique identifier for a specified device, that is either a 128-bit UUID, a 16-bit or 32-bit UUID alias, or a string from the list of [GATT assigned services](https://github.com/WebBluetoothCG/registries/blob/master/gatt_assigned_services.txt) keys.

### Return value

A {{jsxref("Promise")}} that resolves to a {{domxref("BluetoothRemoteGATTService")}} object.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
