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
          - : An unsigned long integer or string representing a Bluetooth service class ID. This can be a 16- or 32-bit UUID aliase, any valid UUID, or a valid name from a GATT assigned services key.
        - `usbVendorId` {{optional_inline}}
          - : An unsigned short integer that identifies a USB device vendor. The [USB Implementors Forum](https://www.usb.org/) assigns IDs to specific vendors.
        - `usbProductId` {{optional_inline}}
          - : An unsigned short integer that identifies a USB device. Each vendor assigns IDs to its products.
    - `allowedBluetoothServiceClassIds` {{optional_inline}}
      - : A list of unsigned long integers and/or strings representing Bluetooth service class IDs. Bluetooth ports with custom service class IDs are excluded from the list of ports presented to the user unless the service class ID is included in this list.

### Return value

A {{jsxref("Promise")}} that resolves with an instance of {{domxref("SerialPort")}}.

### Exceptions

- `SecurityError` {{domxref("DOMException")}}
  - : The returned `Promise` rejects with this error if:
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

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
