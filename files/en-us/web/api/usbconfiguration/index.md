---
title: USBConfiguration
slug: Web/API/USBConfiguration
page-type: web-api-interface
tags:
  - API
  - Interface
  - Reference
  - USB
  - USBConfiguration
  - WebUSB
  - WebUSB API
  - Experimental
browser-compat: api.USBConfiguration
---
{{securecontext_header}}{{APIRef("WebUSB API")}}{{SeeCompatTable}}

The `USBConfiguration` interface of the [WebUSB API](/en-US/docs/Web/API/WebUSB_API) provides information about a particular configuration of a USB device and the interfaces that it supports.

## Constructor

- {{domxref("USBConfiguration.USBConfiguration", "USBConfiguration()")}} {{Experimental_Inline}}
  - : Creates a new `USBConfiguration` object which contains information about the configuration on the provided `USBDevice` with the given configuration value.

## Properties

- {{domxref("USBConfiguration.configurationValue")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Returns the configuration value of this configuration. This is equal to the [`bConfigurationValue`](https://www.beyondlogic.org/usbnutshell/usb5.shtml#ConfigurationDescriptors) field of the configuration descriptor provided by the device defining this configuration.
- {{domxref("USBConfiguration.configurationName")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Returns the name provided by the device to describe this configuration. This is equal to the value of the string descriptor with the index provided in the [`iConfiguration`](https://www.beyondlogic.org/usbnutshell/usb5.shtml#ConfigurationDescriptors) field of the configuration descriptor defining this configuration.
- {{domxref("USBConfiguration.interfaces")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Returns an array containing instances of the {{domxref('USBInterface')}} describing each interface supported by this configuration.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
