---
title: "BluetoothRemoteGATTCharacteristic: getDescriptors() method"
short-title: getDescriptors()
slug: Web/API/BluetoothRemoteGATTCharacteristic/getDescriptors
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.BluetoothRemoteGATTCharacteristic.getDescriptors
---

{{APIRef("Bluetooth API")}}{{SeeCompatTable}}{{SecureContext_Header}}

The **`BluetoothRemoteGATTCharacteristic.getDescriptors()`** method
returns a {{jsxref("Promise")}} that resolves to an {{jsxref("Array")}} of all
{{domxref("BluetoothRemoteGATTDescriptor")}} objects for a given descriptor UUID.

## Syntax

```js-nolint
getDescriptors(bluetoothDescriptorUUID)
```

### Parameters

None.

### Return value

A {{jsxref("Promise")}} that resolves to an {{jsxref("Array")}}
of {{domxref("BluetoothRemoteGATTDescriptor")}} objects.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
