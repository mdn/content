---
title: "Bluetooth: requestDevice() method"
short-title: requestDevice()
slug: Web/API/Bluetooth/requestDevice
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.Bluetooth.requestDevice
---

{{APIRef("Bluetooth API")}} {{securecontext_header}}{{SeeCompatTable}}

The **`Bluetooth.requestDevice()`** method of the
{{domxref("Bluetooth")}} interface returns a {{jsxref("Promise")}} to a
{{domxref("BluetoothDevice")}} object with the specified options. If there is no chooser
UI, this method returns the first device matching the criteria.

## Syntax

```js-nolint
requestDevice()
requestDevice(options)
```

### Parameters

- `options` {{optional_inline}}
  - : An object that sets options for the device request. The available options are:
    - `filters[]`
      - : An array of `BluetoothScanFilters`. This
        filter consists of an array of `BluetoothServiceUUID`s, a
        `name` parameter, and a `namePrefix` parameter.
    - `optionalServices[]`
      - : An array of `BluetoothServiceUUID`s.
    - `acceptAllDevices`
      - : A boolean value indicating that the
        requesting script can accept all Bluetooth devices. The default is
        `false`.

### Return value

A {{jsxref("Promise")}} to a {{domxref("BluetoothDevice")}} object.

### Exceptions

- {{jsxref("TypeError")}}
  - : Thrown if the provided `options` do not make sense. For example,
    `options.filters` is present and `options.acceptAllDevices` is
    `true`, or if `options.filters` is not present and
    `options.acceptAllDevices` is `false`. Or
    `options.filters` is `[]`.
- `NotFoundError` {{domxref("DOMException")}}
  - : Thrown if there is no Bluetooth device that matches the specified options.
- `SecurityError` {{domxref("DOMException")}}
  - : Thrown if this operation is not permitted in this context due to security concerns. For
    example, it is called from insecure origin.

## Examples

```js
// Discovery options match any devices advertising:
// . The standard heart rate service.
// . Both 16-bit service IDs 0x1802 and 0x1803.
// . A proprietary 128-bit UUID service c48e6067-5295-48d3-8d5c-0395f61792b1.
// . Devices with name "ExampleName".
// . Devices with name starting with "Prefix".
//
// And enables access to the battery service if devices
// include it, even if devices do not advertise that service.
let options = {
  filters: [
    { services: ["heart_rate"] },
    { services: [0x1802, 0x1803] },
    { services: ["c48e6067-5295-48d3-8d5c-0395f61792b1"] },
    { name: "ExampleName" },
    { namePrefix: "Prefix" },
  ],
  optionalServices: ["battery_service"],
};

navigator.bluetooth
  .requestDevice(options)
  .then((device) => {
    console.log(`Name: ${device.name}`);
    // Do something with the device.
  })
  .catch((error) => console.error(`Something went wrong. ${error}`));
```

[Detailed examples](https://webbluetoothcg.github.io/web-bluetooth/#example-filter-by-services) are in the specification.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
