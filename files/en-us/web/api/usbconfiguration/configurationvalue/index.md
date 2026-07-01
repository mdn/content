---
title: "USBConfiguration: configurationValue property"
short-title: configurationValue
slug: Web/API/USBConfiguration/configurationValue
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.USBConfiguration.configurationValue
---

{{APIRef("WebUSB API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

The **`configurationValue`** read-only property
of the {{domxref("USBConfiguration")}} interface returns the configuration value of this configuration. This is equal to the
[`bConfigurationValue`](https://www.beyondlogic.org/usbnutshell/usb5.shtml#ConfigurationDescriptors) field of the configuration descriptor provided by the device defining this configuration.

## Value

The [configuration descriptor](https://www.beyondlogic.org/usbnutshell/usb5.shtml#ConfigurationDescriptors) of the {{domxref("USBDevice")}} specified in the constructor of the
current {{domxref("USBConfiguration")}} instance.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
