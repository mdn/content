---
title: USBConfiguration()
slug: Web/API/USBConfiguration/USBConfiguration
tags:
  - API
  - Constructor
  - Experimental
  - NeedsE
  - Reference
  - USB
  - USBConfiguration
  - WebUSB
  - WebUSB API
browser-compat: api.USBConfiguration.USBConfiguration
---
{{draft}}{{securecontext_header}}{{DefaultAPISidebar("WebUSB API")}}

The **`USBConfiguration()`** constructor
creates a new {{domxref("USBConfiguration")}} object which contains information about
the configuration on the provided USBDevice with the given configuration value.

## Syntax

```js
var USBConfiguration = new USBConfiguration(device, configurationValue)
```

### Parameters

- device
  - : Specifies the {{domxref('USBDevice')}} you want to configure.
- configurationValue
  - : Specifies the [configuration
    descriptor](https://www.beyondlogic.org/usbnutshell/usb5.shtml#ConfigurationDescriptors) you want to read. This is an unsigned integer in the range 0 to 255.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
