---
title: USBInterface
slug: Web/API/USBInterface
page-type: web-api-interface
tags:
  - API
  - Experimental
  - Interface
  - NeedsExample
  - Reference
  - USBInterface
  - WebUSB
  - WebUSB API
browser-compat: api.USBInterface
---
{{securecontext_header}}{{APIRef("WebUSB API")}}{{SeeCompatTable}}

The `USBInterface` interface of the [WebUSB API](/en-US/docs/Web/API/WebUSB_API) provides information about an interface provided by the USB device. An interface represents a feature of the device which implements a particular protocol and may contain endpoints for bidirectional communication.

## Constructor

- {{domxref("USBInterface.USBInterface", "USBInterface()")}} {{Experimental_Inline}}
  - : Creates a new `USBInterface` object which will be populated with information about the interface on the provided `USBConfiguration` with the given interface number.

## Properties

- {{domxref("USBInterface.interfaceNumber")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Returns the interface number of this interface. This is equal to the `bInterfaceNumber` field of the interface descriptor defining this interface.
- {{domxref("USBInterface.alternate")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Returns the currently selected alternative configuration of this interface. By default this is the `USBAlternateInterface` from `alternates` with `alternateSetting` equal to `0`. It can be changed by calling `USBDevice.selectAlternateInterface()` with any other value found in `alternates`.
- {{domxref("USBInterface.alternates")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Returns an array containing instances of the `USBAlternateInterface` interface describing each of the alternative configurations possible for this interface.
- {{domxref("USBInterface.claimed")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Returns whether or not this interface has been claimed by the current page by calling `USBDevice.claimInterface()`.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
