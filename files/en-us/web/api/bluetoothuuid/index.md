---
title: BluetoothUUID
slug: Web/API/BluetoothUUID
page-type: web-api-interface
browser-compat: api.BluetoothUUID
---

{{APIRef("Bluetooth API")}}

The **`BluetoothUUID`** interface of the [Web Bluetooth API](/en-US/docs/Web/API/Web_Bluetooth_API) provides a way to look up Universally Unique Identifier (UUID) values by name in the
[registry](https://www.bluetooth.com/specifications/assigned-numbers/) maintained by the Bluetooth SIG.

## Description

A UUID string is a 128-bit UUID, for example `00001818-0000-1000-8000-00805f9b34fb`.
The Bluetooth registry contains lists of descriptors, services, and characteristics identified by these UUIDs in addition to a 16- or 32- bit alias, and a name.

The `BluetoothUUID` interface provides methods to retrieve these 128-bit UUIDs.

## Static methods

- [`BluetoothUUID.canonicalUUID()`](/en-US/docs/Web/API/BluetoothUUID/canonicalUUID_static) {{Experimental_Inline}}
  - : Returns the 128-bit UUID when passed the 16- or 32-bit UUID alias.
- [`BluetoothUUID.getCharacteristic()`](/en-US/docs/Web/API/BluetoothUUID/getCharacteristic_static) {{Experimental_Inline}}
  - : Returns the 128-bit UUID representing a registered characteristic when passed a name or the 16- or 32-bit UUID alias.
- [`BluetoothUUID.getDescriptor()`](/en-US/docs/Web/API/BluetoothUUID/getDescriptor_static) {{Experimental_Inline}}
  - : Returns a UUID representing a registered descriptor when passed a name or the 16- or 32-bit UUID alias.
- [`BluetoothUUID.getService()`](/en-US/docs/Web/API/BluetoothUUID/getService_static) {{Experimental_Inline}}
  - : Returns a UUID representing a registered service when passed a name or the 16- or 32-bit UUID alias.

## Examples

In the following example the UUID representing the service named `device_information` is returned and printed to the console.

```js
let result = BluetoothUUID.getService("device_information");
console.log(result); // "0000180a-0000-1000-8000-00805f9b34fb"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
