---
title: HIDDevice
slug: Web/API/HIDDevice
page-type: web-api-interface
status:
  - experimental
browser-compat: api.HIDDevice
---

{{securecontext_header}}{{APIRef("WebHID API")}}{{SeeCompatTable}}{{AvailableInWorkers("window_and_worker_except_shared")}}

The **`HIDDevice`** interface of the [WebHID API](/en-US/docs/Web/API/WebHID_API) represents a HID Device. It provides properties for accessing information about the device, methods for opening and closing the connection, and the sending and receiving of reports.

{{InheritanceDiagram}}

## Instance properties

This interface also inherits properties from {{domxref("EventTarget")}}.

- {{domxref("HIDDevice.opened")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Returns a {{jsxref("boolean")}}, true if the device has an open connection.
- {{domxref("HIDDevice.vendorId")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Returns the vendorId of the HID device.
- {{domxref("HIDDevice.productId")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Returns the productId of the HID device.
- {{domxref("HIDDevice.productName")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Returns a string containing the product name of the HID device.
- {{domxref("HIDDevice.collections")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Returns an array of report formats for the HID device.

### Events

- {{domxref("HIDDevice.inputreport_event", "inputreport")}} {{Experimental_Inline}}
  - : Fires when a report is sent from the device.

## Instance methods

This interface also inherits methods from {{domxref("EventTarget")}}.

- {{domxref("HIDDevice.open()")}} {{Experimental_Inline}}
  - : Opens a connection to this HID device, and returns a {{jsxref("Promise")}} which resolves once the connection has been successful.
- {{domxref("HIDDevice.close()")}} {{Experimental_Inline}}
  - : Closes the connection to this HID device, and returns a {{jsxref("Promise")}} which resolves once the connection has been closed.
- {{domxref("HIDDevice.forget()")}} {{Experimental_Inline}}
  - : Closes the connection to this HID device and resets access permission, and returns a {{jsxref("Promise")}} which resolves once the permission was reset.
- {{domxref("HIDDevice.sendReport()")}} {{Experimental_Inline}}
  - : Sends an output report to this HID Device, and returns a {{jsxref("Promise")}} which resolves once the report has been sent.
- {{domxref("HIDDevice.sendFeatureReport()")}} {{Experimental_Inline}}
  - : Sends a feature report to this HID device, and returns a {{jsxref("Promise")}} which resolves once the report has been sent.
- {{domxref("HIDDevice.receiveFeatureReport()")}} {{Experimental_Inline}}
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
  await new Promise((resolve) => setTimeout(resolve, 100));
  // Turn on
  await device.sendFeatureReport(reportId, Uint32Array.from([512, 0]));
  await new Promise((resolve) => setTimeout(resolve, 100));
}
```

You can see more examples, and live demos in the article [Connecting to uncommon HID devices](https://developer.chrome.com/docs/capabilities/hid).

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
