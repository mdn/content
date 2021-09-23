---
title: USBAlternateInterface
slug: Web/API/USBAlternateInterface
tags:
  - API
  - Experimental
  - Interface
  - NeedsExample
  - Reference
  - USBAlternateInterface
  - WebUSB
  - WebUSB API
browser-compat: api.USBAlternateInterface
---
{{draft}}{{securecontext_header}}{{APIRef("WebUSB API")}}

The `USBAlternateInterface` interface of the [WebUSB API](/en-US/docs/Web/API/WebUSB_API) provides information about a particular configuration of an interface provided by the USB device. An interface includes one or more alternate settings which can configure a set of endpoints based on the operating mode of the device.

## Constructor

- {{domxref("USBAlternateInterface.USBAlternateInterface")}}
  - : Creates a new `USBAlternateInterface` object which will be populated with information about the alternate interface of the provided `USBInterface` with the given alternate setting number.

## Properties

- {{domxref("USBAlternateInterface.alternateSetting")}}{{readonlyInline}}
  - : Returns the alternate setting number of this interface. This is equal to the `bAlternateSetting` field of the interface descriptor defining this interface.
- {{domxref("USBAlternateInterface.interfaceClass")}}{{readonlyInline}}
  - : Returns the class of this interface. This is equal to the `bInterfaceClass` field of the interface descriptor defining this interface. [Standardized values](https://www.usb.org/defined-class-codes) for this field are defined by the USB Implementers Forum. A value of `0xFF` indicates a vendor-defined interface.
- {{domxref("USBAlternateInterface.interfaceSubclass")}}{{readonlyInline}}
  - : Returns the subclass of this interface. This is equal to the `bInterfaceSubClass` field of the interface descriptor defining this interface. The meaning of this value depends on the `interfaceClass` field.
- {{domxref("USBAlternateInterface.interfaceProtocol")}}{{readonlyInline}}
  - : Returns the protocol supported by this interface. This is equal to the `bInterfaceProtocol` field of the interface descriptor defining this interface. The meaning of this value depends on the `interfaceClass` and `interfaceSubclass` fields.
- {{domxref("USBAlternateInterface.interfaceName")}}{{readonlyInline}}
  - : Returns the name of the interface, if one is provided by the device. This is the value of the string descriptor with the index specified by the `iInterface` field of the interface descriptor defining this interface.
- {{domxref("USBAlternateInterface.endpoints")}}{{readonlyInline}}
  - : Returns an array containing instances of the `USBEndpoint` interface describing each of the endpoints that are part of this interface.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
