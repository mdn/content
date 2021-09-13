---
title: Serial.requestPort()
slug: Web/API/Serial/requestPort
tags:
  - API
  - Method
  - Reference
  - requestPort
  - Serial
browser-compat: api.Serial.requestPort
---
{{securecontext_header}}{{DefaultAPISidebar("Serial API")}}

The **`Serial.requestPort()`** method of the {{domxref("Serial")}} interface returns a {{jsxref("Promise")}} that resolves with an instance of {{domxref("SerialPort")}} representing the device chosen by the user or rejects if no device was selected.

## Syntax

    var promise = Serial.requestPort([options]);

### Parameters

- options

  - : An object with the following properties:

    - `filters`

      - : A list of objects containing vendor and product IDs used to search for attached devices. The [USB Implementors Forum](https://www.usb.org/) assigns IDs to specific companies. Each company assigns IDS to it's products. Filters contain the following values:

        - `usbVendorId`: An unsigned short integer that identifies a USB device vendor.
        - `usbProductId`: An unsigned short integer that identifies a USB device.

### Return value

A {{jsxref("Promise")}} that resolves with an instance of {{domxref("SerialPort")}}.

### Exceptions

- {{domxref("DOMException")}} `"SecurityError"`
  - : The returned `Promise` rejects with this error if a [Feature Policy](/en-US/docs/Web/HTTP/Feature_Policy) restricts use of this API or a permission to use it has not granted via a user gesture.
- {{domxref("DOMException")}} `"AbortError"`
  - : The returned `Promise` rejects with this if the user does not select a port when prompted.

## Examples

The following example shows a filter being passed to `requestPort()` with a USB vendor ID in order to limit the set of devices shown to the user to only USB devices built by a particular manufacturer. If this filter was omitted the user would be able to select any available port.

```js
button.addEventListener('click', () => {
  const usbVendorId = ...;
  navigator.serial.requestPort({ filters: [{ usbVendorId }]}).then((port) => {
    // Connect to `port` or add it to the list of available ports.
  }).catch((e) => {
    // The user didn't select a port.
  });
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
