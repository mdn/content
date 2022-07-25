---
title: HIDDevice
slug: Web/API/HIDDevice
page-type: web-api-interface
tags:
  - API
  - Interface
  - Reference
  - HIDDevice
  - Experimental
browser-compat: api.HIDDevice
---
{{securecontext_header}}{{APIRef("WebHID API")}}{{SeeCompatTable}}

The **`HIDDevice`** interface of the {{domxref('WebHID API')}} represents a HID Device. It provides properties for accessing information about the device, methods for opening and closing the connection, and the sending and receiving of reports.

{{InheritanceDiagram}}

## Properties

This interface also inherits properties from {{domxref("EventTarget")}}.

- {{domxref("HIDDevice.opened")}} {{ReadOnlyInline}}
  - : Returns a {{jsxref("boolean")}}, true if the device has an open connection.
- {{domxref("HIDDevice.vendorId")}} {{ReadOnlyInline}}
  - : Returns the vendorId of the HID device.
- {{domxref("HIDDevice.productId")}} {{ReadOnlyInline}}
  - : Returns the productID of the HID device.
- {{domxref("HIDDevice.productName")}} {{ReadOnlyInline}}
  - : Returns a string containing the product name of the HID device.
- {{domxref("HIDDevice.collections")}} {{ReadOnlyInline}}
  - : Returns an array of report formats for the HID device.

### Events

- {{domxref("HIDDevice.inputreport_event", "inputreport")}}
  - : Fires when a report is sent from the device.

## Methods

This interface also inherits methods from {{domxref("EventTarget")}}.

- {{domxref("HIDDevice.open()")}}
  - : Opens a connection to this HID device, and returns a {{jsxref("Promise")}} which resolves once the connection has been successful.
- {{domxref("HIDDevice.close()")}}
  - : Closes the connection to this HID device, and returns a {{jsxref("Promise")}} which resolves once the connection has been closed.
- {{domxref("HIDDevice.sendReport()")}}
  - : Sends an output report to this HID Device, and returns a {{jsxref("Promise")}} which resolves once the report has been sent.
- {{domxref("HIDDevice.sendFeatureReport()")}}
  - : Sends a feature report to this HID device, and returns a {{jsxref("Promise")}} which resolves once the report has been sent.
- {{domxref("HIDDevice.receiveFeatureReport()")}}
  - : Receives a feature report from this HID device in the form of a {{jsxref("Promise")}} which resolves with a {{jsxref("DataView")}}. This allows typed access to the contents of this message.

## Examples

The following example demonstrates listening for an `inputreport` event that will allow the application to detect which button is pressed on a Joy-Con Right device.

```js
device.addEventListener("inputreport", (event) => {
  const { data, device, reportId } = event;

  // Handle only the Joy-Con Right device and a specific report ID.
  if (device.productId !== 0x2007 && reportId !== 0x3f) return;

  const value = data.getUint8(0);
  if (value === 0) return;

  const someButtons = { 1: "A", 2: "X", 4: "B", 8: "Y" };
  console.log(`User pressed button ${someButtons[value]}.`);
});
```

In the following example `sendFeatureReport` is used to make a device blink.

```js
const reportId = 1;
for (let i = 0; i < 10; i++) {
  // Turn off
  await device.sendFeatureReport(reportId, Uint32Array.from([0, 0]));
  await waitFor(100);
  // Turn on
  await device.sendFeatureReport(reportId, Uint32Array.from([512, 0]));
  await waitFor(100);
}
```

You can see more examples, and live demos in the article [Connecting to uncommon HID devices](https://web.dev/hid/).

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
