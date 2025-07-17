---
title: WebHID API
slug: Web/API/WebHID_API
page-type: web-api-overview
status:
  - experimental
browser-compat: api.HID
---

{{DefaultAPISidebar("WebHID API")}}{{SeeCompatTable}}{{AvailableInWorkers("window_and_worker_except_shared")}}

A Human Interface Device (HID) is a type of device that takes input from or provides output to humans. It also refers to the HID protocol, a standard for bi-directional communication between a host and a device that is designed to simplify the installation procedure. The HID protocol was originally developed for USB devices but has since been implemented over many other protocols, including Bluetooth.

## Interfaces

- {{domxref("HID")}}
  - : Provides methods for connecting to HID devices, listing attached HID devices and event handlers for connected HID devices.
- {{domxref("HIDDevice")}}
  - : Represents an HID device. It's possible for a single physical device to be represented by multiple `HIDDevice` objects.
- {{domxref("HIDInputReportEvent")}}
  - : Passed to the `HIDDevice` {{domxref("HIDDevice.inputreport_event", "inputreport")}} event when an input report is received from any associated HID device.
- {{domxref("HIDConnectionEvent")}}
  - : Passed to `HID` {{domxref("HID.connect_event", "connect")}} and {{domxref("HID.disconnect_event", "disconnect")}} events when a device is connected or disconnected.

## Examples

You can connect to a device with the {{domxref("HID.requestDevice","requestDevice()")}} method. In this case, we select from all the available devices.

```js
const device = await navigator.hid.requestDevice({ filters: [] });
// A popup titled `... wants to connect to a HID Device` with `Cancel` and `Connect` buttons will show up with a device list to select from.
// Select one and click on `Connect` button. Then the device will be an array with the selected device in it.
```

We can retrieve all the devices the website has been granted access to previously and log the device names to the console.

```js
let devices = await navigator.hid.getDevices();
devices.forEach((device) => {
  console.log(`HID: ${device.productName}`);
});
```

We can register event listeners for disconnection of any HID devices.

```js
navigator.hid.addEventListener("disconnect", (event) => {
  console.log(`HID disconnected: ${event.device.productName}`);
  console.dir(event);
});
// For example, when my connected keyboard gets disconnected, the log in the console will show:
// HID disconnected: USB Keyboard
// {
//    bubbles: false
//    cancelBubble: false
//    cancelable: false
//    composed: false
//    currentTarget: HID {onconnect: null, ondisconnect: null}
//    defaultPrevented: false
//    device: HIDDevice {oninputreport: null, opened: false, vendorId: 6700, productId: 11555, productName: "USB Keyboard", …}
//    eventPhase: 0
//    isTrusted: true
//    path: []
//    returnValue: true
//    srcElement: HID {onconnect: null, ondisconnect: null}
//    target: HID {onconnect: null, ondisconnect: null}
//    timeStamp: 18176.600000023842
//    type: "disconnect"
// }

// The event above is an instance of the HIDConnectionEvent interface.
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
