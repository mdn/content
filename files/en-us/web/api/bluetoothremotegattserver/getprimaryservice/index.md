---
title: BluetoothRemoteGATTServer.getPrimaryService()
slug: Web/API/BluetoothRemoteGATTServer/getPrimaryService
page-type: web-api-instance-method
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
{{APIRef("Bluetooth API")}}{{SeeCompatTable}}

The **`BluetoothRemoteGATTServer.getPrimaryService()`** method
returns a promise to the primary {{domxref("BluetoothRemoteGATTService")}} offered by the
Bluetooth device for a specified {{domxref("BluetoothServiceUUID")}}.

## Syntax

```js
getPrimaryService(bluetoothServiceUUID)
```

### Parameters

- `bluetoothServiceUUID`
  - : A Bluetooth service universally unique identifier for a specified device.

### Return value

A {{jsxref("Promise")}} that resolves to a {{domxref("BluetoothRemoteGATTService")}} object.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

{{APIRef("Web Bluetooth")}}
