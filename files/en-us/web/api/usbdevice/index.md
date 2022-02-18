---
title: USBDevice
slug: Web/API/USBDevice
tags:
  - API
  - Interface
  - Reference
  - USBDevice
  - WebUSB
  - WebUSB API
browser-compat: api.USBDevice
---
{{SeeCompatTable}}{{APIRef("WebUSB API")}}

The **`USBDevice`** interface of the [WebUSB API](/en-US/docs/Web/API/WebUSB_API) provides access to metadata about a paired USB device and methods for controlling it.

## Properties

- {{domxref("USBDevice.configuration")}} {{readonlyinline}}
  - : A {{domxref("USBConfiguration")}} object for the currently selected interface for a paired USB device.
- {{domxref("USBDevice.configurations")}} {{readonlyinline}}
  - : An {{jsxref("array")}} of device-specific interfaces for controlling a paired USB device.
- {{domxref("USBDevice.deviceClass")}} {{readonlyinline}}
  - : One of three properties that identify USB devices for the purpose of loading a USB driver that will work with that device. The other two properties are `USBDevice.deviceSubclass` and `USBDevice.deviceProtocol`.
- {{domxref("USBDevice.deviceProtocol")}} {{readonlyinline}}
  - : One of three properties that identify USB devices for the purpose of loading a USB driver that will work with that device. The other two properties are `USBDevice.deviceClass` and `USBDevice.deviceSubclass`.
- {{domxref("USBDevice.deviceSubclass")}} {{readonlyinline}}
  - : One of three properties that identify USB devices for the purpose of loading a USB driver that will work with that device. The other two properties are `USBDevice.deviceClass` and `USBDevice.deviceProtocol`.
- {{domxref("USBDevice.deviceVersionMajor")}} {{readonlyinline}}
  - : The major version number of the device in a semantic versioning scheme.
- {{domxref("USBDevice.deviceVersionMinor")}} {{readonlyinline}}
  - : The minor version number of the device in a semantic versioning scheme.
- {{domxref("USBDevice.deviceVersionSubminor")}} {{readonlyinline}}
  - : The patch version number of the device in a semantic versioning scheme.
- {{domxref("USBDevice.manufacturerName")}} {{readonlyinline}}
  - : The of the organization that manufactured the USB device.
- {{domxref("USBDevice.opened")}} {{readonlyinline}}
  - : Indicates whether a session has been started with a paired USB device.
- {{domxref("USBDevice.productId")}} {{readonlyinline}}
  - : The manufacturer-defined code that identifies a USB device.
- {{domxref("USBDevice.productName")}} {{readonlyinline}}
  - : The manufacturer-defined name that identifies a USB device.
- {{domxref("USBDevice.serialNumber")}} {{readonlyinline}}
  - : The manufacturer-defined serial number for the specific USB device.
- {{domxref("USBDevice.usbVersionMajor")}} {{readonlyinline}}
  - : One of three properties that declare the USB protocol version supported by the device. The other two properties are `USBDevice.usbVersionMinor` and `USBDevice.usbVersionSubminor`.
- {{domxref("USBDevice.usbVersionMinor")}} {{readonlyinline}}
  - : One of three properties that declare the USB protocol version supported by the device. The other two properties are `USBDevice.usbVersionMajor` and `USBDevice.usbVersionSubminor`.
- {{domxref("USBDevice.usbVersionSubminor")}} {{readonlyinline}}
  - : One of three properties that declare the USB protocol version supported by the device. The other two properties are `USBDevice.usbVersionMajor` and `USBDevice.usbVersionMinor`.
- {{domxref("USBDevice.vendorId")}} {{readonlyinline}}
  - : The official usg.org-assigned vendor ID.

## Methods

- {{domxref("USBDevice.claimInterface()")}}
  - : Returns a {{jsxref("Promise")}} that resolves when the requested interface is claimed for exclusive access.
- {{domxref("USBDevice.clearHalt()")}}
  - : Returns a {{jsxref("Promise")}} that resolves when a halt condition is cleared.
- {{domxref("USBDevice.controlTransferIn()")}}
  - : Returns a {{jsxref("Promise")}} that resolves with a {{domxref("USBInTransferResult")}} when a command or status operation has been transmitted to the USB device.
- {{domxref("USBDevice.controlTransferOut()")}}
  - : Returns a {{jsxref("Promise")}} that resolves with a {{domxref("USBOutTransferResult")}} when a command or status operation has been transmitted from the USB device.
- {{domxref("USBDevice.close()")}}
  - : Returns a {{jsxref("Promise")}} that resolves when all open interfaces are released and the device session has ended.
- {{domxref("USBDevice.isochronousTransferIn()")}}
  - : Returns a {{jsxref("Promise")}} that resolves with a {{domxref("USBIsochronousInTransferResult")}} when time sensitive information has been transmitted to the USB device.
- {{domxref("USBDevice.isochronousTransferOut()")}}
  - : Returns a {{jsxref("Promise")}} that resolves with a {{domxref("USBIsochronousOutTransferResult")}} when time sensitive information has been transmitted from the USB device.
- {{domxref("USBDevice.open()")}}
  - : Returns a {{jsxref("Promise")}} that resolves when a device session has started.
- {{domxref("USBDevice.releaseInterface()")}}
  - : Returns a {{jsxref("Promise")}} that resolves when a claimed interface is released from exclusive access.
- {{domxref("USBDevice.reset()")}}
  - : Returns a {{jsxref("Promise")}} that resolves when the device is reset and all app operations canceled and their promises rejected.
- {{domxref("USBDevice.selectAlternateInterface()")}}
  - : Returns a {{jsxref("Promise")}} that resolves when the specified alternative endpoint is selected.
- {{domxref("USBDevice.selectConfiguration()")}}
  - : Returns a {{jsxref("Promise")}} that resolves when the specified configuration is selected.
- {{domxref("USBDevice.transferIn()")}}
  - : Returns a {{jsxref("Promise")}} that resolves with a {{domxref("USBInTransferResult")}} when bulk or interrupt data is received from the USB device.
- {{domxref("USBDevice.transferOut()")}}
  - : Returns a {{jsxref("Promise")}} that resolves with a {{domxref("USBOutTransferResult")}} when bulk or interrupt data is sent to the USB device.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
