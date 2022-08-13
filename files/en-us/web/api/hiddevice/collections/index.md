---
title: HIDDevice.collections
slug: Web/API/HIDDevice/collections
page-type: web-api-instance-property
tags:
  - API
  - Property
  - Reference
  - collections
  - HIDDevice
  - Experimental
browser-compat: api.HIDDevice.collections
---
{{securecontext_header}}{{APIRef("WebHID API")}}{{SeeCompatTable}}

The **`collections`** read-only property of the {{domxref("HIDDevice")}} interface returns an array of report formats

## Value

An array of report formats. Each entry contains the following:

- `usagePage`

  - : An integer representing the usage page component of the HID usage associated with this collection. The usage for a top level collection is used to identify the device type.

    Standard HID usage values can be found in the [HID Usage Tables](https://usb.org/document-library/hid-usage-tables-13) document

- `usage`
  - : An integer representing the usage ID component of the HID usage associated with this collection.
- `type`

  - : An 8-bit value representing the collection type, which describes a different relationship between the grouped items. One of:

    - `0x00`
      - : Physical (group of axes)
    - `0x01`
      - : Application (mouse, keyboard)
    - `0x02`
      - : Logical (interrelated data)
    - `0x03`
      - : Report
    - `0x04`
      - : Named array
    - `0x05`
      - : Usage switch
    - `0x06`
      - : Usage modified
    - `0x07 to 0x7F`
      - : Reserved for future use
    - `0x80 to 0xFF`
      - : Vendor-defined

    More information on these types can be found in the [Device Class Definition](https://www.usb.org/document-library/device-class-definition-hid-111) document.

- `children`
  - : An array of sub-collections which takes the same format as a top-level collection.
- `inputReports`
  - : An array of `inputReport` items which represent individual input reports described in this collection.
- `outputReports`
  - : An array of `outputReport` items which represent individual output reports described in this collection.
- `featureReports`
  - : An array of `featureReport` items which represent individual feature reports described in this collection.

## Examples

The following example demonstrates how to access the various elements once the `collections` property has been returned. You can see more examples, and live demos in the article [Connecting to uncommon HID devices](https://web.dev/hid/).

```js
for (const collection of device.collections) {
  // A HID collection includes usage, usage page, reports, and subcollections.
  console.log(`Usage: ${collection.usage}`);
  console.log(`Usage page: ${collection.usagePage}`);

  for (const inputReport of collection.inputReports) {
    console.log(`Input report: ${inputReport.reportId}`);
    // Loop through inputReport.items
  }

  for (const outputReport of collection.outputReports) {
    console.log(`Output report: ${outputReport.reportId}`);
    // Loop through outputReport.items
  }

  for (const featureReport of collection.featureReports) {
    console.log(`Feature report: ${featureReport.reportId}`);
    // Loop through featureReport.items
  }

  // Loop through subcollections with collection.children
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
