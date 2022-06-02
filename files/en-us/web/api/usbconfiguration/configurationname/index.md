---
title: USBConfiguration.configurationName
slug: Web/API/USBConfiguration/configurationName
tags:
  - API
  - Property
  - Reference
  - USB
  - USBConfiguration
  - WebUSB
  - WebUSB API
  - configurationName
browser-compat: api.USBConfiguration.configurationName
---
{{securecontext_header}}{{APIRef("")}}

The **`configurationName`** read-only property
of the {{domxref("USBConfiguration")}} interface returns the name provided by the device
to describe this configuration. This is equal to the value of the string descriptor with
the index provided in the [`iConfiguration`](https://www.beyondlogic.org/usbnutshell/usb5.shtml#ConfigurationDescriptors)
field of the configuration descriptor defining this configuration.

## Value

The name provided by the device to describe this configuration.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
