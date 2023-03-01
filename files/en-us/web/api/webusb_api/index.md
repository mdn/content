---
title: WebUSB API
slug: Web/API/WebUSB_API
page-type: web-api-overview
status:
  - experimental
spec-urls: https://wicg.github.io/webusb/
---

{{securecontext_header}}{{DefaultAPISidebar("WebUSB API")}}{{SeeCompatTable}}

The **WebUSB API** provides a way to expose non-standard Universal Serial Bus (USB) compatible devices services to the web, to make USB safer and easier to use.

## Concepts and Usage

USB is the de-facto standard for wired peripherals. The USB devices that you connect to your computer are typically grouped into a number of device classes—such as keyboards, mice, video devices, and so on. These are supported using the operating system's class driver. Many of these are also web accessible via the {{domxref("WebHID API")}}.

In addition to these standardized devices, there are a large number of devices that don't fit into any class. These need custom drivers, and are inaccessible from the web due to the native code required to take advantage of them. Installing one of these devices often involves searching on a manufacturer's website for drivers and, should you wish to use the device on another computer, repeating the process again.

WebUSB provides a way for these non-standardized USB device services to be exposed to the web. This means that hardware manufacturers will be able to provide a way for their device to be accessed from the web, without having to provide their own API.

When connecting a new WebUSB-compatible device, the browser displays a notification providing a link to the manufacturer's website. On arriving at the site the browser prompts for permission to connect to the device, then the device is ready for use. No drivers need be downloaded and installed.

## Interfaces

- {{domxref("USB")}}
  - : Provides attributes and methods for finding and connecting USB devices from a web page.
- {{domxref("USBConnectionEvent")}}
  - : The event type passed to {{domxref("USB.onconnect")}} or {{domxref("USB.ondisconnect")}} when the user agent detects a new USB device has been connected to, or disconnected from the host.
- {{domxref("USBDevice")}}
  - : Provides access to metadata about a paired USB device and methods for controlling it.
- {{domxref("USBInTransferResult")}}
  - : Represents the result from requesting a transfer of data from the USB device to the USB host.
- {{domxref("USBIsochronousInTransferPacket")}}
  - : Represents the status of an individual packet from a request to transfer data from the USB device to the USB host over an isochronous endpoint.
- {{domxref("USBIsochronousInTransferResult")}}
  - : Represents the result from requesting a transfer of data from the USB device to the USB host.
- {{domxref("USBIsochronousOutTransferPacket")}}
  - : Represents the status of an individual packet from a request to transfer data from the USB host to the USB device over an isochronous endpoint.
- {{domxref("USBIsochronousOutTransferResult")}}
  - : Represents the result from requesting a transfer of data from the USB host to the USB device.
- {{domxref("USBConfiguration")}}
  - : Provides information about a particular configuration of a USB device and the interfaces that it supports.
- {{domxref("USBInterface")}}
  - : Provides information about an interface provided by the USB device.
- {{domxref("USBAlternateInterface")}}
  - : Provides information about a particular configuration of an interface provided by the USB device.
- {{domxref("USBEndPoint")}}
  - : Provides information about an endpoint provided by the USB device.

## Examples

### Accessing a connected device

The following example demonstrates how to access a connected Arduino device using {{domxref("USB.requestDevice()")}}, which has a vendorId of `0x2341`.

```js
navigator.usb
  .requestDevice({ filters: [{ vendorId: 0x2341 }] })
  .then((device) => {
    console.log(device.productName); // "Arduino Micro"
    console.log(device.manufacturerName); // "Arduino LLC"
  })
  .catch((error) => {
    console.error(error);
  });
```

### Finding all connected devices

You can find all connected devices with {{domxref("USB.getDevices()")}}. In the following example, with the Arduino device connected, product and manufacturer name are printed to the console.

```js
navigator.usb.getDevices().then((devices) => {
  devices.forEach((device) => {
    console.log(device.productName); // "Arduino Micro"
    console.log(device.manufacturerName); // "Arduino LLC"
  });
});
```

## Specifications

{{Specifications}}

## See also

- [Access USB Devices on the Web](https://web.dev/usb/)
