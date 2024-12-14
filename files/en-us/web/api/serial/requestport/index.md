---
title: "Serial: requestPort() method"
short-title: requestPort()
slug: Web/API/Serial/requestPort
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.Serial.requestPort
---

{{APIRef("Web Serial API")}}{{SecureContext_Header}}{{SeeCompatTable}}

The **`Serial.requestPort()`** method of the {{domxref("Serial")}} interface presents the user with a dialog asking them to select a serial device to connect to. It returns a {{jsxref("Promise")}} that resolves with an instance of {{domxref("SerialPort")}} representing the device chosen by the user.

## Description

When the user first visits a site it will not have permission to access any serial devices. A site must first call `requestPort()` to prompt the user to select which device the site should be allowed to control.

This method must be called via [transient activation](/en-US/docs/Glossary/Transient_activation). The user has to interact with the page or a UI element in order for this feature to work.

## Syntax

```js-nolint
requestPort()
requestPort(options)
```

### Parameters

- `options` {{optional_inline}}

  - : An object with the following properties:

    - `filters` {{optional_inline}}
      - : A list of objects containing vendor, product, or Bluetooth service class IDs used to filter the specific device types made available for the user to request a connection to. If no filters are specified, the user is presented with a list of every available device to choose from. Filters can contain the following values:
        - `bluetoothServiceClassId` {{optional_inline}}
          - : An unsigned long integer or string representing a Bluetooth service class ID. This can be a 16- or 32-bit UUID alias, any valid UUID, or a valid name from a [GATT assigned services key](https://github.com/WebBluetoothCG/registries/blob/master/gatt_assigned_services.txt).
        - `usbVendorId` {{optional_inline}}
          - : An unsigned short integer that identifies a USB device vendor. The [USB Implementors Forum](https://www.usb.org/) assigns IDs to specific vendors.
        - `usbProductId` {{optional_inline}}
          - : An unsigned short integer that identifies a USB device. Each vendor assigns IDs to its products.
    - `allowedBluetoothServiceClassIds` {{optional_inline}}
      - : A list of unsigned long integers and/or strings representing Bluetooth service class IDs. Bluetooth ports with custom service class IDs are excluded from the list of ports presented to the user unless the service class ID is included in this list. This is true whether you filter the list or not.

### Return value

A {{jsxref("Promise")}} that resolves with an instance of {{domxref("SerialPort")}}.

### Exceptions

- `SecurityError` {{domxref("DOMException")}}
  - : The returned `Promise` rejects with this error in either of the following situations:
    - A {{httpheader('Permissions-Policy/serial','serial')}} [Permissions Policy](/en-US/docs/Web/HTTP/Permissions_Policy) blocks the use of this feature.
    - A user permission prompt was denied.
- `NotFoundError` {{domxref("DOMException")}}
  - : The returned `Promise` rejects with this exception if the user does not select a port when prompted.

## Examples

### Allow the user to select any device

This example prompts the user to select a device via `requestPort()` when a `<button>` is pressed. It does not include a filter, which means that the selection list will include all available devices:

```html
<button id="connect">Connect</button>
```

```js
const connectBtn = document.getElementById("connect");
connectBtn.addEventListener("click", () => {
  try {
    const port = await navigator.serial.requestPort();
    // Connect to port or add it to the list of available ports
  } catch (e) {
    // The user didn't select a device
  }
});
```

### Allow the user to select a specific vendor's device

In this case, a filter is passed to `requestPort()` with a USB vendor ID to limit the set of devices shown to the user to only USB devices built by a particular manufacturer.

```js
connectBtn.addEventListener("click", () => {
  const usbVendorId = 0xabcd;
  try {
    const port = await navigator.serial.requestPort({ filters: [{ usbVendorId }] });
    // Connect to port or add it to the list of available ports
  } catch (e) {
    // The user didn't select a device
  }
});
```

### Allow the user to select custom RFCOMM-based services

Although most devices expose SPP-based communication through the standardized Bluetooth Classic Serial Port Profile, some use custom radio frequency communication (RFCOMM) based services. These devices have a Service Class ID that is not in the standard Bluetooth UUID range.

You need to pass the `allowedBluetoothServiceClassIds` list to `requestPort()` to access these custom RFCOMM-based services:

```js
const myBluetoothServiceUuid = "01234567-89ab-cdef-0123-456789abcdef";

// Prompt user to select any serial port
// Access to the custom Bluetooth RFCOMM service above will be allowed
const port = await navigator.serial.requestPort({
  allowedBluetoothServiceClassIds: [myBluetoothServiceUuid],
});
```

You can also use the `bluetoothServiceClassId` filter key when calling `requestPort()` to prompt the user with a list of filtered Bluetooth serial ports identified by Service Class IDs:

```js
const myBluetoothServiceUuid = "01234567-89ab-cdef-0123-456789abcdef";

// Prompt the user to select Bluetooth serial ports with
// the custom Bluetooth RFCOMM service above.
const port = await navigator.serial.requestPort({
  allowedBluetoothServiceClassIds: [myBluetoothServiceUuid],
  filters: [{ bluetoothServiceClassId: myBluetoothServiceUuid }],
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
