---
title: "BluetoothRemoteGATTCharacteristic: getDescriptor() method"
short-title: getDescriptor()
slug: Web/API/BluetoothRemoteGATTCharacteristic/getDescriptor
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.BluetoothRemoteGATTCharacteristic.getDescriptor
---

{{APIRef("Bluetooth API")}}{{SeeCompatTable}}

The **`BluetoothRemoteGATTCharacteristic.getDescriptor()`** method
returns a {{jsxref("Promise")}} that resolves to the
first {{domxref("BluetoothRemoteGATTDescriptor")}} for a given descriptor UUID.

## Syntax

```js-nolint
getDescriptor(bluetoothDescriptorUUID)
```

### Parameters

None.

### Return value

A {{jsxref("Promise")}} that resolves to the
first {{domxref("BluetoothRemoteGATTDescriptor")}}.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

{{APIRef("Web Bluetooth")}}
