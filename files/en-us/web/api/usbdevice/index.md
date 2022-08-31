---
title: USBDevice
slug: Web/API/USBDevice
page-type: web-api-interface
tags:
  - API
  - Interface
  - Reference
  - USBDevice
  - WebUSB
  - WebUSB API
  - Experimental
browser-compat: api.USBDevice
---
{{SeeCompatTable}}{{APIRef("WebUSB API")}}

The **`USBDevice`** interface of the [WebUSB API](/en-US/docs/Web/API/WebUSB_API) provides access to metadata about a paired USB device and methods for controlling it.

## Properties

- {{domxref("USBDevice.configuration")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : A {{domxref("USBConfiguration")}} object for the currently selected interface for a paired USB device.
- {{domxref("USBDevice.configurations")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : An {{jsxref("array")}} of device-specific interfaces for controlling a paired USB device.
- {{domxref("USBDevice.deviceClass")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : One of three properties that identify USB devices for the purpose of loading a USB driver that will work with that device. The other two properties are `USBDevice.deviceSubclass` and `USBDevice.deviceProtocol`.
- {{domxref("USBDevice.deviceProtocol")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : One of three properties that identify USB devices for the purpose of loading a USB driver that will work with that device. The other two properties are `USBDevice.deviceClass` and `USBDevice.deviceSubclass`.
- {{domxref("USBDevice.deviceSubclass")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : One of three properties that identify USB devices for the purpose of loading a USB driver that will work with that device. The other two properties are `USBDevice.deviceClass` and `USBDevice.deviceProtocol`.
- {{domxref("USBDevice.deviceVersionMajor")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : The major version number of the device in a semantic versioning scheme.
- {{domxref("USBDevice.deviceVersionMinor")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : The minor version number of the device in a semantic versioning scheme.
- {{domxref("USBDevice.deviceVersionSubminor")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : The patch version number of the device in a semantic versioning scheme.
- {{domxref("USBDevice.manufacturerName")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : The of the organization that manufactured the USB device.
- {{domxref("USBDevice.opened")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Indicates whether a session has been started with a paired USB device.
- {{domxref("USBDevice.productId")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : The manufacturer-defined code that identifies a USB device.
- {{domxref("USBDevice.productName")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : The manufacturer-defined name that identifies a USB device.
- {{domxref("USBDevice.serialNumber")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : The manufacturer-defined serial number for the specific USB device.
- {{domxref("USBDevice.usbVersionMajor")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : One of three properties that declare the USB protocol version supported by the device. The other two properties are `USBDevice.usbVersionMinor` and `USBDevice.usbVersionSubminor`.
- {{domxref("USBDevice.usbVersionMinor")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : One of three properties that declare the USB protocol version supported by the device. The other two properties are `USBDevice.usbVersionMajor` and `USBDevice.usbVersionSubminor`.
- {{domxref("USBDevice.usbVersionSubminor")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : One of three properties that declare the USB protocol version supported by the device. The other two properties are `USBDevice.usbVersionMajor` and `USBDevice.usbVersionMinor`.
- {{domxref("USBDevice.vendorId")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : The official usg.org-assigned vendor ID.

## Methods

- {{domxref("USBDevice.claimInterface()")}} {{Experimental_Inline}}
  - : Returns a {{jsxref("Promise")}} that resolves when the requested interface is claimed for exclusive access.
- {{domxref("USBDevice.clearHalt()")}} {{Experimental_Inline}}
  - : Returns a {{jsxref("Promise")}} that resolves when a halt condition is cleared.
- {{domxref("USBDevice.controlTransferIn()")}} {{Experimental_Inline}}
  - : Returns a {{jsxref("Promise")}} that resolves with a {{domxref("USBInTransferResult")}} when a command or status operation has been transmitted to the USB device.
- {{domxref("USBDevice.controlTransferOut()")}} {{Experimental_Inline}}
  - : Returns a {{jsxref("Promise")}} that resolves with a {{domxref("USBOutTransferResult")}} when a command or status operation has been transmitted from the USB device.
- {{domxref("USBDevice.close()")}} {{Experimental_Inline}}
  - : Returns a {{jsxref("Promise")}} that resolves when all open interfaces are released and the device session has ended.
- {{domxref("USBDevice.isochronousTransferIn()")}} {{Experimental_Inline}}
  - : Returns a {{jsxref("Promise")}} that resolves with a {{domxref("USBIsochronousInTransferResult")}} when time sensitive information has been transmitted to the USB device.
- {{domxref("USBDevice.isochronousTransferOut()")}} {{Experimental_Inline}}
  - : Returns a {{jsxref("Promise")}} that resolves with a {{domxref("USBIsochronousOutTransferResult")}} when time sensitive information has been transmitted from the USB device.
- {{domxref("USBDevice.open()")}} {{Experimental_Inline}}
  - : Returns a {{jsxref("Promise")}} that resolves when a device session has started.
- {{domxref("USBDevice.releaseInterface()")}} {{Experimental_Inline}}
  - : Returns a {{jsxref("Promise")}} that resolves when a claimed interface is released from exclusive access.
- {{domxref("USBDevice.reset()")}} {{Experimental_Inline}}
  - : Returns a {{jsxref("Promise")}} that resolves when the device is reset and all app operations canceled and their promises rejected.
- {{domxref("USBDevice.selectAlternateInterface()")}} {{Experimental_Inline}}
  - : Returns a {{jsxref("Promise")}} that resolves when the specified alternative endpoint is selected.
- {{domxref("USBDevice.selectConfiguration()")}} {{Experimental_Inline}}
  - : Returns a {{jsxref("Promise")}} that resolves when the specified configuration is selected.
- {{domxref("USBDevice.transferIn()")}} {{Experimental_Inline}}
  - : Returns a {{jsxref("Promise")}} that resolves with a {{domxref("USBInTransferResult")}} when bulk or interrupt data is received from the USB device.
- {{domxref("USBDevice.transferOut()")}} {{Experimental_Inline}}
  - : Returns a {{jsxref("Promise")}} that resolves with a {{domxref("USBOutTransferResult")}} when bulk or interrupt data is sent to the USB device.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
