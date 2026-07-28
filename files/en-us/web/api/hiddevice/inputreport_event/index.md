---
title: "HIDDevice: inputreport event"
short-title: inputreport
slug: Web/API/HIDDevice/inputreport_event
page-type: web-api-event
status:
  - experimental
browser-compat: api.HIDDevice.inputreport_event
---

{{securecontext_header}}{{APIRef("WebHID API")}}{{SeeCompatTable}}{{AvailableInWorkers("window_and_worker_except_shared")}}

The **`inputreport`** event of the {{domxref("HIDDevice")}} interface fires when a new report is received from the HID device.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js-nolint
addEventListener("inputreport", (event) => { })

oninputreport = (event) => { }
```

## Event type

An {{domxref("HIDInputReportEvent")}}. Inherits from {{domxref("Event")}}.

{{InheritanceDiagram("HIDInputReportEvent")}}

## Example

The following example demonstrates listening for an `inputreport` event that will allow the application to detect which button is pressed on a Joy-Con Right device. You can see more examples, and live demos in the article [Connecting to uncommon HID devices](https://developer.chrome.com/docs/capabilities/hid).

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

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
