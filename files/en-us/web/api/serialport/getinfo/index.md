---
title: "SerialPort: getInfo() method"
short-title: getInfo()
slug: Web/API/SerialPort/getInfo
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.SerialPort.getInfo
---

{{SecureContext_Header}}{{APIRef("Web Serial API")}}{{SeeCompatTable}}{{AvailableInWorkers("window_and_dedicated")}}

The **`getInfo()`** method of the {{domxref("SerialPort")}} interface returns an object containing identifying information for the device available via the port.

## Syntax

```js-nolint
getInfo()
```

### Parameters

None.

### Return value

An object containing the following properties:

- `usbVendorId`
  - : If the port is part of a USB device, this property is an unsigned short integer that identifies the device's vendor. If not, it is `undefined`.
- `usbProductId`
  - : If the port is part of a USB device, this property is an unsigned short integer that identifies the USB device. If not, it is `undefined`.
- `bluetoothServiceClassId` {{experimental_inline}}
  - : If the port is a Bluetooth RFCOMM service, this property is an unsigned long integer or string representing the device's Bluetooth service class ID. If not, it is `undefined`.

## Example

This snippet calls the {{domxref("Serial.requestPort()")}} method when a `<button>` is pressed. We pass a filter to `requestPort()` to filter for Arduino Uno USB devices. Once a port is requested, we call `getInfo()` to return the device's `usbProductId` and `usbVendorId`.

```html
<button id="connect">Connect</button>
```

```js
const connectBtn = document.getElementById("connect");

// Filter for devices with the Arduino Uno USB Vendor/Product IDs
const filters = [
  { usbVendorId: 0x2341, usbProductId: 0x0043 },
  { usbVendorId: 0x2341, usbProductId: 0x0001 }
];

connectBtn.addEventListener("click", () => {
  try {
    // Prompt the user to select an Arduino Uno device
    const port = await navigator.serial.requestPort({ filters });

    // Return the device's identifying info
    const { usbProductId, usbVendorId } = port.getInfo();
  } catch (e) {
    // The user didn't select a device
  }
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
